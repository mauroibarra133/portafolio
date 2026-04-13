import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/css-icon.png";
import jsIcon from "../assets/js-icon.png";
import pyIcon from "../assets/python-icon.png";
import phpIcon from "../assets/php.svg";
import reactIcon from "../assets/react-icon.png";
import nodeIcon from "../assets/node-icon.png";
import bsIcon from "../assets/bs-icon.png";
import sassIcon from "../assets/sass-icon.png";
import laravelIcon from "../assets/laravel.svg";
import sqlServerIcon from "../assets/sql-server-icon.png";
import viteIcon from "../assets/vite-icon.png";
import githubIcon from "../assets/github-icon.png";
import figmaIcon from "../assets/figma-icon.png";
import dockerIcon from "../assets/docker.svg";

export const skillsData = {
  languages: [
    { name: "JavaScript", icon: jsIcon, proficiency: 90 },
    { name: "HTML/CSS", icon: htmlIcon, proficiency: 95 },
    { name: "Python", icon: pyIcon, proficiency: 80 },
    { name: "PHP", icon: phpIcon, proficiency: 85 },
  ],
  frameworks: [
    { name: "React", icon: reactIcon, proficiency: 90 },
    { name: "Node.js", icon: nodeIcon, proficiency: 85 },
    { name: "Bootstrap", icon: bsIcon, proficiency: 85 },
    { name: "Sass", icon: sassIcon, proficiency: 80 },
    { name: "Laravel", icon: laravelIcon, proficiency: 80 },
  ],
  tools: [
    { name: "Git", icon: githubIcon, proficiency: 90 },
    { name: "Docker", icon: dockerIcon, proficiency: 75 },
    { name: "Figma", icon: figmaIcon, proficiency: 70 },
    { name: "Vite", icon: viteIcon, proficiency: 85 },
    { name: "SQL Server", icon: sqlServerIcon, proficiency: 80 },
  ],
};
