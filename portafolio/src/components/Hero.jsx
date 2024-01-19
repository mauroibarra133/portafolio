import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faLanguage,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/hero.css";

function Hero() {
  return (
    <section>
      <div className="hero-container">
        <div className="hero-settings">
          <div className="hero-settings-icon--container">
            <FontAwesomeIcon icon={faLanguage} className="hero-settings-icon language" />
          </div>
          <div className="hero-settings-icon--container">
          <FontAwesomeIcon
            icon={faCircleHalfStroke}
            className="hero-settings-icon color"
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
