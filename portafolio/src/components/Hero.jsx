import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "../styles/hero.css";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";

function Hero() {
  const [checked, setChecked] = useState(
    localStorage.getItem("selectedTheme") === "dark" ? true : false
  );
  const { contextTheme, setContextTheme } = useThemeContext();
  const { texts, handleLanguage } = useLanguageContext();

  function handleSwitch(nextChecked) {
    setContextTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setChecked(nextChecked);
  }

  return (
    <section id="home">
      <div className="hero-container">
        <div className="hero-settings">
          <div className="hero-settings-icon--container">
            <p
              className={`hero-settings-icon language ${contextTheme}`}
              onClick={handleLanguage}
              defaultValue={"ES"}
            >
              {"ES"}
            </p>
          </div>
          <div className="hero-settings-icon--container">
            <p
              className={`hero-settings-icon language ${contextTheme}`}
              onClick={handleLanguage}
              defaultValue={"EN"}
            >
              {"EN"}
            </p>
          </div>
          <div className="hero-settings-icon--container">
            <ReactSwitch
              onChange={handleSwitch}
              checked={checked}
              onColor="#eeeeee"
              onHandleColor="#0f3f63"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px  5px rgba(252, 236, 236, 0.6)"
              height={20}
              width={48}
              className="react-switch"
              id="material-switch"
            />
          </div>
        </div>

        <div className="hero-description">
          <div className={`hero-description__presentation ${contextTheme}`}>
            <p>{texts.heroDescription}</p>
          </div>
          <div className="hero-description__name">
            <h1 className={`hero-description__name--name ${contextTheme}`}>
              Mauro Ibarra
            </h1>
            <h2
              className={`hero-description__name--profession ${contextTheme}`}
            >
              Full Stack Developer
            </h2>
          </div>
          <div className={`hero-description__text ${contextTheme}`}>
            <p>{texts.heroText}</p>
          </div>
        </div>

        <div className="hero-buttons">
          <div className={`hero-button hero-button-contact ${contextTheme}`}>
            <p>{texts.heroButtonContactame}</p>
          </div>
          <div className={`hero-button hero-button-resume ${contextTheme}`}>
            <FontAwesomeIcon
              icon={faDownload}
              className={`hero-button-resume--icon ${contextTheme}`}
            />
            <p>{texts.heroButtonCv}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
