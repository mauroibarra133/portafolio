import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/nav.css";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Nav({ switchNav, isNavOpen }) {
  return (
    <div className={`nav`}>
      <div className="nav-container">
        <div className="nav-icon-container">
          <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
        </div>
        <div className="nav-menu">
          <FontAwesomeIcon
            icon={faBars}
            className={`nav-icon`}
            onClick={switchNav}
          />
        </div>
        <aside className={`aside ${isNavOpen ? "opened" : ""}`}>
        <ul className="aside-list">
          <li className="aside-item">
            <NavLink>Home</NavLink>
          </li>
          <li className="aside-item">
            <NavLink>About Me</NavLink>
          </li>
          <li className="aside-item">
            <NavLink>Projects</NavLink>
          </li>
          <li className="aside-item">
            <NavLink>Skills</NavLink>
          </li>
          <li className="aside-item">
            <NavLink>Contact Me</NavLink>
          </li>
        </ul>
      </aside>
      </div>
    </div>
  );
}

export default Nav;
