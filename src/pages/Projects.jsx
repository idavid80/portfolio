import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projectsData } from "../data/projects";
import Modal from "../components/ui/Modal";
// IMPORTAMOS EL COMPONENTE NUEVO
import ProjectCard from "../components/projects/ProjectCard"; 
import "./styles/Projects.css";
import { 
  containerVariants, 
  titleVariants, 
  viewportConfig 
} from "../utils/motion";

export default function Projects({ id }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    { key: "All", label: t("projects.filter_all") },
    { key: "Web", label: t("projects.filter_web") },
    { key: "App", label: t("projects.filter_app") },
    { key: "AI", label: t("projects.filter_ai") },
    { key: "Big Data", label: t("projects.filter_bigdata") },
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id={id} className="projects">
      <div className="projects-container">
        
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="projects-title"
        >
          {t("projects.title")}
        </motion.h2>

        {/* Filtros */}
        <div className="projects-filters">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`filter-btn ${filter === key ? "active" : ""}`}
            >
              {filter === key && (
                <motion.span
                  layoutId="activeFilter"
                  className="filter-bg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="filter-text">{label}</span>
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <motion.div
          className="projects-grid"
          variants={containerVariants} // El grid orquesta
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                t={t }
                onInfoClick={setActiveProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <Modal
          isOpen={activeProject !== null}
          onClose={() => setActiveProject(null)}
          title={activeProject?.titleKey ? t(activeProject.titleKey) : ""}
        >
          {activeProject && (
             <iframe 
                src={activeProject.iframe} 
                title={activeProject.titleKey}
                style={{ width: "100%", height: "400px", border: "none" }}
             />
          )}
        </Modal>
      </div>
    </section>
  );
}