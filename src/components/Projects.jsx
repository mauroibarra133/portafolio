import { useThemeContext } from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import alaresProjectImage from "../assets/alares-project.png";
import colorFlipperProjectImage from "../assets/color-flipper-preview.png";
import laEstacionProjectImage from "../assets/laestacion-preview.png";
import pomoTimerProjectImage from "../assets/pomotimer-preview.png";

import "../styles/projects.css";

function Projects() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();

  const projects = [
    {
      projectTitle: texts.project1Name,
      projectDescription: texts.project1Description,
      projectImage: alaresProjectImage,
      projectLink: "https://alaresjm.onrender.com",
      projectRepository: "https://github.com/mauroibarra133/alaresjm",
    },
    {
      projectTitle: texts.project2Name,
      projectDescription: texts.project2Description,
      projectImage: colorFlipperProjectImage,
      projectLink: "https://mauroibarra133.github.io/ColorFlipper/",
      projectRepository: "https://github.com/mauroibarra133/ColorFlipper",
    },
    {
      projectTitle: texts.project3Name,
      projectDescription: texts.project3Description,
      projectImage: laEstacionProjectImage,
      projectLink: "https://mauroibarra133.github.io/La-Estacion/",
      projectRepository: "https://github.com/mauroibarra133/La-Estacion",
    },
    {
      projectTitle: texts.project4Name,
      projectDescription: texts.project4Description,
      projectImage: pomoTimerProjectImage,
      projectLink: "https://mauroibarra133.github.io/Pomodoro-Timer/",
      projectRepository: "https://github.com/mauroibarra133/Pomodoro-Timer",
    },
  ];

  return (
    <section id="projects" name="#projects">
      <div className="section-container proyects-container">
        <div className={`projects-title section-title ${contextTheme}`}>
          <h2 className={contextTheme}>{texts.navItemProjects}</h2>
        </div>
        <div className="projects">
          {projects.map((project, index) => (
            <div className={`project ${contextTheme}`} key={index}>
              <div className="photo">
                <img src={project.projectImage} alt={project.projectTitle} />
              </div>
              <div className="project-body">
                <h3 className={`project-title ${contextTheme}`}>
                  {project.projectTitle}
                </h3>
                <p className={`project-description ${contextTheme}`}>
                  {project.projectDescription}
                </p>
                <div className="project-buttons">
                  <button className={`button project-button ${contextTheme}`}>
                    <Link to={project.projectRepository} target="_blank">
                      <p>{texts.projectButton1}</p>
                    </Link>
                  </button>
                  <button className={`button project-button ${contextTheme}`}>
                    <Link to={project.projectLink} target="_blank">
                      <p>{texts.projectButton2}</p>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
