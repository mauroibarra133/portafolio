import { ArrowRight, Download, Mail, ExternalLink } from "lucide-react";
import githubIcon from "../assets/skills/github-icon.webp";
import linkedinIcon from "../assets/socialmedia/linkedin-icon.webp";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../context/LanguageContext";
import { useThemeContext } from "../context/ThemeContext";
import "../styles/hero-section.css";

export function HeroSection() {
  const { texts } = useLanguageContext();
  const { contextTheme } = useThemeContext();

  const stats = [
    { value: "3+", label: texts.heroStatsYears || "Years" },
    { value: "10+", label: texts.heroStatsProjects || "Projects" },
    { value: "5+", label: texts.heroStatsClients || "Clients" },
  ];

  return (
    <section id="inicio" className={`hero-section ${contextTheme}`}>
      {/* Subtle background pattern */}
      <div className="hero-section-background">
        <div className="hero-section-bg-gradient-1" />
        <div className="hero-section-bg-gradient-2" />
      </div>

      <div className="hero-section-container">
        <div className="hero-section-grid">
          {/* Left content */}
          <div className="hero-section-content">
            {/* Badge */}
            <div className="hero-section-badge">
              <span className="hero-section-badge-dot">
                <span className="hero-section-badge-dot-ping"></span>
                <span className="hero-section-badge-dot-static"></span>
              </span>
              <span className="hero-section-badge-text">
                {texts.heroBadge || "Available for work"}
              </span>
            </div>

            {/* Heading */}
            <div className="hero-section-heading">
              <h1 className="hero-section-title">
                {texts.heroTitle || "Hi, I'm"}{" "}
                <span className="hero-section-title-highlight">{texts.heroTitle2}</span>
              </h1>
              <p className="hero-section-description">
                {texts.heroText || "I'm a flexible full-stack developer with a focus on making technology user-friendly."}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-section-buttons">
              <Button size="lg" className="hero-section-button-primary" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  {texts.heroButtonContactame || "Contact Me"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="hero-section-button-secondary" asChild>
                <a href="/MAUROIBARRA-CV-2024-UfLukOWx.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  {texts.heroButtonCv || "Resume"}
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="hero-section-social">
              <span className="hero-section-social-label">{texts.heroSocial || "Connect with me"}</span>
              <div className="hero-section-social-links">
                <Button variant="ghost" size="icon" className="hero-section-social-button" asChild>
                  <a href="https://github.com/mauroibarra133" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hero-section-social-button" asChild>
                  <a href="https://linkedin.com/in/mauro-ibarra-8b3a2a2b9" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right content - Stats & Visual */}
          <div className="hero-section-visual">
            {/* Stats cards */}
            <div className="hero-section-stats">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="hero-section-stat-card"
                >
                  <div className="hero-section-stat-value">
                    {stat.value}
                  </div>
                  <div className="hero-section-stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured project preview */}
            <div className="hero-section-featured">
              <div className="hero-section-featured-header">
                <span className="hero-section-featured-label">{texts.heroFeatured || "Featured Project"}</span>
                <div className="hero-section-featured-button" asChild>
                  <Link to="/projects/ultraseguridad">
                    {texts.heroFeaturedViewMore || "View More"} <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
              <div className="hero-section-featured-content">
                <h3 className="hero-section-featured-title">UltraSeguridad</h3>
                <p className="hero-section-featured-description">
                  {texts.project5Description || "Web for a security company from Cordoba that manages security guards"}
                </p>
                <div className="hero-section-featured-tech">
                  {[
                    { name: "React", className: "react" },
                    { name: "TypeScript", className: "typescript" },
                    { name: "PostgreSQL", className: "postgresql" },
                    { name: "OpenAI", className: "openai" },
                    { name: "WhatsApp API", className: "whatsapp" },
                    { name: "PWA", className: "pwa" },
                  ].map((tech) => (
                    <span
                      key={tech.name}
                      className={`hero-section-featured-tech-badge ${tech.className}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
