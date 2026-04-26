import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faMapPin,
  faClock,
  faCheckCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../context/ThemeContext.jsx";
import { useLanguageContext } from "../context/LanguageContext.jsx";
import { calculateDuration, formatPeriod } from "../utils/dateUtils.js";
import { educationData } from "../data/educationData.js";
import CompanyAvatar from "./CompanyAvatar.jsx";
import "../styles/experience-timeline.css";

function EducationTimeline() {
  const { contextTheme } = useThemeContext();
  const { texts, language } = useLanguageContext();

  return (
    <div className="experience-timeline">
      {/* Timeline Line */}
      <div className="experience-timeline-line" />

      {/* Timeline Items */}
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div key={index} className="experience-timeline-item">
            {/* Company Avatar */}
            <CompanyAvatar
              logo={item.logo}
              initials={item.initials}
              isActive={!item.completed}
            />

            {/* Experience Card */}
            <div className={`experience-card ${contextTheme}`}>
              {/* Header */}
              <div className="experience-card-header">
                <div className={`experience-company ${contextTheme}`}>
                  <h3 className={contextTheme}>
                    {language === "es" ? texts.educationInstitution1 : texts.educationInstitution2}
                  </h3>
                  <p className={`experience-role ${contextTheme}`}>
                    {language === "es" ? texts.educationDegree1 : texts.educationDegree2}
                    {item.completed && (
                      <span
                        className={`experience-current-badge ${contextTheme}`}
                      >
                        {language === "es" ? texts.educationGraduated1 : texts.educationGraduated2}
                      </span>
                    )}
                  </p>
                </div>

                <div className="experience-card-header-right">
                  <span className={`experience-duration ${contextTheme}`}>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="experience-duration-icon"
                    />
                    {calculateDuration(item.startDate, item.endDate)}
                  </span>
                  <span className={`experience-period ${contextTheme}`}>
                    {formatPeriod(item.startDate, item.endDate)}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className={`experience-location ${contextTheme}`}>
                <FontAwesomeIcon icon={faMapPin} className="experience-location-icon" />
                {item.ubicacion}
              </div>

              {/* Description */}
              <p className={`experience-description ${contextTheme}`}>
                {language === "es" ? texts.educationDescription1 : texts.educationDescription2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationTimeline;
