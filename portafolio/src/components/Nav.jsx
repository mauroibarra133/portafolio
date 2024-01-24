import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/nav.css";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext.jsx";

// eslint-disable-next-line react/prop-types
function Nav({ switchNav, isNavOpen }) {
  const { contextTheme } = useThemeContext();
  return (
    <div className={`nav ${contextTheme}`}>
      <div className={`nav-container ${contextTheme}`}>
        <div className="nav-icon-container">
          <FontAwesomeIcon icon={faBriefcase} className={`nav-icon ${contextTheme}`} />
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
              <NavLink >Home</NavLink>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <NavLink >About Me</NavLink>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <NavLink >Projects</NavLink>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <NavLink >Skills</NavLink>
            </li>
            <li className={`nav-item ${contextTheme}`}>
              <NavLink >Contact Me</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <aside className={`aside ${isNavOpen ? "opened" : ""} ${contextTheme}`}>
        <ul className="aside-list">
          <li className={`aside-item ${contextTheme}`}>
            <NavLink>Home</NavLink>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <NavLink>About Me</NavLink>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <NavLink>Projects</NavLink>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <NavLink>Skills</NavLink>
          </li>
          <li className={`aside-item ${contextTheme}`}>
            <NavLink>Contact Me</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Nav;
