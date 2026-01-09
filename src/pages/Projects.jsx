import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projectsData } from "../data/projects";
import Modal from "../components/ui/Modal";
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

  // 1. PRIMERO: Definimos la lógica de filtrado
  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  // 2. SEGUNDO: Ahora sí podemos hacer debug porque la variable ya existe
  console.log("Filtro actual:", filter);
  console.log("Proyectos filtrados:", filteredProjects);

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
          layout // IMPORTANTE: Para que se reordenen suavemente
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                t={t}
                onInfoClick={setActiveProject}
                animate="visible"
                initial="hidden"
                exit="hidden"
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