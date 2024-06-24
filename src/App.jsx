import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav/Nav'
import Projects from './components/pages/Projects'
import About from './components/pages/aboutMe'
import Footer from '../src/components/footer/Footer'
import SwitchButton from './components/SwitchButton'
import Home from './components/pages/Home'

function App() {

  return (


      // <div className='root'>
      <div className='app'>
            <Nav/>
            <div className='pages'>
            <Home />
            <Projects />
            <About />
            
            </div>
            <Footer />
      </div>

  )
}

export default App
