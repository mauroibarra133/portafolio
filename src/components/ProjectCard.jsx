import { Link } from "react-router-dom";
import { Layers, ArrowRight } from "lucide-react";
import { getProjectBySlug } from "../data/projects-data";
import "../styles/project-card.css";

function ProjectCard({ project, theme }) {
  const fullProject = getProjectBySlug(project.slug);
  const featuresCount = fullProject?.features.length || 0;

  return (
    <div className={`project-card ${theme}`}>
      <div className="project-card-image">
        <img src={project.projectImage} alt={project.projectTitle} />
        <div className="project-card-overlay"></div>
      </div>
      
      <div className="project-card-content">
        <div className="project-card-header">
          <h3 className={`project-card-title ${theme}`}>{project.projectTitle}</h3>
          <span className={`project-card-features-badge ${theme}`}>
            <Layers className="features-icon" size={14} />
            {featuresCount}
          </span>
        </div>
        
        <p className={`project-card-description ${theme}`}>{project.projectDescription}</p>
        
        <Link
          to={`/projects/${project.slug}`}
          className={`project-card-button ${theme}`}
        >
          Ver detalles
          <ArrowRight className="project-card-arrow" size={16} />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
