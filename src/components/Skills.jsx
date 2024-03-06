import { useThemeContext } from "../context/ThemeContext.jsx";
import "../styles/skills.css";
import { useLanguageContext } from "../context/LanguageContext.jsx";

import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/css-icon.png";
import jsIcon from "../assets/js-icon.png";
import pyIcon from "../assets/python-icon.png";
import reactIcon from "../assets/react-icon.png";
import nodeIcon from "../assets/node-icon.png";
import bsIcon from "../assets/bs-icon.png";
import sassIcon from "../assets/sass-icon.png";
import sqlServerIcon from "../assets/sql-server-icon.png";
import viteIcon from "../assets/vite-icon.png";
import githubIcon from "../assets/github-icon.png";
import figmaIcon from "../assets/figma-icon.png";
import phpIcon from "../assets/php.svg";
import laravelIcon from "../assets/laravel.svg";
import dockerIcon from "../assets/docker.svg";

function Skills() {
  const { contextTheme } = useThemeContext();
  const { texts } = useLanguageContext();
  const tecnologies = [htmlIcon, cssIcon, jsIcon, pyIcon, phpIcon];
  const frameworks = [reactIcon, nodeIcon, bsIcon, sassIcon, laravelIcon];
  const tools = [sqlServerIcon, viteIcon, githubIcon, figmaIcon, dockerIcon];
  const skills = [
    {
      title: texts.skillsTitl1,
      unity: "tecnology",
      array: tecnologies,
    },
    {
      title: texts.skillsTitl2,
      unity: "framework",
      array: frameworks,
    },
    {
      title: texts.skillsTitl3,
      unity: "tool",
      array: tools,
    },
  ];
  return (
    <section id="skills" name="#skills">
      <div className="section-container">
        <div className={`about-title section-title ${contextTheme}`}>
          <h2 className={contextTheme}>{texts.navItemSkills}</h2>
        </div>
        <div className="section-skills-container">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`${skill.title}-container skills-container`}
            >
              <h4
                className={`skill-title ${contextTheme}`}
              >{`${skill.title}`}</h4>
              <div className={`${skill.title} skill-container`}>
                {skill.array.map((tec, index) => (
                  <div key={index} className={`${skill.unity} skill`}>
                    <img src={tec} alt={tec} className="skill-icon" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
