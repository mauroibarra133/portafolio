import { useParams, Link, useNavigate } from "react-router-dom";
import { Layers } from "lucide-react";
import { useThemeContext } from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";
import { getProjectBySlug } from "../data/projects-data";
import FeatureTabs from "./FeatureTabs";
import ProblemSection from "./ProblemSection";
import { useEffect } from "react";
import "../styles/project-detail.css";

function ProjectDetail() {
  const { slug } = useParams();
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className={`project-detail-not-found ${contextTheme}`}>
        <h1>Proyecto no encontrado</h1>
        <Link to="/#projects">Volver a proyectos</Link>
      </div>
    );
  }

  const handleGoBack = () => {
    navigate("/#projects");
  };

  return (
    <div className={`project-detail ${contextTheme}`}>
      {/* Header */}
      <header className={`project-detail-header ${contextTheme}`}>
        <div className="container">
          <button 
            onClick={handleGoBack}
            className={`back-button ${contextTheme}`}
          >
            <span className="back-arrow">←</span>
            Volver a proyectos
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className={`project-detail-hero ${contextTheme}`}>
        <div className="container">
          <div className="hero-content">
            <div className={`hero-text ${contextTheme}`}>
              <h1>{project.title}</h1>
              <p>{project.fullDescription}</p>
              <div className="hero-meta">
                <span className={`feature-count ${contextTheme}`}>
                  <Layers size={14} />
                  {project.features.length} funcionalidades
                </span>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Only shown if exists */}
      {project.problemSection && (
        <ProblemSection problem={project.problemSection} theme={contextTheme} />
      )}

      {/* Features */}
      <section className={`project-detail-features ${contextTheme}`}>
        <div className="container">
          <div className={`features-header ${contextTheme}`}>
            <h2>Funcionalidades</h2>
            <p>Explora cada modulo y descubre que problemas resuelve</p>
          </div>
          <FeatureTabs features={project.features} theme={contextTheme} />
        </div>
      </section>

      {/* CTA */}
      <section className={`project-detail-cta ${contextTheme}`}>
        <div className="container">
          <div className={`cta-content ${contextTheme}`}>
            <h3>Necesitas algo similar?</h3>
            <p>Contactame para discutir tu proyecto</p>
            <Link to="/#contact" className={`cta-button ${contextTheme}`}>
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
