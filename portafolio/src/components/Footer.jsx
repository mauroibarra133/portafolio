import { useThemeContext } from "../context/ThemeContext.jsx";
import "../styles/footer.css";
import { useLanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";

import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github2-icon.png";
import igIcon from "../assets/ig-icon.png";
import wspIcon from "../assets/wsp-icon.png";

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
          <Link className="footer-item">
            <img src={linkedinIcon} alt="" className="footer-icon" />
            <p className={`footer-icon-desc ${contextTheme}`}>mauroibarra133</p>
          </Link>
          <Link className="footer-item">
            <img src={githubIcon} alt="" className="footer-icon" />
            <p className={`footer-icon-desc ${contextTheme}`}>mauroibarra133</p>
          </Link>
          <Link className="footer-item">
            <img src={igIcon} alt="" className="footer-icon" />
            <p className={`footer-icon-desc ${contextTheme}`}>mauroibarra133</p>
          </Link>
          <Link className="footer-item">
            <img src={wspIcon} alt="" className="footer-icon" />
            <p className={`footer-icon-desc ${contextTheme}`}>mauroibarra133</p>
          </Link>
        </div>
        <div className={`footer-copyright ${contextTheme}`}>
          <p>Copyright @ 2024 Ibarra. All rights reserved</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
