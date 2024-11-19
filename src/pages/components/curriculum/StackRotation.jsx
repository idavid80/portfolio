import React, { useState } from "react";
import BackOrFrontToggle from "./BackOrFrontToggle";
import CardExperience from "./CardExperience";
import { experience } from "../../../repo/experience";

const StackRotation = ({ theme }) => {
  const [isChecked, setIsChecked] = useState(false);

  const styles = {
    container: {
      perspective: "1000px", // da un efecto 3D más realista
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",

      flexDirection: "column",
    },
    header: {
      marginTop: "5%",
      display: "flex",
      width: "100%",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      transformStyle: "preserve-3d",
      transition: "transform 1s ease",
      transform: isChecked ? "rotateY(180deg)" : "rotateY(0deg)",
    },
    title: {
      marginBottom: "5%",
      textShadow: isChecked ? "0 0 2px purple" : "0 0 2px #ccc",
      color: isChecked ? "#720455" : "#76ABAE",
    },
    titleStyle: {
      textShadow: isChecked ? "0 0 2px #720455" : "0 0 2px #76ABAE",
      textAlign: "center",
      color: isChecked ? "#f599" : "#005550",
      marginBottom: "15px", 
      fontSize: "2em", 
      lineHeight: "1.2em",
      fontWeight: "bold",
      transform: isChecked ? "rotateY(180deg)" : "rotateY(0deg)",
      transition: "transform 0.2s ease",
    },
    card: {
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      transition: "transform 1s ease",
      transform: isChecked ? "rotateY(180deg)" : "rotateY(0deg)",
      margin: "2%",
    },
    paragraph: {
      transition: "transform 1s ease",
    },
  };

  const faceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    color: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const frontStyle = {
    ...faceStyle,
    backgroundImage: "linear-gradient(to right, #005550, #76ABAE)",
    color: "#76ABAE",
  };

  const backStyle = {
    ...faceStyle,
    transform: "rotateY(180deg)",
    backgroundImage: "linear-gradient(to right, #910A67, #720455)",
    color: "rgba(255, 85, 153, 0.6)",
  };

  const toggleStyle = {
    position: 'fixed',
    top: '1%',
    left: '-5%',
    zIndex: 1000,
  };

  let titulo = isChecked ? "Backend" : "Frontend";

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.titleStyle}>
          <h2 className="card-title" style={styles.title}>
            {titulo}
          </h2>
          <p className="card-paragraph" style={styles.paragraph}>
            Habilidades en Desarrollo {titulo}
          </p>
        </div>
        <div style={toggleStyle}>
          <BackOrFrontToggle
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        </div>
      </div>
      <div style={styles.card}>
        <div style={frontStyle}>
          <CardExperience theme={theme} experience={experience.frontend} />
        </div>
        <div style={backStyle}>
          <CardExperience theme={theme} experience={experience.backend} />
        </div>
      </div>
    </div>
  );
};

export default StackRotation;
