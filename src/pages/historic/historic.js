import './historic.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHistoric } from '../../utils/local-historic';
import Header from '../../components/header/header';
import Table from '../../components/table/table';
import IconButton from '../../components/icon-button/icon-button';
import PagePlaceholder from '../../components/page-placeholder/page-placeholder';


function Historic() {

  // Hook de histórico da página
  const [historicArray, setHistoricArray] = useState([]);

  // Hook de navegação para passar parâmetros
  const navigate = useNavigate();

  useEffect(() => {
    mountHistoric();
  }, []);

  // Montagem do histórico
  const mountHistoric = () => {

    // Loop pelo array de respostas para formatar data e botão de consulta
    let restoredHistoric = getHistoric() || [];
    // if (restoredHistoric)
    restoredHistoric = restoredHistoric.map((item) => {
      item.date = new Date(item.date).toLocaleString();
      item.resume =
        <IconButton
          onClick={() => navigate('/consult', { state: { search: item.text } })}
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

      <div id="historic-table">

        {(historicArray?.length <= 1) && <PagePlaceholder />}

        {(historicArray?.length > 1) && <Table content={historicArray} />}

      </div>

    </div>

  );
}

export default Historic;