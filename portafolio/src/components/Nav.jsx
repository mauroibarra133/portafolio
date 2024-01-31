import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/nav.css";
import { Link } from "react-scroll";
import { useThemeContext } from "../context/ThemeContext.jsx";
import { useLanguageContext } from "../context/LanguageContext.jsx";

// eslint-disable-next-line react/prop-types
function Nav({ switchNav, isNavOpen }) {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();

  return (
    <div className={`nav ${contextTheme}`}>
      <div className={`nav-container ${contextTheme}`}>
        <div className="nav-icon-container">
          <FontAwesomeIcon
            icon={faBriefcase}
            className={`nav-icon ${contextTheme}`}
          />
        </div>
        <div className="nav-menu">
          <FontAwesomeIcon
            icon={faBars}
            className={`nav-icon ${contextTheme}`}
            onClick={switchNav}
          />
        </div>
        <div className={`nav-list-container`}>
          <ul className="nav-list">
            <li className={`nav-item ${contextTheme}`}>
              <Link to="#home" spy smooth duration={500}>
                {texts.navItemHome}
              </Link>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <Link to="#aboutme" spy smooth duration={500}>
                {texts.navItemAbout}
              </Link>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <Link to="#projects" spy smooth duration={500}>
                {texts.navItemProjects}
              </Link>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <Link to="#skills">{texts.navItemSkills}</Link>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <Link>{texts.navItemContact}</Link>
            </li>
          </ul>
        </div>
      </div>
      <aside className={`aside ${isNavOpen ? "opened" : ""} ${contextTheme}`}>
        <ul className="aside-list">
          <li className={`aside-item ${contextTheme}`}>
            <Link
              to="#home"
              spy
              smooth
              duration={500}
              offset={-20}
              onClick={switchNav}
            >
              {texts.navItemHome}
            </Link>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <Link to="#aboutme" spy smooth duration={500} onClick={switchNav}>
              {texts.navItemAbout}
            </Link>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <Link to="#projects" spy smooth duration={500}>
              {texts.navItemProjects}
            </Link>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <Link to="#skills">{texts.navItemSkills}</Link>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <Link>{texts.navItemContact}</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Nav;
