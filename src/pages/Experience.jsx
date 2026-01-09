import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { experienceData } from "../data/experience";
import Modal from "../components/ui/Modal";
// Importamos el nuevo componente
import ExperienceCard from "../components/experience/ExperienceCard";
import "./styles/Experience.css";
// Importamos la configuración de animación compartida
import { 
  containerVariants, 
  titleVariants, 
  viewportConfig 
} from "../utils/motion";

export default function Experience({ id }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");
  const [activeExp, setActiveExp] = useState(null);

  const categories = [
    { key: "All", label: t("experience.filter_all") },
    { key: "Research", label: t("experience.filter_research") },
    { key: "Development", label: t("experience.filter_dev") },
    { key: "Cloud", label: t("experience.filter_cloud") },
  ];

  const filteredExperience = experienceData
    .filter((e) => (filter === "All" ? true : e.category === filter))
    .reverse();

  return (
    <section id={id} className="experience">
      <div className="experience-container">
        
        {/* Título con animación scroll */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="experience-title"
        >
          {t("experience.title")}
        </motion.h2>

        {/* Filtros con efecto "Pastilla" */}
        <div className="experience-filters">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`filter-btn ${filter === key ? "active" : ""}`}
            >
              {filter === key && (
                <motion.span
                  layoutId="activeFilterExp" // ID único para diferenciar de Projects
                  className="filter-bg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="filter-text">{label}</span>
            </button>
          ))}
        </div>

        {/* Grid de experiencia orquestado */}
        <motion.div 
          className="experience-grid"
          variants={containerVariants} // Staggering effect
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <AnimatePresence mode="popLayout">
            {filteredExperience.map((exp) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                t={t}
                onInfoClick={setActiveExp}
                animate="visible"
                initial="hidden"
                exit="hidden"
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <Modal
          isOpen={activeExp !== null}
          onClose={() => setActiveExp(null)}
          title={
            activeExp
              ? t(`experience.work_history.${activeExp.translationKey}.title`)
              : ""
          }
        >
          {activeExp && (
            <div className="modal-experience-wrapper">
              <p style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>
                {t(`experience.work_history.${activeExp.translationKey}.more`)}
              </p>
              
              {activeExp.link && (
                <a 
                  href={activeExp.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-link-btn"
                  // Estilo inline básico, idealmente mover a CSS
                  style={{ 
                    display:'inline-block', 
                    marginTop:'1.5rem', 
                    fontWeight: '600',
                    color: 'var(--primary, #3b82f6)' 
                  }}
                >
                  Visitar sitio web &rarr;
                </a>
              )}
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}