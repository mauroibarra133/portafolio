import mlIcon from "../assets/about/ml-icon.webp";
import hiIcon from "../assets/about/hi-icon.webp";

export const experienceData = [
  {
    empresa: "Mercado Libre",
    puesto: "Desarrollador de Software",
    startDate: "2025-01-20",
    endDate: null,
    descripcion: "Desarrollo de software full-stack enfocado en mejorar la experiencia de usuario y optimizar procesos internos.",
    ubicacion: "Córdoba, Argentina",
    tareas: [
      "Desarrollo de nuevas funcionalidades para la plataforma de e-commerce",
      "Optimización de rendimiento y mejoras en la experiencia de usuario",
      "Colaboración con equipos multidisciplinarios en proyectos ágiles",
    ],
    actual: true,
    initials: "ML",
    logo: mlIcon,
  },
  {
    empresa: "Hospital Italiano",
    puesto: "Desarrollador PHP",
    startDate: "2023-08-20",
    endDate: "2025-01-10",
    descripcion: "Desarrollo de aplicaciones web utilizando PHP y frameworks modernos para soluciones empresariales.",
    ubicacion: "Córdoba, Argentina",
    tareas: [
      "Desarrollo y mantenimiento de aplicaciones web con PHP",
      "Integración de APIs y servicios de terceros",
      "Optimización de bases de datos y consultas SQL",
    ],
    actual: false,
    initials: "HI",
    logo: hiIcon,
  },
];
