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
  const { texts, language } = useLanguageContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const project = getProjectBySlug(slug);

  // Get translated project data for UltraSeguridad and Alares
  const getTranslatedProject = () => {
    if (project.slug === 'ultraseguridad') {
      return {
        ...project,
        title: language === 'es' ? texts.ultraseguridadTitle : texts.ultraseguridadTitle,
        shortDescription: language === 'es' ? texts.ultraseguridadShortDescription : texts.ultraseguridadShortDescription,
        fullDescription: language === 'es' ? texts.ultraseguridadFullDescription : texts.ultraseguridadFullDescription,
        problemSection: {
          title: language === 'es' ? texts.ultraseguridadProblemTitle : texts.ultraseguridadProblemTitle,
          description: language === 'es' ? texts.ultraseguridadProblemDescription : texts.ultraseguridadProblemDescription,
          images: project.problemSection?.images || []
        },
        features: project.features.map((feature, index) => ({
          ...feature,
          name: language === 'es' 
            ? texts[`ultraseguridadFeature${index + 1}Name`]
            : texts[`ultraseguridadFeature${index + 1}Name`],
          description: language === 'es'
            ? texts[`ultraseguridadFeature${index + 1}Description`]
            : texts[`ultraseguridadFeature${index + 1}Description`]
        }))
      };
    }
    
    if (project.slug === 'alares') {
      return {
        ...project,
        title: language === 'es' ? texts.alaresTitle : texts.alaresTitle,
        shortDescription: language === 'es' ? texts.alaresShortDescription : texts.alaresShortDescription,
        fullDescription: language === 'es' ? texts.alaresFullDescription : texts.alaresFullDescription,
        problemSection: {
          title: language === 'es' ? texts.alaresProblemTitle : texts.alaresProblemTitle,
          description: language === 'es' ? texts.alaresProblemDescription : texts.alaresProblemDescription,
          images: project.problemSection?.images || []
        },
        features: project.features.map((feature, index) => ({
          ...feature,
          name: language === 'es' 
            ? texts[`alaresFeature${index + 1}Name`]
            : texts[`alaresFeature${index + 1}Name`],
          description: language === 'es'
            ? texts[`alaresFeature${index + 1}Description`]
            : texts[`alaresFeature${index + 1}Description`]
        }))
      };
    }
    
    return project;
  };

  const translatedProject = getTranslatedProject();

  if (!project) {
    return (
      <div className={`project-detail-not-found ${contextTheme}`}>
        <h1>{language === 'es' ? 'Proyecto no encontrado' : 'Project not found'}</h1>
        <Link to="/#projects">{language === 'es' ? 'Volver a proyectos' : 'Back to projects'}</Link>
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
            {language === 'es' ? 'Volver a proyectos' : 'Back to projects'}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className={`project-detail-hero ${contextTheme}`}>
        <div className="container">
          <div className="hero-content">
            <div className={`hero-text ${contextTheme}`}>
              <h1>{translatedProject.title}</h1>
              <p>{translatedProject.fullDescription}</p>
              <div className="hero-meta">
                <span className={`feature-count ${contextTheme}`}>
                  <Layers size={14} />
                  {translatedProject.features.length} {language === 'es' ? 'funcionalidades' : 'features'}
                </span>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src={translatedProject.image} 
                alt={translatedProject.title}
                className="project-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Only shown if exists */}
      {translatedProject.problemSection && (
        <ProblemSection problem={translatedProject.problemSection} theme={contextTheme} />
      )}

      {/* Features */}
      <section className={`project-detail-features ${contextTheme}`}>
        <div className="container">
          <div className={`features-header ${contextTheme}`}>
            <h2>{language === 'es' ? 'Funcionalidades' : 'Features'}</h2>
            <p>{language === 'es' ? 'Explora cada modulo y descubre que problemas resuelve' : 'Explore each module and discover what problems it solves'}</p>
          </div>
          <FeatureTabs features={translatedProject.features} theme={contextTheme} />
        </div>
      </section>

      {/* CTA */}
      <section className={`project-detail-cta ${contextTheme}`}>
        <div className="container">
          <div className={`cta-content ${contextTheme}`}>
            <h3>{language === 'es' ? 'Necesitas algo similar?' : 'Need something similar?'}</h3>
            <p>{language === 'es' ? 'Contactame para discutir tu proyecto' : 'Contact me to discuss your project'}</p>
            <Link to="/#contact" className={`cta-button ${contextTheme}`}>
              {language === 'es' ? 'Contactar' : 'Contact'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
