import { useThemeContext } from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";
import alaresProjectImage from "../assets/alares-project.png";
import "../styles/projects.css";

function Projects() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();

  const projects = [
    {
      projectTitle: texts.project1Name,
      projectDescription: texts.project1Description,
      projectImage: alaresProjectImage,
    },
    {
        projectTitle: texts.project1Name,
        projectDescription: texts.project1Description,
        projectImage: alaresProjectImage,
      },
      {
        projectTitle: texts.project1Name,
        projectDescription: texts.project1Description,
        projectImage: alaresProjectImage,
      },
      {
        projectTitle: texts.project1Name,
        projectDescription: texts.project1Description,
        projectImage: alaresProjectImage,
      }
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
                  <div className={`button project-button ${contextTheme}`}>
                    <p>{texts.projectButton1}</p>
                  </div>
                  <div className={`button project-button ${contextTheme}`}>
                    <p>{texts.projectButton2}</p>
                  </div>
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
