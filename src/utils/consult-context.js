import { createContext, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { addSearchToHistoric } from './local-historic';
import { httpGetRequest } from './http-request';


export const ConsultContext = createContext();


export const ConsultContextProvider = ({ children }) => {

  // Hooks de estados globais usados no contexto
  const [viewStyle, setViewStyle] = useState('table'); // Controla o estilo de exibição dos países
  const [searchText, setSearchText] = useState(''); // Controla o texto de pesquisa
  const [isLoading, setIsLoading] = useState(true); // Indicador de atividade assíncrona
  const [countries, setCountries] = useState([]); // Array de países a serem exibidos na IU

  // Inicializa o contexto redefinindo o consult obtendo todos os países
  useEffect(() => {
    restartConsult();
  }, []);

  // Função para obter todos os países
  const restartConsult = () => {
    setIsLoading(true);
    setSearchText('');
    httpGetRequest('all')
      .then(data => {
        handleAPIResponse(data, null);
        setIsLoading(false);
      });
  }

  // Função para pesquisar países fornecida ao contexto
  const searchCountry = () => searchAPI(searchText);

  // Função para recuperar países a partir do histórico
  const restoreSearch = searchFromHistory => {
    setSearchText(searchFromHistory);
    searchAPI(searchFromHistory);
  }

  // Função interna para procurar países a partir de um texto
  const searchAPI = name => {
    if (name) {
      setIsLoading(true);
      httpGetRequest('name/' + name)
        .then(data => {
          handleAPIResponse(data, name);
          setIsLoading(false);
        });
    } else {
      toast.error('Insira algum texto');
    }
  }


  // Função que trata dos dados de resposta da API
  const handleAPIResponse = (data, search) => {
    // Verifica se a pesquisa retornou dados
    if (data?.length > 0) {

      // Adiciona busca ao histórico se houver texto pesquisado
      if (search) {
        addSearchToHistoric(search, data.length);
      }

      // Loop pelo array de respostas para formatar os dados
      let countries = [];
      for (let county of data) {
        countries.push({
          'name': county.translations.por.common,
          'capital': county.capital?.[0],
          'population': county.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
          'currency': typeof county.currencies === 'object' ? county.currencies[Object.keys(county.currencies)[0]].name : '',
          'language': typeof county.languages === 'object' ? county.languages[Object.keys(county.languages)[0]] : '',
          'flag': county.flags.svg,
          'coordinates': county.latlng
        })
      }

      // Ordena os países alfabeticamente por nome
      countries.sort(function (a, b) {
        return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
      })

      // Adiciona cabeçalho para tabela
      countries.unshift({ 'name': 'Nome', 'capital': 'Capital', 'population': 'População', 'currency': 'Moeda', 'language': 'Idioma' });

      setCountries(countries);
    }
    else {
      setCountries([]);
    }

  }

  // Combinação dos estados e funções passados ao contexto
  const contextValue = {
    viewStyle,
    setViewStyle,
    searchText,
    setSearchText,
    isLoading,
    countries,
    restartConsult,
    searchCountry,
    restoreSearch
  }

  return (
    <ConsultContext.Provider value={contextValue}>
      {children}
      <ToastContainer />
    </ConsultContext.Provider>
  )
}