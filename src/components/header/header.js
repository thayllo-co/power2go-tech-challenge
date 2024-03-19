import { Link } from 'react-router-dom';
import back from '../../assets/back.png';


const Header = ({ title, parentPath }) => {
  // Cabeçalho com título e ícone de navegação
  return (
    <div id='header-wrapper'>

      <Link to={parentPath}>

        <img src={back} alt='Navigate back icon' />

      </Link>

      <p>{title}</p>

    </div>
  )
}

export default Header;