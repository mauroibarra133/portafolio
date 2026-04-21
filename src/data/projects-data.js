import ultraseguridadProblemImage from "../assets/ultraseguridad/ultraseguridad-problem.webp";
import ultraseguridadDetailImage from "../assets/ultraseguridad/ultraseguridad-detail.webp";
import ultraseguridadVigiladoresVideo from "../assets/ultraseguridad/features/ultraseguridad-vigiladores.mp4";
import ultraseguridadLicenciasVideo from "../assets/ultraseguridad/features/ultraseguridad-licencias.mp4";
import ultraseguridadCuadranteVideo from "../assets/ultraseguridad/features/ultraseguridad-cuadrante.mp4";
import ultraseguridadAsistenciasVideo from "../assets/ultraseguridad/features/ultraseguridad-asistencia.mp4";
import ultraseguridadIncidentesVideo from "../assets/ultraseguridad/features/ultraseguridad-incidentes.mp4";
import ultraseguridadReportesVideo from "../assets/ultraseguridad/features/ultraseguridad-reportes.mp4";
import ultraseguridadReemplazosVideo from "../assets/ultraseguridad/features/ultraseguridad-reemplazos.mp4";
import alaresProjectImage from "../assets/alares/alares-detail.webp";
import alaresLandingVideo from "../assets/alares/alares-landing.mp4";
import alaresCartaVideo from "../assets/alares/alares-carta.mp4";
import alaresRankingVideo from "../assets/alares/alares-ranking.mp4";
import alaresReservasVideo from "../assets/alares/alares-reservas.mp4";
import alaresAdminVideo from "../assets/alares/alares-admin.mp4";
import alaresLoginVideo from "../assets/alares/alares-login.mp4";

export const projects = [
  {
    slug: "ultraseguridad",
    title: "UltraSeguridad",
    shortDescription: "Sistema de gestion integral para empresas de seguridad privada con control de personal, guardias y clientes.",
    fullDescription: "Plataforma completa para la gestion de empresas de seguridad privada. Permite administrar guardias, clientes, objetivos y turnos de manera eficiente.",
    image: ultraseguridadDetailImage,
    problemSection: {
      title: "Desorganizacion en la gestion de seguridad",
      description: "Las empresas de seguridad privada no tenian control real sobre donde estaban sus guardias, desconocian la cobertura real de objetivos, los turnos se asignaban manualmente con errores frecuentes, y no existia un sistema centralizado para documentacion.",
      images: [
        {
          src: ultraseguridadProblemImage,
          alt: "Problema de gestión de seguridad"
        }
      ]
    },
    features: [
      {
        id: "guardias",
        name: "Gestion de Guardias",
        description: "Administra el personal de seguridad de forma completa. Alta, baja y modificacion de guardias con toda su documentacion y certificaciones.",
        videoUrl: ultraseguridadVigiladoresVideo,
        highlights: [
          "Registro completo de personal",
          "Control de documentacion",
          "Historial de asignaciones"
        ]
      },
      {
        id: "seguimientos",
        name: "Licencias y Sanciones",
        description: "Gestiona las licencias y sanciones de los guardias. Controla fechas de vencimiento y notificaciones automaticas.",
        videoUrl: ultraseguridadLicenciasVideo,
        highlights: [
          "Control de fechas",
          "Registro de licencias",
          "Historial de sanciones"
        ]
      },
      {
        id: "turnos",
        name: "Planificacion de Turnos",
        description: "Sistema de turnos rotativos con calendario visual. Planifica las guardias con anticipacion usando inteligencia artificial para optimizar la asignacion y evitar conflictos de horarios.",
        videoUrl: ultraseguridadCuadranteVideo,
        highlights: [
          "Calendario interactivo",
          "Turnos rotativos automaticos con IA",
          "Control de horas extras",
          "Exportacion de horarios",
          "Notificacion a Guardias"
        ]
      },
      {
        id: "asistencias",
        name: "Control de Asistencias",
        description: "Registra y controla las asistencias de los guardias con marcaciones automáticas. Genera reportes de puntualidad y ausencias.",
        videoUrl: ultraseguridadAsistenciasVideo,
        highlights: [
          "Marcaciones mediante QR",
          "Reportes de asistencia",
          "Control de ausencias"
        ]
      },
      {
        id: "reemplazos",
        name: "Reemplazos Imprevistos",
        description: "Sistema de reemplazos para guardias que no pueden trabajar. Permite buscar guardias disponibles y asignarles el turno correspondiente.",
        videoUrl: ultraseguridadReemplazosVideo,
        highlights: [
          "Busqueda de guardias disponibles",
          "Asignacion automatica de turnos",
          "Notificacion a guardias"
        ]
      },
      {
        id: "incidentes",
        name: "Gestion de Incidentes",
        description: "Registra y controla los incidentes reportados por los guardias. Asigna responsables, seguimiento y resolucion de problemas.",
        videoUrl: ultraseguridadIncidentesVideo,
        highlights: [
          "Registro de incidentes",
          "Seguimiento de resolucion",
          "Asignacion de responsables",
          "Mapa de incidentes"
        ]
      },
      {
        id: "reportes",
        name: "Reportes y Estadisticas",
        description: "Genera reportes detallados de asistencia, horas trabajadas y rendimiento del personal. Analiza tendencias y toma decisiones basadas en datos.",
        videoUrl: ultraseguridadReportesVideo,
        highlights: [
          "Dashboard con metricas clave",
          "Reportes digitalizados (antes en papel)",
          "Informacion consistente y trazable",
          "Analisis de rendimiento en tiempo real",
          "Exportacion de datos en multiples formatos"
        ]
      }
    ]
  },
  {
    slug: "alares",
    title: "Alares Restaurant",
    shortDescription: "Sistema de gestion integral para restaurantes con reservas, pedidos, carta digital y panel administrativo.",
    fullDescription: "Plataforma completa para gestion de restaurantes. Incluye landing page, sistema de reservas, carta digital, gestion de pedidos, panel administrativo, ranking de clientes y atencion al cliente.",
    image: alaresProjectImage,
    problemSection: {
      title: "Desorganizacion en la gestion del restaurante",
      description: "Los restaurantes gestionaban las reservas manualmente con errores, tenian cartas impresas con precios desactualizados, pedidos sin seguimiento en tiempo real, sin sistema de fidelizacion de clientes y atencion al cliente desorganizada.",
      images: []
    },
    features: [
      {
        id: "landing-page",
        name: "Landing Page",
        description: "Pagina de inicio moderna y atractiva para el restaurante. Presenta la identidad del local, menu destacado y llamada a la accion para reservar.",
        videoUrl: alaresLandingVideo,
        highlights: [
          "Diseño responsive",
          "Galeria de platos",
          "Informacion de contacto",
          "Boton de reserva directa"
        ]
      },
      {
        id: "reservas",
        name: "Gestion de Reservas",
        description: "Sistema completo de reserva de mesas. Los clientes pueden seleccionar fecha, hora y cantidad de personas, con confirmacion automatica.",
        videoUrl: alaresReservasVideo,
        highlights: [
          "Calendario interactivo",
          "Seleccion de hora y capacidad",
          "Confirmacion por email",
          "Gestion de disponibilidad"
        ]
      },
      {
        id: "carta",
        name: "Carta Digital",
        description: "Menu digital interactivo con categorias organizadas, imagenes de platos y precios actualizables. Facil navegacion desde cualquier dispositivo.",
        videoUrl: alaresCartaVideo,
        highlights: [
          "Categorias organizadas",
          "Imagenes de platos",
          "Filtrado por tipo",
          "Precios actualizables"
        ]
      },
            {
        id: "administrador",
        name: "Panel Administrativo",
        description: "Dashboard completo para gestionar todos los aspectos del restaurante: reservas, pedidos, clientes y metricas de negocio.",
        videoUrl: alaresAdminVideo,
        highlights: [
          "Metricas en tiempo real",
          "Gestion centralizada",
          "Reportes detallados",
          "Control de usuarios"
        ]
      },
      {
        id: "ranking",
        name: "Ranking de Clientes",
        description: "Sistema de clasificacion de clientes basado en frecuencia de visitas, consumo promedio y valoraciones. Beneficios para clientes VIP.",
        videoUrl: alaresRankingVideo,
        highlights: [
          "Puntos por consumo",
          "Niveles de membresia",
          "Beneficios exclusivos",
          "Historial de visitas"
        ]
      },
      {
        id: "login",
        name: "Login de Usuarios",
        description: "Sistema de autenticacion con roles diferenciados para clientes, personal administrativo y gerentes. Control de accesos y permisos segun el tipo de usuario.",
        videoUrl: alaresLoginVideo,
        highlights: [
          "Login por roles (Cliente, Staff, Admin)",
          "Control de permisos por usuario",
          "Sesiones seguras con JWT",
          "Recuperacion de contraseña",
          "Dashboard segun rol"
        ]
      }
    ]
  },
  {
    slug: "la-estacion",
    title: "La Estacion",
    shortDescription: "Landing page moderna para restaurante con menu digital y sistema de reservas.",
    fullDescription: "Sitio web responsive para restaurante La Estacion. Presenta el menu, permite reservas online y muestra la galeria del local.",
    image: "/laestacion-preview.png",
    features: [
      {
        id: "menu",
        name: "Menu Digital",
        description: "Menu interactivo con categorias, descripciones detalladas y precios actualizados. Facil de navegar en cualquier dispositivo.",
        highlights: [
          "Categorias organizadas",
          "Imagenes de platos",
          "Precios actualizables"
        ]
      },
      {
        id: "reservas",
        name: "Sistema de Reservas",
        description: "Formulario de reservas integrado que permite a los clientes reservar mesa seleccionando fecha, hora y cantidad de personas.",
        highlights: [
          "Seleccion de fecha y hora",
          "Confirmacion por email",
          "Gestion de disponibilidad"
        ]
      }
    ]
  },
  {
    slug: "pomotimer",
    title: "Pomodoro Timer",
    shortDescription: "Aplicacion de productividad basada en la tecnica Pomodoro con temporizador y estadisticas.",
    fullDescription: "Aplicacion web para gestion del tiempo usando la tecnica Pomodoro. Incluye temporizador configurable, descansos y registro de sesiones.",
    image: "/pomotimer-preview.png",
    features: [
      {
        id: "temporizador",
        name: "Temporizador Pomodoro",
        description: "Temporizador personalizable con ciclos de trabajo y descanso. Notificaciones al finalizar cada sesion.",
        highlights: [
          "Ciclos configurables",
          "Notificaciones sonoras",
          "Modo pantalla completa"
        ]
      },
      {
        id: "estadisticas",
        name: "Estadisticas",
        description: "Visualiza tu productividad con graficos de sesiones completadas, tiempo total de trabajo y rachas de dias consecutivos.",
        highlights: [
          "Graficos de progreso",
          "Historial de sesiones",
          "Metas diarias"
        ]
      }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}
