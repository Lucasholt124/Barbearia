import RetangleSobre1 from '../../assets/RectangleSobre1.png';
import RetangleSobre2 from '../../assets/RectangleSobre2.png';
import RetangleSobre3 from '../../assets/RectangleSobre3.png';
import './style.css';



const Sobre = () => {
  return (
    <>
    <span id='id-retangle-sobre'>
      <img src={RetangleSobre1} alt="Imagem Retangle do sobre1" />
    </span>
    <span id='id-retangle-sobre2'>
      <img src={RetangleSobre2} alt="Imagem Retangle do sobre2" />
    </span>
    <span id='id-retangle-sobre3'>
      <img src={RetangleSobre3} alt="Imagem Retangle do sobre3" />
    </span>
    <span className='caixa-text-sobre'>
      <h1 id='id-h1-sobre'>Sobre</h1>
      <h4 id='id-h3-sobre'>Bem-vindo à #Slack Somos mais do que uma simples barbearia; somos um destino para homens que valorizam não apenas um corte de cabelo, mas uma experiência completa de cuidados pessoais. Aqui, combinamos habilidade artesanal com um toque contemporâneo, criando um espaço onde você pode relaxar, socializar e sair sentindo-se renovado e confiante.
<br /> <br />Nossa equipe de barbeiros é apaixonada pelo que faz e está empenhada em oferecer os melhores serviços, desde cortes de cabelo clássicos até estilos modernos e precisos. Utilizamos técnicas tradicionais e as mais recentes tendências da indústria para garantir que cada cliente saia com um visual que reflita sua personalidade única.</h4>
   </span>
     


    </>
  )
}

export default Sobre