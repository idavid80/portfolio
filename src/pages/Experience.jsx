import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { experienceData } from "../data/experience";
import Modal from "../components/ui/Modal";
import { FiInfo } from "react-icons/fi";
import "./styles/Experience.css";

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

  // Lógica de filtrado y reverso
  const filteredExperience = experienceData
    .filter((e) => (filter === "All" ? true : e.category === filter))
    .reverse(); // Muestra el más reciente primero

  return (
    <section id={id} className="experience">
      <div className="experience-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="experience-title"
        >
          {t("experience.title")}
        </motion.h2>

        {/* Filtros */}
        <div className="experience-filters">
          {categories.map(({ key, label }) => (
            <motion.button
              key={key}
              onClick={() => setFilter(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`filter-btn ${filter === key ? "active" : ""}`}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Grid de experiencia */}
        <motion.div layout className="experience-grid">
          <AnimatePresence>
            {filteredExperience.map((exp) => {
              // PRE-CALCULAMOS LA RUTA BASE PARA NO REPETIR CÓDIGO
              // Ahora apunta a "experience.work_history.perseo..."
              const trKey = `experience.work_history.${exp.translationKey}`;

              return (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="experience-card"
                >
                  <img
                    src={exp.image}
                    alt={t(`${trKey}.title`)}
                    className="experience-image"
                    loading="lazy"
                  />

                  <div className="experience-content">
                    {/* USAMOS LA RUTA CORREGIDA */}
                    <h3 className="experience-title-card">{t(`${trKey}.title`)}</h3>
                    <p className="experience-company">{t(`${trKey}.company`)}</p>
                    <p className="experience-date">{t(`${trKey}.date`)}</p>

                    <p className="experience-desc">{t(`${trKey}.desc`)}</p>

                    <div className="experience-stack">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="experience-tech">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CORREGIDO: Siempre mostramos el botón si hay translationKey, 
                        o verificamos si existe la traducción de 'more' */}
                    <button
                      onClick={() => setActiveExp(exp)}
                      className="experience-btn info"
                    >
                      <FiInfo className="btn-icon" />
                      {t("experience.more_info")}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal CORREGIDO */}
        <Modal
          isOpen={activeExp !== null}
          onClose={() => setActiveExp(null)}
          // Aquí reconstruimos el título dinámicamente
          title={
            activeExp
              ? t(`experience.work_history.${activeExp.translationKey}.title`)
              : ""
          }
        >
          {activeExp && (
            <div className="modal-experience-wrapper">
              {/* Opcional: Mostrar imagen en el modal también */}
              {/* <img src={activeExp.image} className="modal-hero-image" /> */}
              
              {/* Aquí reconstruimos el texto largo dinámicamente */}
              <p style={{ whiteSpace: "pre-line" }}>
                {t(`experience.work_history.${activeExp.translationKey}.more`)}
              </p>
              
              {/* Enlace al proyecto si existe en data */}
              {activeExp.link && (
                <a 
                  href={activeExp.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-link-btn"
                  style={{ display:'inline-block', marginTop:'1rem', color:'var(--primary-color)'}}
                >
                  Visitar sitio web
                </a>
              )}
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}