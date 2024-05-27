
import { FiAlignJustify } from "react-icons/fi";
import LogoPrincipal from '../../assets/LogoPrincipal.png'
import Button from '../Button';
import {Link} from 'react-scroll';
import './style.css';







function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <>
    <header>
      <img  onClick={scrollToTop}  id='logo' src={LogoPrincipal} alt="LogoPrincipal" />
      <button id='botão-cllick'><FiAlignJustify /></button>
      <Link to="Home"  spy={true} smooth={true} offset={-100} duration={500}  className='btn'><h2 id ="home">Home</h2></Link>
      <Link to="Serviços"  spy={true} smooth={true} offset={-100} duration={500}  className='btn'><h2 id ="servicos">Serviços</h2></Link>
      <Link to="Contatos"  spy={true} smooth={true} offset={-100} duration={500} className='btn'><h2 id ="contatos">Contatos</h2></Link>
      <div id="db-bt-0">
        <Button />
      </div>
    </header>
      
    </>
  )
}

export default Header