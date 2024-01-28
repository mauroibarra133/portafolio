import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/nav.css";
import { NavLink } from "react-router-dom";
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
              <NavLink to={'#home'}>{texts.navItemHome}</NavLink>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <NavLink>{texts.navItemAbout}</NavLink>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <NavLink>{texts.navItemProjects}</NavLink>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <NavLink>{texts.navItemSkills}</NavLink>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <NavLink>{texts.navItemContact}</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <aside className={`aside ${isNavOpen ? "opened" : ""} ${contextTheme}`}>
        <ul className="aside-list">
          <li className={`aside-item ${contextTheme}`}>
            <NavLink to={'/#home'} spy smooth>{texts.navItemHome}</NavLink>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <NavLink to={'/#home'} spy smooth>{texts.navItemAbout}</NavLink>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <NavLink>{texts.navItemProjects}</NavLink>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <NavLink>{texts.navItemSkills}</NavLink>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <NavLink>{texts.navItemContact}</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Nav;
