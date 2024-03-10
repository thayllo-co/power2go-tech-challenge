import './consult-tools.css';
import { useState } from 'react';
import IconButton from '../icon-button/icon-button';
import TextInput from '../text-input/text-input';
import table from '../../assets/table.png';
import cards from '../../assets/cards.png';


const ConsultTools = ({ setDefaultConsult, setCountryConsult, consultViewStyle, setConsultViewStyle, incomingText }) => {

  // Hook para controlar o texto da pesquisa
  const [consultText, setConsultText] = useState(incomingText || "");

  // Controlador do estilo de visualização
  const onStyleOptionChange = e => {
    setConsultViewStyle(e.target.value);
  }

  // Redefine valores de pesquisa
  const resetConsult = () => {
    setConsultText("");
    setDefaultConsult(consultText);
  }

  // Pesquisa a entrada de texto
  const consultCountry = () => {
    setCountryConsult(consultText);
  }

  return (
    <div id='tools-wrapper'>

      {/* Botões de opção para controlar a visualização */}
      <div id='options-wrapper'>

        <input id='table' value='table' type='radio' checked={consultViewStyle === 'table'} onChange={onStyleOptionChange} />
        <label htmlFor='table'>
          <img className='radio-icon' src={table} alt='Option table' />
          <span>Tabela</span>
        </label>

        <input id='cards' value='cards' type='radio' checked={consultViewStyle === 'cards'} onChange={onStyleOptionChange} />
        <label htmlFor='cards'>
          <img className='radio-icon' src={cards} alt='Option cards' />
          <span>Cartões</span>
        </label>

      </div>


      {/* Barra de pesquisa */}
      <div id='search-wrapper'>

        <TextInput hint='Digite um país para pesquisar' value={consultText} setValue={setConsultText} onPressEnter={consultCountry} />

        <IconButton onClick={consultCountry} icon='search' />

        <IconButton onClick={resetConsult} icon='undo' />

      </div>

    </div>
  )
}

export default ConsultTools;