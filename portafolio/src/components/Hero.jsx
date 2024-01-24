import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLanguage } from "@fortawesome/free-solid-svg-icons";
import "../styles/hero.css";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";

function Hero() {
  const [checked, setChecked] = useState(false);
  const { setContextTheme } = useThemeContext();

  function handleSwitch(nextChecked) {
    setContextTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setChecked(nextChecked);
  }
  

  return (
    <section>
      <div className="hero-container">
        <div className="hero-settings">
          <div className="hero-settings-icon--container">
            <FontAwesomeIcon
              icon={faLanguage}
              className="hero-settings-icon language"
            />
          </div>
          <div className="hero-settings-icon--container">
            <ReactSwitch
              onChange={handleSwitch}
              checked={checked}
              onColor="#142986"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
              id="material-switch"
            />
          </div>
        </div>

        <div className="hero-description">
          <div className="hero-description__presentation">
            <p>{"Hi I'm"}</p>
          </div>
          <div className="hero-description__name">
            <h1 className="hero-description__name--name">Mauro Ibarra</h1>
            <h2 className="hero-description__name--profession">
              Full Stack Developer
            </h2>
          </div>
          <div className="hero-description__text">
            <p>
              {
                "I'm a flexible full-stack developer with a focus on making technology user-friendly.Bringing a lively and team-oriented approach, I'm here to contribute positively to projects and teams."
              }
            </p>
          </div>
        </div>

        <div className="hero-buttons">
          <div className="hero-button hero-button-contact">
            <p>{"Contact Me"}</p>
          </div>
          <div className="hero-button hero-button-resume">
            <FontAwesomeIcon
              icon={faDownload}
              className="hero-button-resume--icon"
            />
            <p>{"Resume"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
