import React, { useEffect, useState } from "react";
import CreditCard from "./components/home/CreditCard";
import "./Home.css";
import CustomSVG from "../assets/images/icons/CustomSVG";

const Home = ({ theme }) => {
  const [visit, setVisit] = useState(0);

  const userViews = () => {
    setVisit(visit + 1);
  };
  const date = new Date();
  const edad = date.getFullYear() - 1980;
  const fecha = date.getFullYear() - 2022;
  const facultad = date.getFullYear() - 2002;

  const text = "Codificando sueños, creando soluciones.";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [cursor, setCursor] = useState("|");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index - 1]);
        index++;
      } else {
        clearInterval(intervalId);
        setCursor("");
        setShowCursor(false);
      }
    }, 250);

    return () => clearInterval(intervalId);
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 200);

    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  return (
    <section id="home">
      <div className="home-header">
        <CustomSVG isDarkMode={theme} />
      </div>
      <div className="home-presentation">
        <div className="section-text">
          <h2 style={theme.title}>Bienvenidos a iDavid80 </h2>
          <div className="cita">
            <cite>
              {displayedText}
              {showCursor && <span>{cursor}</span>}
            </cite>
          </div>

          <p>
            Soy David, un desarrollador de aplicaciones apasionado por convertir
            ideas en realidades digitales. A mis {edad} años, he decidido
            redirigir mi carrera hacia lo que realmente me apasiona: el
            desarrollo de software.
          </p>
          <p>
            Con una sólida formación académica, finalicé un grado superior en
            Desarrollo de Aplicaciones Multiplataforma (DAM) con una destacada
            media de 9,34. Además, he completado un bootcamp fullstack
            especializado en tecnologías MERN, complementado con certificaciones
            de Google, Meta e IBM.
          </p>

          <p>
            Aprender es mi mantra. Continuamente amplío mis conocimientos a
            través de cursos y proyectos, consolidando mi experiencia en el
            campo. Mi objetivo es seguir creciendo como desarrollador y, en el
            futuro, culminar mis estudios en Ingeniería Informática.
          </p>

          <p>
            Cada línea de código es una nueva oportunidad para aprender y
            demostrar mi pasión por el desarrollo de software. Mi compromiso es
            firme: transformar ideas en soluciones tangibles.
          </p>
        </div>
        <CreditCard />
      </div>
    </section>
  );
};

export default Home;
