import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Sobre from '../components/Sobre'
import Galeria from '../components/Galeria'
import Footer from '../components/Footer'

function Home() {
  
    const irPara = useNavigate();
    const handleClick = () => {
        irPara('/sobre');
    };
    
  return (
    <div>
      <Header/> 
      <Banner/>
      <Sobre/>
      <Galeria/>
      <button className='button-sobre' onClick={handleClick}>Sobre</button>
      <Footer/>
    </div>
  )
}

export default Home