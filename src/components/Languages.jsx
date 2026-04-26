import { useThemeContext } from "../context/ThemeContext.jsx";
import { useLanguageContext } from "../context/LanguageContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { languagesData } from "../data/languagesData.js";
import "../styles/languages.css";

function Languages() {
  const { contextTheme } = useThemeContext();
  const { texts, language } = useLanguageContext();

  return (
    <div className="languages-section">
      {languagesData.map((item, index) => (
        <div
          key={index}
          className={`language-card ${contextTheme}`}
        >
          <div className="language-card-header">
            <div className="language-card-header-left">
              <div className={`language-card-icon ${contextTheme}`}>
                <FontAwesomeIcon icon={faLanguage} className="h-5 w-5" />
              </div>
              <h3 className={`language-card-title ${contextTheme}`}>
                {index === 0 ? (language === "es" ? texts.language1 : texts.language1) : (language === "es" ? texts.language2 : texts.language2)}
              </h3>
            </div>
            <span className={`language-card-badge ${contextTheme}`}>
              {index === 0 ? (language === "es" ? texts.lglLvl1 : texts.lglLvl1) : (language === "es" ? texts.lglLvl2 : texts.lglLvl2)}
            </span>
          </div>

          <div className={`language-progress-bar ${contextTheme}`}>
            <div
              className={`language-progress-fill ${contextTheme}`}
              style={{ width: `${item.porcentaje}%` }}
            />
          </div>

          <div className="language-progress-percentage">
            <span className={contextTheme}>{item.porcentaje}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Languages;
