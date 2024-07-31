import React, { useEffect, useState } from "react";
import CreditCard from "./components/home/CreditCard";
//import FlipCard from '../FlipCard'
import './Home.css'
import idavid80 from '../assets/images/icons/idavid80.svg'
import { theme } from "../theme/theme";

const Home = () => {
  const [visit, setVisit] = useState(0);

  const userViews = () => {
    setVisit(visit + 1);
  };
  const date = new Date();
  const edad = date.getFullYear() - 1980;
  const fecha = date.getFullYear() - 2022;
  const facultad = date.getFullYear() - 2002;

  const text = 'Codificando sueños, creando soluciones.';
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [cursor, setCursor] = useState('|')

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index-1]);
        index++;
      } else {
        clearInterval(intervalId);
        setCursor('')
        setShowCursor(false)
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 100);
    
    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  return (
    <div id="home">
      <div className="home-header"> 
        <img className='logo-idavid' src={idavid80} width={300}/>
        
      </div>
      <div className="section-home"> 
      
        <section className="section-text">

          <h2 style={theme.title}>Bienvenidos a iDavid80 </h2>
          <div className="cita">

          <cite>{displayedText}{showCursor && <span className="cursor">{cursor}</span>}</cite>          
          </div>
          <p>Soy David, un desarrollador de aplicaciones apasionado por convertir ideas en realidades digitales. A mis {edad} años, he decidido redirigir mi carrera hacia lo que realmente me apasiona: el desarrollo de software.

     <p>Con una sólida formación académica, finalicé un grado superior en Desarrollo de Aplicaciones Multiplataforma (DAM) con una destacada media de 9,34. Además, he completado un bootcamp fullstack especializado en tecnologías MERN, complementado con certificaciones de Google, Meta e IBM.</p> 
     </p>
          <p>Aprender es mi mantra. Continuamente amplío mis conocimientos a través de cursos y proyectos, consolidando mi experiencia en el campo. Mi objetivo es seguir creciendo como desarrollador y, en el futuro, culminar mis estudios en Ingeniería Informática.</p>

          <p>Cada línea de código es una nueva oportunidad para aprender y demostrar mi pasión por el desarrollo de software. Mi compromiso es firme: transformar ideas en soluciones tangibles.</p>
        
     
        

          
        </section>
        <CreditCard/>
      </div>  

    </div>
  );
};

export default Home;
