import './card.css';
import { useState } from 'react';
import MapModal from '../map-modal/map-modal';
import population from '../../assets/population.png';
import currency from '../../assets/currency.png';
import language from '../../assets/language.png';


function Card({ data }) {

  // Hook para controlar a exibição do modal ao clicar no cartão
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='card-wrapper' onClick={() => {setIsOpen(true); console.log("setIsOpen", data);}}>
        <p id='name'>{data.name}</p>
        <p id='capital'>{data.capital || "Sem dados"}</p>
        <img id='flag' src={data.flag} alt='Logotipo do App' />
        <div className='info-row'>
          <img id='info-icon' src={population} alt='Population icon' />
          <p id='population'>{data.population || "Sem dados"}</p>
        </div>
        <div className='info-row'>
          <img id='info-icon' src={currency} alt='Currency icon' />
          <p id='currency'>{data.currency || "Sem dados"}</p>
        </div>
        <div className='info-row'>
          <img id='info-icon' src={language} alt='Language icon' />
          <p id='language'>{data.language || "Sem dados"}</p>
        </div>
      </div>

      <MapModal isOpen={modalIsOpen} setIsOpen={setIsOpen} countryData={data} />
    </>
  );
}

export default Card;