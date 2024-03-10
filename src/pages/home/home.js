import './home.css';
import Button from '../../components/button/button';
import logo from '../../assets/logo.png';
import globe from '../../assets/globe.png';


const Home = () => {
  return (
    <div id='home-wrapper'>

      <img id='logo' src={logo} alt='logo' />

      <div id='home-content'>

        <img id='globe' src={globe} alt='Globe' />

        <p className='light-header'>Desafio Técnico - ReactJs</p>

        <p className='light-header'>Consultar Países</p>

      </div>

      {/* Navegação até a página de consultar do países */}
      <Button label='Entrar' linkPath={'/consult'} />

    </div>
  )
}

export default Home;
