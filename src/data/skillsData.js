import htmlIcon from "../assets/skills/html-icon.webp";
import cssIcon from "../assets/skills/css-icon.webp";
import jsIcon from "../assets/skills/js-icon.webp";
import pyIcon from "../assets/skills/python-icon.webp";
import phpIcon from "../assets/skills/php.svg";
import reactIcon from "../assets/skills/react-icon.webp";
import nodeIcon from "../assets/skills/node-icon.webp";
import bsIcon from "../assets/skills/bs-icon.webp";
import sassIcon from "../assets/skills/sass-icon.webp";
import laravelIcon from "../assets/skills/laravel.svg";
import sqlServerIcon from "../assets/skills/sql-server-icon.webp";
import viteIcon from "../assets/skills/vite-icon.webp";
import githubIcon from "../assets/skills/github-icon.webp";
import figmaIcon from "../assets/skills/figma-icon.webp";
import dockerIcon from "../assets/skills/docker.svg";

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
