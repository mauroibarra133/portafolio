import { useThemeContext } from "../context/ThemeContext.jsx";
import { useLanguageContext } from "../context/LanguageContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLayerGroup,
  faWrench,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { skillsData } from "../data/skillsData.js";
import "../styles/skills-new.css";

function SkillCategory({ title, icon, skills, delay = 0, contextTheme }) {
  return (
    <div
      className={`skill-category-card ${contextTheme}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Category Header */}
      <div className="skill-category-header">
        <div className={`skill-category-icon ${contextTheme}`}>
          <FontAwesomeIcon icon={icon} className="h-5 w-5" />
        </div>
        <h3 className={`skill-category-title ${contextTheme}`}>{title}</h3>
      </div>

      {/* Skills Grid */}
      <div className="category-skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`skill-item ${contextTheme}`}
            style={{ animationDelay: `${delay + index * 50}ms` }}
          >
            <div className="skill-content">
              {/* Icon */}
              <div className={`skill-icon-container ${contextTheme}`}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <span className={`skill-name ${contextTheme}`}>{skill.name}</span>
            </div>

            {/* Proficiency indicator on hover */}
            <div className={`skill-proficiency-bar ${contextTheme}`}>
              <div
                className={`skill-proficiency-fill ${contextTheme}`}
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();

  const categories = [
    {
      key: "languages",
      title: texts.skillsTitl1,
      icon: faCode,
      skills: skillsData.languages,
    },
    {
      key: "frameworks",
      title: texts.skillsTitl2,
      icon: faLayerGroup,
      skills: skillsData.frameworks,
    },
    {
      key: "tools",
      title: texts.skillsTitl3,
      icon: faWrench,
      skills: skillsData.tools,
    },
  ];

  return (
    <section id="skills" name="#skills" className={`skills-section ${contextTheme}`}>
      <div className="section-container">
        {/* Section Header */}
        <div className="skills-header">
          <h2 className={contextTheme}>{texts.navItemSkills}</h2>
          <p className={contextTheme}>
            {texts.skillsSubtitle || "Tecnologías y herramientas que utilizo para crear soluciones modernas"}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {categories.map((category, index) => (
            <SkillCategory
              key={category.key}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={index * 100}
              contextTheme={contextTheme}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="skills-additional-info">
          <div className={`skills-additional-badge ${contextTheme}`}>
            <span className={`skills-additional-text ${contextTheme}`}>
              {texts.skillsLearning}
            </span>
            <span className="skills-ping">
              <span className="skills-ping-absolute"></span>
              <span className="skills-ping-relative"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
