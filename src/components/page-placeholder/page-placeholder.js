import loadingIllustration from '../../assets/loading_illustration.png';


const PagePlaceholder = () => {
  return (
    <div id='placeholder-wrapper'>

      <img src={loadingIllustration} alt='Empty page illustration' />

      <p>Ainda não há dados...</p>

    </div>
  )
}

export default PagePlaceholder;