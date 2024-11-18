import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

const Carrusell = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Usamos useRef para almacenar la referencia del intervalo

  const CarrusellScroll = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
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

  useEffect(() => {
    resetInterval(); // Iniciar el intervalo al cargar el componente

    // Limpiar el intervalo al desmontar
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Solo ejecuta una vez cuando el componente se monte

  const handleButtonClick = (index) => {
    if (currentIndex !== index) {
      setCurrentIndex(index); // Cambiar de proyecto actual
      resetInterval(); // Reiniciar el intervalo solo si es necesario
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexWrap: "nowrap",
      overflow: "hidden",
      position: "relative",
    },
    card: {
      marginTop: "2%",
      height: "100%",
      minWidth: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "1s cubic-bezier(0.39, 0.575, 0.565, 1)",
      transform: `translateX(-${currentIndex * 100}%)`,
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      bottom: "20px", 
      width: "100%",
      zIndex: 10, 
    },
    item: {
      width: "15px",
      height: "15px",
      margin: "0 5px",
      borderRadius: "50%",
      border: "none",
      backgroundColor: "#77c7df",
      cursor: "pointer",
      transition: "all 0.3s ease",
      active: {
        width: "20px",
        height: "20px",
        backgroundColor: "#1b233d",
      },
    },
  };

  return (
    <div>
      <div style={styles.container}>
        {data.map((project, index) => (
          <div style={styles.card} key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className="carrusell-buttons" style={styles.buttons}>
        {data.map((_, index) => (
          <button
            key={index}
            style={{
              ...styles.item, 
              ...(currentIndex === index ? styles.item.active : {}),
            }}
            onClick={() => handleButtonClick(index)}
          ></button>
        ))}
      </div>
      <button
        onClick={() => {
          CarrusellScroll();
          resetInterval();
        }}
      >
        Avanzar
      </button>
    </div>
  );
};

export default Carrusell;
