/* eslint-disable react/prop-types */
import { useState, useContext, createContext, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const translations = {
    es: {
      navItem1: "Inicio",
      navItem2: "Sobre Mi",
      navItem3: "Proyectos",
      navItem4: "Tecnologias",
      navItem5: "Contactame",
      heroDescription: "Yo soy",
      heroText: `Soy un desarrollador full-stack flexible centrado en 
      hacer que la tecnología sea fácil de usar. Con un enfoque animado 
      y orientado al equipo, estoy aquí para contribuir positivamente a proyectos y equipos.`,
      heroButtonContactame: "Contáctame",
      heroButtonCv: "Ver CV",
      aboutNavItem1: "Experiencia",
      aboutNavItem2: "Educacion",
      aboutNavItem3: "Idiomas",
      jobName1: "DESARROLLADOR PHP",
      jobName2: "SOPORTE TECNICO",
    },
    en: {
      navItem1: "Home",
      navItem2: "About Me",
      navItem3: "Projects",
      navItem4: "Skills",
      navItem5: "Contact Me",
      heroDescription: "Hi, I'm",
      heroText: `I'm a flexible full-stack developer with a focus on making technology
       user-friendly.Bringing a lively and team-oriented approach,
        I'm here to contribute positively to projects and teams.`,
      heroButtonContactame: "Contact Me",
      heroButtonCv: "Resume",
      aboutNavItem1: "Experience",
      aboutNavItem2: "Education",
      aboutNavItem3: "Languages",
      jobName1: "PHP DEVELOPER",
      jobName2: "TECHNICAL SUPPORT",
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
