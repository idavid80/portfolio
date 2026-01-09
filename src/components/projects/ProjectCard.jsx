import { FaGithub } from "react-icons/fa";
import { FiEye, FiInfo } from "react-icons/fi";
import GlassCard from "../ui/GlassCard";

const ProjectCard = ({ project, t, onInfoClick, ...props}) => {
  return (
    <GlassCard
      {...props}
      image={project.image}
      imageAlt={t(project.titleKey)}>
      <h3 className="project-title">{t(project.titleKey)}</h3>
      <p className="project-desc">{t(project.descriptionKey)}</p>

      <div className="project-stack">
        {project.stack.map((tech) => (
          <span key={tech} className="project-tech">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn demo"
          >
            <FiEye className="btn-icon" />
            {t("projects.view_demo")}
          </a>
        )}
        {project.codeLink && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn code"
          >
            <FaGithub className="btn-icon" />
            {t("projects.view_code")}
          </a>
        )}
        {project.iframe && (
          <button
            onClick={() => onInfoClick(project)}
            className="project-btn info"
          >
            <FiInfo className="btn-icon" />
            <span>{t("projects.more_info")}</span>
          </button>
        )}
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
