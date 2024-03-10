import './button.css';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import historic from '../../assets/historic.png';
import exporting from '../../assets/export.png';


const Button = ({ label, type, onClick, linkPath, exportContent }) => {

  // Botão padrão com estilo, ícone e rótulo personalizados
  const ButtonContent = () => {
    return (
      <button id='button-wrapper' onClick={onClick}>
        {type === 'historic' ? <img id='button-icon' alt='Historic button' src={historic} /> : null}
        {type === 'export' ? <img id='button-icon' alt='Export button' src={exporting} /> : null}
        {label}
      </button>
    )
  }

  // Verifica se o botão é de exportação ou navegação
  if (type === 'export' && exportContent?.length > 0) {
    return (
      <CSVLink className='button-link' data={exportContent} separator={"|"} filename={'Search_Results_' + Date.now()}>
        <ButtonContent />
      </CSVLink>
    )
  }
  else {
    return (
      <Link className='button-link' to={linkPath}>
        <ButtonContent />
      </Link>
    )
  }
}

export default Button;