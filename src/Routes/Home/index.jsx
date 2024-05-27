import ImagemPrincipal from '../../assets/imagemPrincipal.png';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { FaWhatsapp } from "react-icons/fa6";


import './style.css';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <img id='Home' src={ImagemPrincipal} alt="Imagem Principal" />
          
            <a id='id-span-logo-whats' href='https://api.whatsapp.com/send?phone=5579999383543&text=Ol%C3%A1%20peguei%20seu%20contado%20no%20site'> <FaWhatsapp /></a>
           
         
          <span id='id-span'>
          <h1>ESTILO É UM REFLEXO DA  SUA ATITUDE E <br /> SUA PERSONALIDADE </h1>
          </span>
          <div className='ho-button'>
            <Button />
          </div>
          <p id='horario'>Horário de funcionamento: 09:00 às 18:00</p>
        </section>
      </main>

    </>
  )
}

export default Home
