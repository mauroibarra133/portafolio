/* eslint-disable react/prop-types */
import { useState, useContext, createContext, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const translations = {
    es: {
      navItemHome: "Inicio",
      navItemAbout: "Sobre Mi",
      navItemProjects: "Proyectos",
      navItemSkills: "Tecnologias",
      navItemContact: "Contactame",
      heroDescription: "Yo soy",
      heroText: `Soy un desarrollador full-stack flexible centrado en 
      hacer que la tecnología sea fácil de usar. Con un enfoque animado 
      y orientado al equipo, estoy aquí para contribuir positivamente a proyectos y equipos.`,
      heroButtonContactame: "Contáctame",
      heroButtonCv: "Ver CV",
      aboutNavItem1: "Experiencia",
      aboutNavItem2: "Educacion",
      aboutNavItem3: "Idiomas",
      jobHead1: "EMPRESA",
      jobHead2: "PUESTO",
      jobName1: "DESARROLLADOR PHP",
      jobName2: "SOPORTE TECNICO",
      educationHead1: "INSTITUCION",
      educationHead2: "TITULO",
      degree1: "INGENIERIA EN SISTEMAS",
      degree2: "ECONOMIA Y GESTION",
      languageHead1: "IDIOMA",
      languageHead2: "NIVEL",
      language1: "ESPAÑOL",
      language2: "INGLES",
      lglLvl1: "NATIVO",
      lglLvl2: "AVANZADO",
      skillsTitl1: "Tecnologias",
      skillsTitl2: "Frameworks",
      skillsTitl3: "Herramientas",
      project1Name: "Website de Alares",
      project1Description:
        "Una web adaptada a un restaurante local que permite realizar pedidos online y administrar tu local.",
      project2Name: "Color Flipper",
      project2Description:
        "Diseñado para generar fondos aleatoriamente en formato hexadecimal o por palabra clave, así como filtrar colores.",
      project3Name: "Website de La Estacion",
      project3Description:
        "Página web profesional desarrollada para mostrar la variedad de platos de La Estación, mejorar la visibilidad del establecimiento y permitir reservas de mesas.",
      project4Name: "PomoTimer",
      project4Description:
        "Pomodoro Timer: mejora tu productividad con la técnica Pomodoro, gestionando tareas y generando informes.",
      projectButton1: "Repositorio",
      projectButton2: "Visitar",
      footerTitle: "Contáctame",
      footerDesc:
        "Llámame, escríbeme un mail o contactame a traves de Linkedin",
    },
    en: {
      navItemHome: "Home",
      navItemAbout: "About Me",
      navItemProjects: "Projects",
      navItemSkills: "Skills",
      navItemContact: "Contact Me",
      heroDescription: "Hi, I'm",
      heroText: `I'm a flexible full-stack developer with a focus on making technology
       user-friendly.Bringing a lively and team-oriented approach,
        I'm here to contribute positively to projects and teams.`,
      heroButtonContactame: "Contact Me",
      heroButtonCv: "Resume",
      aboutNavItem1: "Experience",
      aboutNavItem2: "Education",
      aboutNavItem3: "Languages",
      jobHead1: "COMPANY",
      jobHead2: "JOB",
      jobName1: "PHP DEVELOPER",
      jobName2: "TECHNICAL SUPPORT",
      educationHead1: "SCHOOL",
      educationHead2: "DEGREE",
      degree1: "INFORMATION SYSTEMS ENGINEERING",
      degree2: "ECONOMY AND MANAGMENT",
      languageHead1: "LANGUAGE",
      languageHead2: "LEVEL",
      language1: "SPANISH",
      language2: "ENGLISH",
      lglLvl1: "NATIVE",
      lglLvl2: "ADVANCED",
      skillsTitl1: "Tecnologies",
      skillsTitl2: "Frameworks",
      skillsTitl3: "Tools",
      project1Name: "Alares Restaurant Website",
      project1Description:
        "A web made to a local restaurant thar enables to make online orders and administrate your local.",
      project2Name: "Color Flipper",
      project2Description:
        "Designed to generate random backgrounds in hexadecimal or keyword format, as well as filter colors.",
      project3Name: "La Estacion Website",
      project3Description:
        "Professional website developed to showcase the variety of dishes at La Estacion, enhance the establishment's visibility, and allow table reservations.",
      project4Name: "PomoTimer",
      project4Description:
        "Pomodoro Timer: boost your productivity with the Pomodoro technique, managing tasks, and generating reports.",
      projectButton1: "Repository",
      projectButton2: "Visit",
      footerTitle: "Contact me",
      footerDesc:
        "Call me, write me an e-mail, or connect and chat with me on Linkedin",
    },
  };
  const initialLanguage = "en";
  const [language, setLanguage] = useState(
    localStorage.getItem("selectedLanguage") || initialLanguage
  );
  const [texts, setTexts] = useState(translations[language]);

  useEffect(() => {
    // Guardar la elección del idioma en el localStorage
    localStorage.setItem("selectedLanguage", language);
  }, [language]);

  const handleLanguage = (e) => {
    if (e.target.innerHTML === "ES") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const values = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  return context;
};
