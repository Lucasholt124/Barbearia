import { useState } from 'react';
import Modal from '../Modal';
import './style.css';
import ButtonSecundary from './ButtonSecundary';
const Button = () => {
  const [openModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className='dv-btn'>
        <button onClick={() => setIsOpenModal(true)}><h3 id="agendar">Agendar horário</h3></button>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setIsOpenModal(!openModal)}> 
        <h1 id='id-h1'>Agendar horário</h1>
        <form action="">
          <input type="text" placeholder="Digite Seu nome" required  />
          <label htmlFor="Data">Selecione uma Data:</label>
          <input type="date" id="data" name="data" min="2022-12-31" max="2030-01-01" required ></input>
          <label htmlFor="horario">Selecione um horário válido:</label>
          <input type="time" id="horario" name="horario" min="09:00" max="18:00" step="600" required></input>
          <ButtonSecundary />
          
       
        </form>
      </Modal> 
    </>
  )
}


   

export default Button
