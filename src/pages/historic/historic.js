import './historic.css';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConsultContext } from '../../utils/consult-context';
import { getHistoric } from '../../utils/local-historic';
import Header from '../../components/header/header';
import Table from '../../components/table/table';
import IconButton from '../../components/icon-button/icon-button';
import PagePlaceholder from '../../components/page-placeholder/page-placeholder';


const Historic = () => {

  const [historicArray, setHistoricArray] = useState([]); // Hook de histórico da página
  const { restoreSearch } = useContext(ConsultContext); // Hook para usar restoreSearch do contexto
  const navigate = useNavigate(); // Hook de navegação

  // Inicializa o histórico de buscas
  useEffect(() => {
    mountHistoric();
  }, []);

  // Montagem do histórico
  const mountHistoric = () => {

    // Loop pelo array de respostas para formatar data e botão de consulta
    let restoredHistoric = getHistoric() || [];
    restoredHistoric = restoredHistoric.map((item) => {
      item.date = new Date(item.date).toLocaleString();
      item.resume =
        <IconButton
          onClick={() => {
            restoreSearch(item.text);
            navigate('/consult');
          }}
          icon='search' />
      return item;
    });

    // Adiciona cabeçalho para tabela
    restoredHistoric.unshift({ 'date': 'Data', 'text': 'Texto Pesquisado', 'results': 'Resultados', 'resume': 'Retomar' });
    setHistoricArray(restoredHistoric);
  }

  return (

    <div id='historic-wrapper'>

      <Header title='Histórico' parentPath={'/consult'} />

      <div id='historic-table'>

        {(historicArray?.length <= 1) && <PagePlaceholder />}

        {(historicArray?.length > 1) && <Table content={historicArray} />}

      </div>

    </div>

  );
}

export default Historic;