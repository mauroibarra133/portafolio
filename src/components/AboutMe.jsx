import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLanguage,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../context/ThemeContext.jsx";
import "../styles/aboutme.css";
import { useState } from "react";
import { useLanguageContext } from "../context/LanguageContext.jsx";
import JobTable from "./Table/JobTable.jsx";
import EducationTable from "./Table/EducationTable.jsx";
import LanguageTable from "./Table/LanguageTable.jsx";
import ExperienceTimeline from "./ExperienceTimeline.jsx";
import EducationTimeline from "./EducationTimeline.jsx";
import Languages from "./Languages.jsx";

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
        {/* Section header */}
        <div className="about-header">
          <h2 className={`about-title-text ${contextTheme}`}>
            {texts.navItemAbout}
          </h2>
          <p className={`about-subtitle ${contextTheme}`}>
            {texts.aboutSubtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="about-tabs-container">
          <div className={`about-tabs ${contextTheme}`}>
            <div
              className={`about-tab-item ${
                activeTag == 1 ? "active" : ""
              } ${contextTheme}`}
              onClick={() => handleTagClick(1)}
              key={1}
            >
              <FontAwesomeIcon
                icon={faBriefcase}
                className={`about-tab-icon ${contextTheme}`}
              />
              <span className={`about-tab-text ${contextTheme}`}>
                {texts.aboutNavItem1}
              </span>
            </div>
            <div
              className={`about-tab-item ${
                activeTag == 2 ? "active" : ""
              } ${contextTheme}`}
              onClick={() => handleTagClick(2)}
              key={2}
            >
              <FontAwesomeIcon
                icon={faUniversity}
                className={`about-tab-icon ${contextTheme}`}
              />
              <span className={`about-tab-text ${contextTheme}`}>
                {texts.aboutNavItem2}
              </span>
            </div>
            <div
              className={`about-tab-item ${
                activeTag == 3 ? "active" : ""
              } ${contextTheme}`}
              onClick={() => handleTagClick(3)}
              key={3}
            >
              <FontAwesomeIcon
                icon={faLanguage}
                className={`about-tab-icon ${contextTheme}`}
              />
              <span className={`about-tab-text ${contextTheme}`}>
                {texts.aboutNavItem3}
              </span>
            </div>
          </div>
        </div>
        <div className="about-table">
          {activeTag === 1 && <ExperienceTimeline />}
          {activeTag === 2 && <EducationTimeline />}
          {activeTag === 3 && <Languages />}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
