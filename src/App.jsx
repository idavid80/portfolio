import './App.css'
import Nav from './pages/components/nav/Nav'
import Projects from './pages/Projects'
import About from './pages/AboutMe'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Curriculum from './pages/Curriculum'

function App() {

  return (

    <div className='app'>
     <Nav/>
      <div className='pages'>
        <Home/>
        <Projects />
        <About />
        <Curriculum/>
        <Footer />
      </div>
    </div>

  )
}

export default App
