import { FiInfo } from "react-icons/fi";
import GlassCard from "../ui/GlassCard";

const ExperienceCard = ({ exp, t, onInfoClick, ...props }) => {
  const trKey = `experience.work_history.${exp.translationKey}`;

  return (
    <GlassCard
      {...props} // Pasamos props de animación (layout, etc.)
      image={exp.image}
      imageAlt={t(`${trKey}.title`)}
      className="experience-card-wrapper" // Clase opcional
    >
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
    </GlassCard>
  );
};

export default ExperienceCard;