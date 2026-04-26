import { useThemeContext } from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import alaresProjectImage from "../assets/alares/alares-preview.webp";
import laEstacionProjectImage from "../assets/laestacion-preview.png";
import pomoTimerProjectImage from "../assets/pomotimer-preview.png";
import ultraseguridadProjectImage from "../assets/ultraseguridad/ultraseguridad-preview.webp";

import "../styles/projects.css";

const PROJECTS_PER_PAGE = 4;

function Projects() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();
  const [currentPage, setCurrentPage] = useState(1);

  const projects = [
    {
      slug: "pomotimer",
      projectTitle: texts.project4Name,
      projectDescription: texts.project4Description,
      projectImage: pomoTimerProjectImage,
      projectLink: "https://mauroibarra133.github.io/Pomodoro-Timer/",
      projectRepository: "https://github.com/mauroibarra133/Pomodoro-Timer",
    },
    {
      slug: "la-estacion",
      projectTitle: texts.project3Name,
      projectDescription: texts.project3Description,
      projectImage: laEstacionProjectImage,
      projectLink: "https://mauroibarra133.github.io/La-Estacion/",
      projectRepository: "https://github.com/mauroibarra133/La-Estacion",
    },
    {
      slug: "alares",
      projectTitle: texts.project1Name,
      projectDescription: texts.project1Description,
      projectImage: alaresProjectImage,
      projectLink: "https://alaresjm.onrender.com",
      projectRepository: "https://github.com/mauroibarra133/alaresjm",
    },
    {
      slug: "ultraseguridad",
      projectTitle: texts.project5Name,
      projectDescription: texts.project5Description,
      projectImage: ultraseguridadProjectImage,
      projectLink: "https://ultraseguridad.vercel.app/login",
      projectRepository: "https://github.com/mauroibarra133/ultraseguridad",
    },
    
  ];

  const reversedProjects = [...projects].reverse();
  const totalPages = Math.ceil(reversedProjects.length / PROJECTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = reversedProjects.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" name="#projects">
      <div className="section-container proyects-container">
        <div className={`projects-header ${contextTheme}`}>
          <h2>{texts.navItemProjects}</h2>
          <p>{texts.projectsHeaderDescription}</p>
        </div>
        <div className="projects">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} theme={contextTheme} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={`pagination ${contextTheme}`}>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`pagination-button ${contextTheme} ${currentPage === 1 ? 'disabled' : ''}`}
              aria-label={texts.paginationPrevious}
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`pagination-button ${contextTheme} ${currentPage === page ? 'active' : ''}`}
                aria-label={`Ir a pagina ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`pagination-button ${contextTheme} ${currentPage === totalPages ? 'disabled' : ''}`}
              aria-label={texts.paginationNext}
            >
              →
            </button>
          </div>
        )}

        {/* Page indicator */}
        {totalPages > 1 && (
          <p className={`pagination-info ${contextTheme}`}>
            {texts.paginationInfo.replace('{start}', startIndex + 1).replace('{end}', Math.min(endIndex, reversedProjects.length)).replace('{total}', reversedProjects.length)}
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
