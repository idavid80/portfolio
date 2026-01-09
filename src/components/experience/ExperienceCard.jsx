import React from "react";
import { motion } from "framer-motion";
import { FiInfo } from "react-icons/fi";
// Importamos la variante de animación del hijo
import { itemVariants } from "../../utils/motion";

const ExperienceCard = ({ exp, t, onInfoClick }) => {
  // Construimos la clave de traducción aquí para limpiar el JSX
  const trKey = `experience.work_history.${exp.translationKey}`;

  return (
    <motion.div
      layout
      variants={itemVariants} // Animación de subida elástica
      className="experience-card"
    >
      {/* Contenedor para el efecto ZOOM */}
      <div className="experience-image-container">
        <img
          src={exp.image}
          alt={t(`${trKey}.title`)}
          className="experience-image"
          loading="lazy"
        />
      </div>

      <div className="experience-content">
        <h3 className="experience-title-card">{t(`${trKey}.title`)}</h3>
        
        <div className="experience-meta">
          <span className="experience-company">{t(`${trKey}.company`)}</span>
          <span className="experience-date">{t(`${trKey}.date`)}</span>
        </div>

        <p className="experience-desc">{t(`${trKey}.desc`)}</p>

        <div className="experience-stack">
          {exp.stack.map((tech) => (
            <span key={tech} className="experience-tech">
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => onInfoClick(exp)}
          className="experience-btn info"
        >
          <FiInfo className="btn-icon" />
          <span>{t("experience.more_info")}</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;