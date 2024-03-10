import './page-placeholder.css';
import loadingIllustration from '../../assets/loading_illustration.png';


function PagePlaceholder() {
  return (
    <div id='placeholder-wrapper'>

      <img id='loading-illustration' src={loadingIllustration} alt='Empty page illustration' />

      <p id='loading-text'>Ainda não há dados...</p>

    </div>
  )
}

export default PagePlaceholder;