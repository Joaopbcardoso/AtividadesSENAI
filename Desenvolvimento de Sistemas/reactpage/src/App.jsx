import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Sobre from './components/Sobre'
import Galeria from './components/Galeria'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Banner/>
      <Sobre/>
      <Galeria/>
      <Footer/>
    </div>
  )
}

export default App
  