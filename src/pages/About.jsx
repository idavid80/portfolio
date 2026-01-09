import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./styles/About.css";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiKubernetes,
  SiGit,
  SiPandas,
  SiScikitlearn,
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

export default function About({ id }) {
  const { t } = useTranslation();

  return (
    <section id={id} className="about">
      <div className="about-container">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="about-title"
        >
          {t("about.title")}
        </motion.h2>

        {/* Biografía */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bio"
        >
          {t("about.bio")}
        </motion.p>

        {/* Skills */}
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="skills-title"
        >
          {t("about.skills_title")}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="tech-grid"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              className="tech-card"
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
