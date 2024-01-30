import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLanguage,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../context/ThemeContext.jsx";
import "../styles/aboutme.css";
import { useState } from "react";
import { useLanguageContext } from "../context/LanguageContext";
import JobTable from "./Table/JobTable.jsx";
import EducationTable from "./Table/EducationTable.jsx";
import LanguageTable from "./Table/LanguageTable.jsx";

function AboutMe() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();
  const [activeTag, setActiveTag] = useState(1);

  //Functions
  function handleTagClick(tagId) {
    if (activeTag === tagId) {
      return;
    }
    setActiveTag(tagId);
  }

  return (
    <section id="aboutme" name="#aboutme">
      <div className="section-container">
        <div className={`about-title section-title ${contextTheme}`}>
          <h2 className={contextTheme}>{texts.navItemAbout}</h2>
        </div>
        <div className="about-nav">
          <div
            className={`about-nav-item ${
              activeTag == 1 ? "active" : ""
            } ${contextTheme}`}
            onClick={() => handleTagClick(1)}
            key={1}
          >
            <FontAwesomeIcon
              icon={faBriefcase}
              className={`nav-icon ${contextTheme}`}
            />
            <p className={`nav-icon-text ${contextTheme}`}>
              {texts.aboutNavItem1}
            </p>
          </div>
          <div
            className={`about-nav-item ${
              activeTag == 2 ? "active" : ""
            } ${contextTheme}`}
            onClick={() => handleTagClick(2)}
            key={2}
          >
            <FontAwesomeIcon
              icon={faUniversity}
              className={`nav-icon ${contextTheme}`}
            />
            <p className={`nav-icon-text ${contextTheme}`}>
              {texts.aboutNavItem2}
            </p>
          </div>
          <div
            className={`about-nav-item ${
              activeTag == 3 ? "active" : ""
            } ${contextTheme}`}
            onClick={() => handleTagClick(3)}
            key={3}
          >
            <FontAwesomeIcon
              icon={faLanguage}
              className={`nav-icon ${contextTheme}`}
            />
            <p className={`nav-icon-text ${contextTheme}`}>
              {texts.aboutNavItem3}
            </p>
          </div>
        </div>
        <div className="about-table">
          {activeTag === 1 && <JobTable />}
          {activeTag === 2 && <EducationTable />}
          {activeTag === 3 && <LanguageTable />}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
