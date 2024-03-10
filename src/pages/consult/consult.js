import './consult.css';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { httpGetRequest } from '../../utils/http-request';
import { addSearchToHistoric } from '../../utils/local-historic';
import Header from '../../components/header/header';
import ConsultTools from '../../components/consult-tools/consult-tools';
import ConsultFooter from '../../components/consult-footer/consult-footer';
import Table from '../../components/table/table';
import Grid from '../../components/grid/grid';
import PagePlaceholder from '../../components/page-placeholder/page-placeholder';


function Consult(props) {

  // Hooks de estados usados da página
  const [viewStyle, setViewStyle] = useState('table');
  const [countries, setCountries] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Hook de navegação para receber parâmetros
  const location = useLocation();
  const incomingSearch = location.state?.search;

  // Inicializa consulta dos países, podendo ter recebido parâmetros do histórico
  useEffect(() => {
    if (incomingSearch) {
      searchCountry(incomingSearch);
    } else {
      getAllCountries();
    }
  }, []);

  // Função para obter todos os países
  const getAllCountries = () => {
    setIsLoading(true);
    httpGetRequest('all')
      .then(data => {
        handleAPIResponse(null, data);
        setIsLoading(false);
      });
  }

  // Função para procurar países a partir de um texto
  const searchCountry = (seachText) => {
    if (seachText) {
      setIsLoading(true);
      httpGetRequest('name/' + seachText)
        .then(data => {
          handleAPIResponse(seachText, data);
          setIsLoading(false);
        });
    } else {
      toast.error('Insira algum texto');
    }
  }

  // Função que trata dos dados de resposta da API
  const handleAPIResponse = (seachText, data) => {

    // Verifica se a pesquisa retornou dados
    if (data?.length > 0) {

      // Adiciona busca ao histórico
      if (seachText) {
        addSearchToHistoric(seachText, data.length)
      }

      // Loop pelo array de respostas para formatar os dados
      let countries = [];
      for (let county of data) {
        countries.push({
          'name': county.translations.por.common,
          'capital': county.capital?.[0],
          'population': county.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
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

  return (

    <div id='consult-wrapper'>

      <Header title='Consultar Países' parentPath='/' />

      <ConsultTools
        setDefaultConsult={getAllCountries}
        setCountryConsult={searchCountry}
        consultViewStyle={viewStyle}
        setConsultViewStyle={setViewStyle}
        incomingText={incomingSearch} />

      <div id="consult-content">

        {(isLoading || countries?.length <= 0) && <PagePlaceholder />}

        {(!isLoading && viewStyle === 'table') && <Table content={countries} />}

        {(!isLoading && viewStyle === 'cards') && <Grid content={countries} />}

      </div>

      <ConsultFooter exportContent={countries} />

      <ToastContainer />

    </div>

  );
}

export default Consult;