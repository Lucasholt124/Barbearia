import './style.css';
import IMGEquipe from '../../assets/IMGEquipe.png';

const NossaEquipe = () => {
  return (
    <main className='dv-nossa-equipe'>
      <div id='dv-imgequipe'>
          <img src={IMGEquipe} alt="Imagem Nossa Equipe" />
      </div>    
      <div id='dv-nossa-equipe-h1'>
        <h1>Nossa Equipe</h1>
      </div> 
        <p id='dv-nossa-equipe-p'>Aragão</p>
    </main>
  )
}

export default NossaEquipe