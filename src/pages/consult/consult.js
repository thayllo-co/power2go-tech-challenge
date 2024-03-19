import { useContext } from 'react';
import { ConsultContext } from '../../utils/consult-context';
import Header from '../../components/header/header';
import ConsultTools from '../../components/consult-tools/consult-tools';
import ConsultFooter from '../../components/consult-footer/consult-footer';
import Table from '../../components/table/table';
import CardsGrid from '../../components/cards-grid/cards-grid';
import PagePlaceholder from '../../components/page-placeholder/page-placeholder';


const Consult = () => {

  // Hooks para usar contextos de consulta
  const { viewStyle, isLoading, countries } = useContext(ConsultContext);

  return (

    <div id='consult-wrapper'>

      <Header title='Consultar Países' parentPath='/' />

      <ConsultTools />

      <div id='consult-content' className={viewStyle}>

        {(isLoading || countries?.length <= 0) && <PagePlaceholder />}

        {(!isLoading && viewStyle === 'table' && countries?.length > 0) && <Table content={countries} />}

        {(!isLoading && viewStyle === 'cards' && countries?.length > 0) && <CardsGrid content={countries.slice(1)} />}

      </div>

      <ConsultFooter exportContent={countries} />

    </div>

  );
}

export default Consult;