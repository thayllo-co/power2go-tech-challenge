import './icon-button.css';
import search from '../../assets/search.png';
import undo from '../../assets/undo.png';


function IconButton({ icon, onClick }) {
  // Botão que muda de ícone de acordo a prop icon
  return (
    <button className='icon-button' onClick={onClick}>

      {icon === 'search' && <img className='icon-img' src={search} alt='Search button' />}

      {icon === 'undo' && <img className='icon-img' src={undo} alt='Reset search button' />}

    </button>
  )
}

export default IconButton;