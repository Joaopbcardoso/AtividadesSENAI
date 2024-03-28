import React from 'react';
import { useNavigate } from 'react-router-dom';
function Sobre() {
  const irPara= useNavigate();
  const handleClick = () => {
    irPara('/');
  };
    return (
    <div>
      <h1>Página Sobre</h1>      
      <button onClick={handleClick}>Ir para Home</button>
    </div>
  );
}
export default Sobre;
