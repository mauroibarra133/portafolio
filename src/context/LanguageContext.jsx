/* eslint-disable react/prop-types */
import { useState, useContext, createContext, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const translations = {
    es: {
      navItemHome: "Inicio",
      navItemAbout: "Sobre Mi",
      aboutSubtitle: "Conoce más sobre mi trayectoria profesional, educación y habilidades",
      navItemProjects: "Proyectos",
      navItemSkills: "Tecnologias",
      navItemContact: "Contactame",
      heroDescription: "Yo soy",
      heroText: `Soy un desarrollador full-stack flexible centrado en 
      hacer que la tecnología sea fácil de usar. Con un enfoque animado 
      y orientado al equipo, estoy aquí para contribuir positivamente a proyectos y equipos.`,
      heroTitle: "Desarrollo software",
      heroTitle2: "que impulsa tu negocio",
      heroButtonContactame: "Hablemos de tu proyecto",
      heroBadge: "Disponible para nuevos proyectos",
      heroButtonCv: "Descargar CV",
      heroFeaturedViewMore: "Ver más",
      heroStatsYears: "Años",
      heroStatsProjects: "Proyectos",
      heroStatsClients: "Clientes",
      heroSocial: "Conéctate conmigo",
      heroFeatured: "Proyecto Destacado",
      skillsSubtitle: "Tecnologías y herramientas que utilizo para crear soluciones modernas",
      aboutNavItem1: "Experiencia",
      aboutNavItem2: "Educacion",
      aboutNavItem3: "Idiomas",
      jobHead1: "EMPRESA",
      jobHead2: "PUESTO",
      jobName1: "DESARROLLADOR PHP",
      jobName2: "SOPORTE TECNICO",
      jobName3: "DESARROLLADOR DE SOFTWARE",
      educationHead1: "INSTITUCION",
      educationHead2: "TITULO",
      degree1: "INGENIERO EN SISTEMAS",
      languageHead1: "IDIOMA",
      languageHead2: "NIVEL",
      language1: "ESPAÑOL",
      language2: "INGLES",
      lglLvl1: "NATIVO",
      lglLvl2: "AVANZADO",
      educationInstitution1: "UTN - Regional Córdoba",
      educationDegree1: "Ingeniería en Sistemas de Información",
      educationLocation1: "Córdoba, Argentina",
      educationGraduated1: "Graduado",
      educationDescription1: "Ingeniería en Sistemas de Información con énfasis en desarrollo de software, bases de datos y arquitectura de sistemas.",
      educationDescription2: "Information Systems Engineering with focus on software development, databases, and systems architecture.",
      skillsTitl1: "Tecnologias",
      skillsTitl2: "Frameworks",
      skillsTitl3: "Herramientas",
      skillsLearning: "Y siempre aprendiendo nuevas tecnologías...",
      project1Name: "Website de Alares",
      project1Description:
        "Web diseñada para la gestión de un bar de Jesús Maria, donde se pueden realizar reservas, pedidos y administrar la carta de menús.",
      project2Name: "Color Flipper",
      project2Description:
        "Diseñado para generar fondos aleatoriamente en formato hexadecimal o por palabra clave, así como filtrar colores.",
            project4Name: "PomoTimer",
      project4Description:
        "Pomodoro Timer: mejora tu productividad con la técnica Pomodoro, gestionando tareas y generando informes.",
      project5Name: "Ultraseguridad",
      project5Description:
        "Sistema de gestión de turnos para una empresa de Cordoba que se dedica a la seguridad privada",
      ultraseguridadTitle: "UltraSeguridad",
      ultraseguridadShortDescription: "Sistema de gestion integral para empresas de seguridad privada con control de personal, guardias y clientes.",
      ultraseguridadFullDescription: "Plataforma completa para la gestion de empresas de seguridad privada. Permite administrar guardias, clientes, objetivos y turnos de manera eficiente.",
      ultraseguridadProblemTitle: "Desorganizacion en la gestion de seguridad",
      ultraseguridadProblemDescription: "Las empresas de seguridad privada no tenian control real sobre donde estaban sus guardias, desconocian la cobertura real de objetivos, los turnos se asignaban manualmente con errores frecuentes, y no existia un sistema centralizado para documentacion.",
      ultraseguridadFeature1Name: "Gestion de Guardias",
      ultraseguridadFeature1Description: "Administra el personal de seguridad de forma completa. Alta, baja y modificacion de guardias con toda su documentacion y certificaciones.",
      ultraseguridadFeature2Name: "Licencias y Sanciones",
      ultraseguridadFeature2Description: "Gestiona las licencias y sanciones de los guardias. Controla fechas de vencimiento y notificaciones automaticas.",
      ultraseguridadFeature3Name: "Planificacion de Turnos",
      ultraseguridadFeature3Description: "Sistema de turnos rotativos con calendario visual. Planifica las guardias con anticipacion usando inteligencia artificial para optimizar la asignacion y evitar conflictos de horarios.",
      ultraseguridadFeature4Name: "Control de Asistencias",
      ultraseguridadFeature4Description: "Registra y controla las asistencias de los guardias con marcaciones automáticas. Genera reportes de puntualidad y ausencias.",
      ultraseguridadFeature5Name: "Reemplazos Imprevistos",
      ultraseguridadFeature5Description: "Sistema de reemplazos para guardias que no pueden trabajar. Permite buscar guardias disponibles y asignarles el turno correspondiente.",
      ultraseguridadFeature6Name: "Gestion de Incidentes",
      ultraseguridadFeature6Description: "Registra y controla los incidentes reportados por los guardias. Asigna responsables, seguimiento y resolucion de problemas.",
      ultraseguridadFeature7Name: "Reportes y Estadisticas",
      ultraseguridadFeature7Description: "Genera reportes detallados de asistencia, horas trabajadas y rendimiento del personal. Analiza tendencias y toma decisiones basadas en datos.",
      alaresTitle: "Alares Restaurant",
      alaresShortDescription: "Sistema de gestion integral para restaurantes con reservas, pedidos, carta digital y panel administrativo.",
      alaresFullDescription: "Plataforma completa para gestion de restaurantes. Incluye landing page, sistema de reservas, carta digital, gestion de pedidos, panel administrativo, ranking de clientes y atencion al cliente.",
      alaresProblemTitle: "Desorganizacion en la gestion del restaurante",
      alaresProblemDescription: "Los restaurantes gestionaban las reservas manualmente con errores, tenian cartas impresas con precios desactualizados, pedidos sin seguimiento en tiempo real, sin sistema de fidelizacion de clientes y atencion al cliente desorganizada.",
      alaresFeature1Name: "Landing Page",
      alaresFeature1Description: "Pagina de inicio moderna y atractiva para el restaurante. Presenta la identidad del local, menu destacado y llamada a la accion para reservar.",
      alaresFeature2Name: "Gestion de Reservas",
      alaresFeature2Description: "Sistema completo de reserva de mesas. Los clientes pueden seleccionar fecha, hora y cantidad de personas, con confirmacion automatica.",
      alaresFeature3Name: "Carta Digital",
      alaresFeature3Description: "Menu digital interactivo con categorias organizadas, imagenes de platos y precios actualizables. Facil navegacion desde cualquier dispositivo.",
      alaresFeature4Name: "Panel Administrativo",
      alaresFeature4Description: "Dashboard completo para gestionar todos los aspectos del restaurante: reservas, pedidos, clientes y metricas de negocio.",
      alaresFeature5Name: "Ranking de Clientes",
      alaresFeature5Description: "Sistema de clasificacion de clientes basado en frecuencia de visitas, consumo promedio y valoraciones. Beneficios para clientes VIP.",
      alaresFeature6Name: "Login de Usuarios",
      alaresFeature6Description: "Sistema de autenticacion con roles diferenciados para clientes, personal administrativo y gerentes. Control de accesos y permisos segun el tipo de usuario.",
      projectButton1: "Repositorio",
      projectButton2: "Ver Detalles",
      projectsHeaderDescription: "Soluciones que he desarrollado para diferentes necesidades",
      footerTitle: "Contáctame",
      footerDesc:
        "Llámame, escríbeme un mail, o contactame a traves de Linkedin",
      paginationPrevious: "Pagina anterior",
      paginationNext: "Pagina siguiente",
      paginationInfo: "Mostrando {start}-{end} de {total} proyectos",
    },
    en: {
      navItemHome: "Home",
      navItemAbout: "About Me",
      aboutSubtitle: "Learn more about my professional background, education, and skills",
      navItemProjects: "Projects",
      navItemSkills: "Skills",
      navItemContact: "Contact Me",
      heroDescription: "Hi, I'm",
      heroText: `I'm a flexible full-stack developer with a focus on making technology
       user-friendly.Bringing a lively and team-oriented approach,
        I'm here to contribute positively to projects and teams.`,
      heroTitle: "Software Development",
      heroTitle2: "that drives your business",
      heroButtonContactame: "Let's talk about your project",
      heroButtonCv: "Download CV",
      heroFeaturedViewMore: "View More",
      heroStatsYears: "Years",
      heroStatsProjects: "Projects",
      heroStatsClients: "Clients",
      heroSocial: "Connect with me",
      heroFeatured: "Featured Project",
      skillsSubtitle: "Technologies and tools I use to create modern solutions",
      aboutNavItem1: "Experience",
      aboutNavItem2: "Education",
      aboutNavItem3: "Languages",
      jobHead1: "COMPANY",
      jobHead2: "JOB",
      jobName1: "PHP DEVELOPER",
      jobName2: "TECHNICAL SUPPORT",
      jobName3: "SOFTWARE DEVELOPER",
      educationHead1: "SCHOOL",
      educationHead2: "DEGREE",
      degree1: "INFORMATION SYSTEMS ENGINEER",
      degree2: "ECONOMY AND MANAGMENT",
      languageHead1: "LANGUAGE",
      languageHead2: "LEVEL",
      language1: "SPANISH",
      language2: "ENGLISH",
      lglLvl1: "NATIVE",
      lglLvl2: "ADVANCED",
      educationInstitution1: "UTN - Regional Córdoba",
      educationInstitution2: "University",
      educationDegree1: "Information Systems Engineer",
      educationDegree2: "Economy and Management",
      educationLocation1: "Córdoba, Argentina",
      educationLocation2: "Córdoba, Argentina",
      educationGraduated1: "Graduado",
      educationGraduated2: "Graduated",
      educationDescription1: "Ingeniería en Sistemas de Información con énfasis en desarrollo de software, bases de datos y arquitectura de sistemas.",
      educationDescription2: "Information Systems Engineering with focus on software development, databases, and systems architecture.",
      skillsTitl1: "Tecnologies",
      skillsTitl2: "Frameworks",
      skillsTitl3: "Tools",
      skillsLearning: "And always learning new technologies...",
      project1Name: "Alares Restaurant Website",
      project1Description:
        "A web made to a local restaurant thar enables to make online orders and administrate your local.",
      project2Name: "Color Flipper",
      project2Description:
        "Designed to generate random backgrounds in hexadecimal or keyword format, as well as filter colors.",
            project4Name: "PomoTimer",
      project4Description:
        "Pomodoro Timer: boost your productivity with the Pomodoro technique, managing tasks, and generating reports.",
      project5Name: "Ultraseguridad",
      project5Description:
        "Web for a security company from Cordoba that manages security guards",
      ultraseguridadTitle: "UltraSecurity",
      ultraseguridadShortDescription: "Comprehensive management system for private security companies with personnel, guards and clients control.",
      ultraseguridadFullDescription: "Complete platform for managing private security companies. Allows administration of guards, clients, objectives and shifts efficiently.",
      ultraseguridadProblemTitle: "Disorganization in security management",
      ultraseguridadProblemDescription: "Private security companies had no real control over where their guards were, didn't know actual objective coverage, shifts were assigned manually with frequent errors, and there was no centralized system for documentation.",
      ultraseguridadFeature1Name: "Guard Management",
      ultraseguridadFeature1Description: "Complete security personnel management. Add, remove and modify guards with all their documentation and certifications.",
      ultraseguridadFeature2Name: "Licenses and Sanctions",
      ultraseguridadFeature2Description: "Manage guard licenses and sanctions. Control expiration dates and automatic notifications.",
      ultraseguridadFeature3Name: "Shift Planning",
      ultraseguridadFeature3Description: "Rotating shift system with visual calendar. Plan guards in advance using artificial intelligence to optimize assignment and avoid schedule conflicts.",
      ultraseguridadFeature4Name: "Attendance Control",
      ultraseguridadFeature4Description: "Record and control guard attendance with automatic check-ins. Generate punctuality and absence reports.",
      ultraseguridadFeature5Name: "Unexpected Replacements",
      ultraseguridadFeature5Description: "Replacement system for guards who cannot work. Find available guards and assign them the corresponding shift.",
      ultraseguridadFeature6Name: "Incident Management",
      ultraseguridadFeature6Description: "Record and control incidents reported by guards. Assign responsibilities, follow-up and problem resolution.",
      ultraseguridadFeature7Name: "Reports and Statistics",
      ultraseguridadFeature7Description: "Generate detailed reports of attendance, hours worked and personnel performance. Analyze trends and make data-driven decisions.",
      alaresTitle: "Alares Restaurant",
      alaresShortDescription: "Comprehensive management system for restaurants with reservations, orders, digital menu and administrative panel.",
      alaresFullDescription: "Complete platform for restaurant management. Includes landing page, reservation system, digital menu, order management, administrative panel, customer ranking and customer service.",
      alaresProblemTitle: "Disorganization in restaurant management",
      alaresProblemDescription: "Restaurants managed reservations manually with errors, had printed menus with outdated prices, orders without real-time tracking, no customer loyalty system and disorganized customer service.",
      alaresFeature1Name: "Landing Page",
      alaresFeature1Description: "Modern and attractive homepage for the restaurant. Presents the venue's identity, featured menu and call to action to reserve.",
      alaresFeature2Name: "Reservation Management",
      alaresFeature2Description: "Complete table reservation system. Customers can select date, time and number of people, with automatic confirmation.",
      alaresFeature3Name: "Digital Menu",
      alaresFeature3Description: "Interactive digital menu with organized categories, dish images and updatable prices. Easy navigation from any device.",
      alaresFeature4Name: "Administrative Panel",
      alaresFeature4Description: "Complete dashboard to manage all aspects of the restaurant: reservations, orders, customers and business metrics.",
      alaresFeature5Name: "Customer Ranking",
      alaresFeature5Description: "Customer classification system based on visit frequency, average consumption and ratings. Benefits for VIP customers.",
      alaresFeature6Name: "User Login",
      alaresFeature6Description: "Authentication system with differentiated roles for customers, administrative staff and managers. Access control and permissions according to user type.",
      projectButton1: "Repository",
      projectButton2: "View Details",
      projectsHeaderDescription: "Solutions I've developed for different needs",
      footerTitle: "Contact me",
      footerDesc:
        "Call me, write me an e-mail, or connect and chat with me on Linkedin",
      paginationPrevious: "Previous page",
      paginationNext: "Next page",
      paginationInfo: "Showing {start}-{end} of {total} projects",
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

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
    setTexts(translations[newLanguage]);
  };

  const values = { texts, handleLanguage, language, toggleLanguage };

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
