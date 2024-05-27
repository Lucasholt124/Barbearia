import './style.css';
import Servicos1 from '../../assets/Servicos1.png';
import Servicos2 from '../../assets/servicos2.png';
import Servicos3 from '../../assets/servicos3.png';
import Retangle from '../../components/Retangle';










const Servicos = () => {




  return (
    <div  id='dv-id-servicos'>
      <h1 id='Serviços' >Serviços</h1>
      <p>Serviços de Excelência para Homens Modernos
Na #Slack, oferecemos uma gama completa de serviços de qualidade para atender às necessidades de homens que valorizam sua aparência e bem-estar. Nossos serviços incluem:
Cortes de Cabelo Clássicos e Modernos: Dos cortes atemporais aos estilos mais recentes, nossos barbeiros experientes estão aqui para ajudá-lo a encontrar o visual perfeito que complementa sua personalidade e estilo de vida.
Barba Cuidadosamente Aparada: Mantenha sua barba impecável com nossos serviços de aparagem e modelagem. De um visual clássico ao moderno, nossos especialistas em barba garantem resultados precisos e elegantes.</p>
    <div  className='dv-servicos1'>
     <img src={Servicos1} alt="Iamgem de um corte de cabelo" />
     <span id='id-retangle-servicos'><Retangle /></span>
     </div>
     <div className='dv-servicos2'>
     <img src={Servicos2} alt="Iamgem2 de um corte de cabelo" />
     <span id='id-retangle-servicos'><Retangle /></span>
     </div>
     <div className='dv-servicos3'>
     <img src={Servicos3} alt="Iamgem3 de um corte de cabelo" />
     <span id='id-retangle-servicos'><Retangle /></span>
     </div>
    </div>
  )
}

export default Servicos;