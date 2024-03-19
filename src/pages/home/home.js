import Button from '../../components/button/button';
import logo from '../../assets/logo.png';
import globe from '../../assets/globe.png';


const Home = () => {
  return (
    <div id='home-wrapper'>

      <img src={logo} alt='logo' />

      <div>

        <img src={globe} alt='Globe' />

        <p>Desafio Técnico - ReactJs</p>

        <p>Consultar Países</p>

      </div>

      {/* Navegação até a página de consultar do países */}
      <Button label='Entrar' linkPath={'/consult'} />

    </div>
  )
}

export default Home;
