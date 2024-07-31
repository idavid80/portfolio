import React, { useEffect, useState } from "react";
import './Carrusell.css';
import ProjectCard from './ProjectCard'; // Asegúrate de que la ruta es correcta

const Carrusell = ({data}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const CarrusellScroll = () => {
        setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            CarrusellScroll();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
            <button onClick={CarrusellScroll}>{currentIndex}</button>
        </div>
    );
};

export default Carrusell;


/*
import React, { useEffect, useState } from "react";
import './Carrusell.css';

const Carrusell = ({Card}) => {
    const data = ["1", "2", "3"];
    const [currentIndex, setCurrentIndex] = useState(0);

    const CarrusellScroll = () => {
        setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            CarrusellScroll();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="carrusell-container">

                {data.map((item, index) => (
                    <h1 
                        className="carrusell-item"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        key={index}
                    >
                        {item}
                    </h1>
                ))}
            </div>
            <button onClick={CarrusellScroll}>{currentIndex}</button>
        </div>
    );
};

export default Carrusell;
*/
