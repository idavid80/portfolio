import React, { useState } from "react";
import { useIsMobile } from "../../../hooks/useIsMobile";

const CardExperience = ({ experience, theme }) => {
  const [isMobile] = useIsMobile();
  const [showDetails, setShowDetails] = useState(null); // Controla si el texto está visible

  const toggleDetails = (index) => {
    // Alterna la visibilidad de los detalles según el índice
    setShowDetails((prevIndex) => (prevIndex === index ? null : index));
  };

  const styles = {
    card: {
      width: "100%",
      height: "90%",
      backgroundColor: theme ? "#31363F" : "#F5E8C7",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      margin: "4%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    textContainer: {
      paddingRight: "5%",
      paddingLeft: "5%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    paragraph: {
      color: theme ? "#EEEEEE" : "#222831",
      lineHeight: "1.6",
      marginTop: "0px",
      fontSize: "1rem",
    },
    subtitle: {
      marginBottom: "10px",
      fontSize: "1.5rem",
      cursor: isMobile ? "pointer" : "default", // Solo clickable en móvil
      display: "flex", 
      justifyContent: "center",
    },
    separator: {
      border: "none",
      height: "1px",
      backgroundColor: "#ccc",
      margin: "15px 0",
    },
  };

  return (
    <div style={styles.card}>
      {experience.stack.map((data, index) => (
        <div
          style={styles.container}
          key={index}
          onClick={() => isMobile && toggleDetails(index)}
        >
          <div style={styles.textContainer}>
            <h3 style={styles.subtitle}>{data.nombre}</h3>
            {!isMobile || showDetails === index ? (
              <p
                style={styles.paragraph}
                dangerouslySetInnerHTML={{ __html: data.descripcion }}
              ></p>
            ) : null}
          </div>
          {index < experience.stack.length - 1 && (
            <hr style={styles.separator} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardExperience;
