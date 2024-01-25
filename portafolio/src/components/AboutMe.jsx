import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase} from "@fortawesome/free-solid-svg-icons";
// import { useLanguageContext } from "../context/LanguageContext.jsx";
import { useThemeContext } from "../context/ThemeContext.jsx";

function AboutMe() {
  const { contextTheme } = useThemeContext();

    return ( 
        <section>
            <div className="about-container">
                <div className="about-title section-title">
                    <h2>{'About Me'}</h2>
                </div>
                <div className="about-nav">
                    <div className="about-nav-item">
                    <FontAwesomeIcon icon={faBriefcase} className={`nav-icon ${contextTheme}`}/>
                        <p>{'Experience'}</p>
                    </div>
                    <div className="about-nav-item">
                    <FontAwesomeIcon icon={faBriefcase} className={`nav-icon ${contextTheme}`}/>
                        <p>{'Education'}</p>
                    </div>
                    <div className="about-nav-item">
                    <FontAwesomeIcon icon={faBriefcase} className={`nav-icon ${contextTheme}`}/>
                        <p>{'Language'}</p>
                    </div>
                </div>
                <div className="about-table">
                    
                </div>
            </div>
        </section>
     );
}

export default AboutMe;
