import { useContext } from 'react';
import { ConsultContext } from '../../utils/consult-context';
import search from '../../assets/search.png';
import undo from '../../assets/undo.png';


const IconButton = ({ icon, onClick }) => {
  // Botão que muda de ícone de acordo a prop icon

  const { isLoading } = useContext(ConsultContext);

  return (
    <button className='icon-button' onClick={onClick}>

      {(icon === 'search' && !isLoading) && <img src={search} alt='Search button' />}

      {(icon === 'undo' && !isLoading) && <img src={undo} alt='Reset search button' />}

      {isLoading && <div id='loader' />}

    </button>
  )
}

export default IconButton;