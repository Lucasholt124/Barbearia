import './style.css';
import Localidade from '../../assets/IMGLocalidade.png';
import LogoFooter from '../../assets/LogoFooter.png';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';


const NossaUnidade = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer>
      <h1>Nossa Unidade</h1>
      <div>
        <img src={Localidade} alt="Imagem da nossa Localidade" />
        <p>Rua Nelson n433 
          Ribeiropolis-SE</p>
      </div>
      <div id='dv-logo-footer'>
        <img  onClick={scrollToTop} id='Contatos' src={LogoFooter} alt="Minha Logo Footer" />
      </div>
      <div id='dv-redes-sociais'>
          <a id='a-redes-sociais1' href="https://www.facebook.com/lucas.aragao.1291/"	><img src={facebook} alt="Logo do Facebook" /></a>
          <a id='a-redes-sociais2' href="https://www.instagram.com/lucas_aragaotm/"	><img src={instagram} alt="Logo do Instagram" /></a>
          <a  id='a-redes-sociais3' href="#"	><img src={twitter} alt="Logo do Twitter" /></a>
      </div>
    </footer>
  )
}

export default NossaUnidade