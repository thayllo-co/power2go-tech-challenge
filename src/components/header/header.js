import './header.css';
import { Link } from 'react-router-dom';
import back from '../../assets/back.png';


const Header = ({ title, parentPath }) => {
  // Cabeçalho com título e ícone de navegação
  return (
    <div id='header-wrapper'>

      <Link to={parentPath}>

        <img src={back} id='icon-back-navigation' alt='Navigate back icon' />

      </Link>

      <p id='header-title'>{title}</p>

    </div>
  )
}

export default Header;