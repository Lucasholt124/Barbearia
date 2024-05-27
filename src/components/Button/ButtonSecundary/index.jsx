import { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import './style.css';

const ButtonSecundary = () => {
  const [isFinalized, setIsFinalized] = useState(false);

  const handleFinalize = () => {
    setIsFinalized(true);
  };


  return (
    <div>
      {isFinalized ? (
        <div id='div-finalizado'>
          <p>Seu agendamento foi enviado com sucesso!</p>
          <span id='icon-ok'><FaCheck/></span>
        </div>
      ) : (
        <button id='enviar' onClick={handleFinalize}>Enviar</button>
      )}
    </div>
  );
};
    
export default ButtonSecundary