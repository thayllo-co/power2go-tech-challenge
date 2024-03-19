import { useState } from 'react';
import MapModal from '../map-modal/map-modal';
import population from '../../assets/population.png';
import currency from '../../assets/currency.png';
import language from '../../assets/language.png';


const Card = ({ data }) => {

  // Hook para controlar a exibição do modal ao clicar no cartão
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id='card-wrapper' onClick={() => setIsOpen(true)}>
        <p id='name'>{data.name}</p>
        <p id='capital'>{data.capital || 'Sem dados'}</p>
        <img id='flag' src={data.flag} alt='Flag' />
        <div className='info-row'>
          <img src={population} alt='Population icon' />
          <p>{data.population || 'Sem dados'}</p>
        </div>
        <div className='info-row'>
          <img src={currency} alt='Currency icon' />
          <p>{data.currency || 'Sem dados'}</p>
        </div>
        <div className='info-row'>
          <img src={language} alt='Language icon' />
          <p>{data.language || 'Sem dados'}</p>
        </div>
      </div>

      <MapModal isOpen={modalIsOpen} setIsOpen={setIsOpen} countryData={data} />
    </>
  );
}

export default Card;