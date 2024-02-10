import { useThemeContext } from "../context/ThemeContext.jsx";
import { useLanguageContext } from "../context/LanguageContext";
import "../styles/footer.css";
import { Link } from "react-router-dom";

import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github2-icon.png";
import igIcon from "../assets/ig-icon.png";
import wspIcon from "../assets/wsp-icon.png";

import Copyright from "./Copyright.jsx";

function Footer() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();

  return (
    <section id="footer" name="#footer" className={contextTheme}>
      <div className="section-container footer-container">
        <div className={`footer-title section-title ${contextTheme}`}>
          <h2 className={contextTheme}>{texts.footerTitle}</h2>
          <p className={`footer-desc ${contextTheme}`}>
            Call me, write me an e-mail, or connect and chat with me on
            Linkedin.
          </p>
        </div>
        <div className="footer-icons">
          <Link
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
            to={`https://github.com/mauroibarra133/`}
            className="footer-item"
          >
            <img src={githubIcon} alt="github-icon" className="footer-icon" />
            <p className={`footer-icon-desc ${contextTheme}`}>mauroibarra133</p>
          </Link>
          <Link
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
