import React, { useEffect, useState, useRef } from "react";
import './Carrusell.css';
import ProjectCard from './ProjectCard'; 

const Carrusell = ({data}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null); // Usamos useRef para almacenar la referencia del intervalo

    const CarrusellScroll = () => {
        setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const resetInterval = () => {
        // Limpiar el intervalo anterior
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        // Reiniciar el intervalo
        intervalRef.current = setInterval(() => {
            CarrusellScroll();
        }, 3000);
    };

    // Reiniciar el intervalo cada vez que se monte el componente
    useEffect(() => {
        resetInterval(); // Iniciar el intervalo al cargar el componente
        return () => clearInterval(intervalRef.current); // Limpiar el intervalo al desmontar
    }, []);

    const handleButtonClick = (index) => {
        setCurrentIndex(index); // Cambiar de proyecto actual
        resetInterval(); // Reiniciar el intervalo
    };

    return (
        <div className="carrusell">
            <div className="carrusell-container">
                {data.map((project, index) => (
                    <div
                        className="carrusell-item"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        key={index}
                    >
                        <ProjectCard project={project} /> 
                    </div>
                ))}
            </div>
            <div className="buttons-container">
                {data.map((_, index) => (
                    <button
                        key={index}
                        className={`nav-button ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleButtonClick(index)}
                    ></button>
                ))}
            </div>
            <button onClick={() => { CarrusellScroll(); resetInterval(); }}>Avanzar</button>
        </div>
    );
};

export default Carrusell;
