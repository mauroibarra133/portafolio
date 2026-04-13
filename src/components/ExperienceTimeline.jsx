import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMapPin,
  faClock,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../context/ThemeContext.jsx";
import { useLanguageContext } from "../context/LanguageContext.jsx";
import { calculateDuration, formatPeriod } from "../utils/dateUtils.js";
import { experienceData } from "../data/experienceData.js";
import "../styles/experience-timeline.css";

function ExperienceTimeline() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();

  return (
    <div className="experience-timeline">
      {/* Timeline Line */}
      <div className="experience-timeline-line" />

      {/* Timeline Items */}
      <div className="space-y-8">
        {experienceData.map((item, index) => (
          <div key={index} className="experience-timeline-item">
            {/* Timeline Dot */}
            <div
              className={`experience-timeline-dot ${
                item.actual ? "current" : ""
              }`}
            >
              {item.actual && <div className="experience-timeline-dot-ping" />}
            </div>

            {/* Experience Card */}
            <div className={`experience-card ${contextTheme}`}>
              {/* Header */}
              <div className="experience-card-header">
                <div className="experience-card-header-left">
                  <div className="experience-company">
                    <h3 className={contextTheme}>{item.empresa}</h3>
                    {item.actual && (
                      <span
                        className={`experience-current-badge ${contextTheme}`}
                      >
                        Actual
                      </span>
                    )}
                  </div>
                  <p className={`experience-role ${contextTheme}`}>
                    {item.puesto}
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
                {item.descripcion}
              </p>

              {/* Tasks */}
              <div className="experience-tasks">
                {item.tareas.map((tarea, i) => (
                  <div key={i} className={`experience-task ${contextTheme}`}>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="experience-task-icon"
                    />
                    <span>{tarea}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
