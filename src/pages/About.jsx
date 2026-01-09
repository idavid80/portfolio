import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./styles/About.css";
import {
  SiReact, SiNodedotjs, SiPython, SiTensorflow, SiDocker,
  SiPostgresql, SiMongodb, SiAmazon, SiKubernetes, SiGit,
  SiPandas, SiScikitlearn,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "AWS", icon: <SiAmazon />, color: "#FF9900" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "Pandas", icon: <SiPandas />, color: "#150458" },
  { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
];
import { 
  containerVariants, 
  itemVariants, 
  titleVariants, 
  viewportConfig 
} from "../utils/motion";

export default function About({ id }) {
  const { t } = useTranslation();

  return (
    <section id={id} className="about">
      {/* Decoración de fondo flotante (Opcional para dar profundidad) */}
      <motion.div 
        className="background-circle circle-1"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="background-circle circle-2"
        animate={{ y: [0, 20, 0], x: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="about-container">
        {/* Título */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="about-title"
        >
          {t("about.title")}
        </motion.h2>

        {/* Bio */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bio-wrapper"
        >
          <p className="bio">{t("about.bio")}</p>
        </motion.div>

        {/* Grid de Tecnologías */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="tech-grid"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }} 
              className="tech-card"
              style={{ borderTop: `4px solid ${tech.color}` }}
            >
              <span className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}