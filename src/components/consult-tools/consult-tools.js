import './consult-tools.css';
import { useContext } from 'react';
import { ConsultContext } from '../../utils/consult-context';
import IconButton from '../icon-button/icon-button';
import TextInput from '../text-input/text-input';
import table from '../../assets/table.png';
import cards from '../../assets/cards.png';


const ConsultTools = () => {

  // Hooks para usar contextos de consulta
  const { viewStyle, setViewStyle, searchText, setSearchText, restartConsult, searchCountry } = useContext(ConsultContext);

  return (
    <div id='tools-wrapper'>

      {/* Botões de opção para controlar a visualização */}
      <div id='options-wrapper'>

        <input id='table' value='table' type='radio' checked={viewStyle === 'table'} onChange={e => setViewStyle(e.target.value)} />
        <label htmlFor='table'>
          <img className='radio-icon' src={table} alt='Option table' />
          <span>Tabela</span>
        </label>

        <input id='cards' value='cards' type='radio' checked={viewStyle === 'cards'} onChange={e => setViewStyle(e.target.value)} />
        <label htmlFor='cards'>
          <img className='radio-icon' src={cards} alt='Option cards' />
          <span>Cartões</span>
        </label>

      </div>


      {/* Barra de pesquisa */}
      <div id='search-wrapper'>

        <TextInput hint='Digite um país para pesquisar' value={searchText} setValue={setSearchText} onPressEnter={searchCountry} />

        <IconButton onClick={searchCountry} icon='search' />

        <IconButton onClick={restartConsult} icon='undo' />

      </div>

    </div>
  )
}

export default ConsultTools;