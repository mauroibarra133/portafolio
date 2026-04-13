import { useThemeContext } from "../context/ThemeContext.jsx";
import { useLanguageContext } from "../context/LanguageContext.jsx";
import "../styles/footer.css";
import { Link } from "react-router-dom";

import linkedinIcon from "../assets/socialmedia/linkedin-icon.webp";
import githubIcon from "../assets/socialmedia/github2-icon.webp";
import igIcon from "../assets/socialmedia/ig-icon.webp";
import wspIcon from "../assets/socialmedia/wsp-icon.webp";

import Copyright from "./Copyright.jsx";

function Footer() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();

  return (
    <section id="footer" name="#footer" className={contextTheme}>
      <div className="section-container footer-container">
        <div className={`footer-title section-title ${contextTheme}`}>
          <h2 className={contextTheme}>{texts.footerTitle}</h2>
          <p className={`footer-desc ${contextTheme}`}>{texts.footerDesc}</p>
        </div>
        <div className="footer-icons">
          <Link
            target="_blank"
            to={`https://www.linkedin.com/in/mauroibarra133/`}
            className="footer-item"
          >
            <img
              src={linkedinIcon}
              alt="linkedin-icon"
              className="footer-icon"
            />
            <p className={`footer-icon-desc ${contextTheme}`}>mauroibarra133</p>
          </Link>
          <Link
            target="_blank"
            to={`https://github.com/mauroibarra133/`}
            className="footer-item"
          >
            <img src={githubIcon} alt="github-icon" className="footer-icon" />
            <p className={`footer-icon-desc ${contextTheme}`}>mauroibarra133</p>
          </Link>
          <Link
            target="_blank"
            to={`https://www.instagram.com/mauritoibarra/`}
            className="footer-item"
          >
            <img src={igIcon} alt="footer-icon" className="footer-icon" />
            <p className={`footer-icon-desc ${contextTheme}`}>mauroibarra133</p>
          </Link>
          <Link to={`https://w.app/mauroibarra`} className="footer-item">
            <img src={wspIcon} alt="whatsapp-icon" className="footer-icon" />
            <p className={`footer-icon-desc ${contextTheme}`}>mauroibarra133</p>
          </Link>
        </div>
      </div>
      <Copyright />
    </section>
  );
}

export default Footer;
