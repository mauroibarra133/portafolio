import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-icon-container">
        <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
      </div>
      <div className="nav-menu">
        <FontAwesomeIcon icon={faBars} className="nav-icon"/>
      </div>
    </div>
  );
}

export default Nav;
