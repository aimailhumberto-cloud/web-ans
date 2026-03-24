// ============================================================
// ANS Surf - Pacific Flow Design System
// Data layer: All products, images, and content
// ============================================================

// CDN Image URLs (real photos of Playa Caracol, Chame, ANS)
export const IMAGES = {
  heroAerial: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/J9FoqOSnOtO3_84e8407f.jpg",
  beachAerial: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/Fs7qdxKz7O14_a98135d7.jpg",
  radissonAerial: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/4IAovm5v8O1R_444c9bae.jpg",
  radissonLounge: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/LVjxhgXaqCTH_2bc19fdc.jpg",
  radissonPool: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/wZ9xs69supgN_8cbad322.jpg",
  surfAction: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/OytTdKi6ixtl_8bfa659a.jpg",
  chameWaves: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/94wwXkgQm3iF_8c140b8b.jpg",
  ventoClub: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/XFFzvafDfFwf_ebbbf4b0.jpg",
  ventoDaypass: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/XORRYNWTaA8X_4a19be4c.jpg",
  surfGroup: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/Ev9KPt5dmJyf_1737f960.jpg",
  surfKids: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/OMYeSkwxI3Xz_0810b503.png",
  surfSchool: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/6lfrpaab3Hfy_f7d8e1df.jpg",
  surfLesson: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/7IBlo09p3o6C_d0f85d99.jpeg",
  surfSunset: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/4LBP4vaI1mqV_b43fcdf4.webp",
  caracolAerial2: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/spCWVVyierL9_57c9b7ca.jpg",
  surfGirls: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/UvIKHqvnGZWx_fbf07693.webp",
  caracolBeach: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/tcGMa9DcPSqB_4b9c3b2a.jpg",
  radissonFront: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/WucPF3BBWfhK_6d0e84eb.jpg",
  radissonAerial2: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032346231/UGpVxqvFa4a6FTLL6XQrah/cek06t56cyza_ccbefa67.jpg",
};

// ============================================================
// CLASES BÁSICAS (3)
// ============================================================
export interface ClassProduct {
  id: string;
  name: string;
  price: number;
  duration: string;
  includes: string[];
  level: string;
  description: string;
  minAge?: number;
  image: string;
}

export const CLASES_BASICAS: ClassProduct[] = [
  {
    id: "clase-basica",
    name: "Clase de Surf Básica",
    price: 55,
    duration: "1 hora",
    includes: ["Instructor certificado", "Tabla de surf", "Rashguard", "Seguro"],
    level: "Principiante",
    description: "Tu primera experiencia sobre las olas. Aprende los fundamentos del surf con instructores certificados en las aguas cálidas de Playa Caracol.",
    minAge: 5,
    image: IMAGES.surfKids,
  },
  {
    id: "clase-intermedia",
    name: "Clase Intermedia",
    price: 65,
    duration: "1 hora",
    includes: ["Instructor senior", "Tabla de surf", "Rashguard", "Seguro"],
    level: "Intermedio",
    description: "Perfecciona tu técnica. Aprende a girar, leer olas y posicionarte correctamente para tomar las mejores olas.",
    image: IMAGES.surfAction,
  },
  {
    id: "clase-avanzada",
    name: "Clase Avanzada + Video Analysis",
    price: 100,
    duration: "1.5 horas",
    includes: ["Instructor senior", "Tabla de surf", "Rashguard", "Seguro", "Video análisis personalizado"],
    level: "Avanzado",
    description: "Lleva tu surf al siguiente nivel. Maniobras, timing y análisis de video para corregir tu técnica en detalle.",
    image: IMAGES.chameWaves,
  },
];

// ============================================================
// PAQUETES DE CLASES (3)
// ============================================================
export interface PackageProduct {
  id: string;
  name: string;
  price: number;
  classes: number;
  pricePerClass: number;
  savings: string;
  validity: string;
  levels: string;
  transferable: boolean;
  description: string;
}

export const PAQUETES: PackageProduct[] = [
  {
    id: "paquete-starter",
    name: "Starter Pack",
    price: 240,
    classes: 5,
    pricePerClass: 48,
    savings: "13%",
    validity: "3 meses",
    levels: "L1, L2, L3",
    transferable: true,
    description: "Ideal para comenzar tu viaje en el surf. 5 clases a tu ritmo con la flexibilidad de elegir tu nivel.",
  },
  {
    id: "paquete-foundation",
    name: "Foundation Pack",
    price: 450,
    classes: 10,
    pricePerClass: 45,
    savings: "18%",
    validity: "3 meses",
    levels: "L1, L2, L3",
    transferable: true,
    description: "El paquete más popular. 10 clases para construir una base sólida y progresar con consistencia.",
  },
  {
    id: "paquete-accelerator",
    name: "Accelerator Pack",
    price: 800,
    classes: 20,
    pricePerClass: 40,
    savings: "27%",
    validity: "3 meses",
    levels: "L1, L2, L3",
    transferable: true,
    description: "Para los comprometidos. 20 clases con el mejor ahorro para acelerar tu progreso al máximo.",
  },
];

// ============================================================
// MASTERCLASSES (15)
// ============================================================
export interface MasterclassProduct {
  id: string;
  number: number;
  name: string;
  date: string;
  topic: string;
  level: string;
  price: number;
  capacity: number;
  schedule: string;
  instructor: string;
  includes: string[];
  description: string;
  daySchedule: { time: string; activity: string }[];
  image: string;
  slug: string;
}

export const MASTERCLASSES: MasterclassProduct[] = [
  {
    id: "mc-1",
    number: 1,
    name: "Duck Dive + Paddling",
    date: "10 de Mayo, 2026",
    topic: "Técnicas de inmersión y remada eficiente",
    level: "Todos los niveles",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "Domina las dos habilidades más fundamentales del surf: el duck dive para pasar las olas y la técnica de remada eficiente para llegar al lineup con energía. Esta masterclass te dará las bases para surfear con confianza.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: biomecánica del duck dive y paddling" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: "/mc-1-duck-dive.jpg",
    slug: "duck-dive-paddling",
  },
  {
    id: "mc-2",
    number: 2,
    name: "Leer Olas",
    date: "24 de Mayo, 2026",
    topic: "Lectura del océano y selección de olas",
    level: "Principiantes",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "Aprende a leer el océano como un surfista experimentado. Entenderás cómo se forman las olas, dónde rompen y cómo elegir la ola perfecta para tu nivel. Una habilidad que transformará tu surf.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: formación de olas y patrones oceánicos" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: "/mc-2-leer-olas.jpg",
    slug: "leer-olas",
  },
  {
    id: "mc-3",
    number: 3,
    name: "Bottom Turn",
    date: "7 de Junio, 2026",
    topic: "La maniobra fundamental del surf",
    level: "Intermedios",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "El bottom turn es la base de todas las maniobras. Aprende la técnica correcta para generar velocidad y dirección desde la base de la ola. Sin un buen bottom turn, no hay buen surf.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: mecánica del bottom turn" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: "/mc-3-bottom-turn.jpg",
    slug: "bottom-turn",
  },
  {
    id: "mc-4",
    number: 4,
    name: "Speed Generation",
    date: "21 de Junio, 2026",
    topic: "Generar velocidad en la ola",
    level: "Intermedios",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "La velocidad es la clave para ejecutar maniobras. Aprende a bombear correctamente, usar el rail y aprovechar la energía de la ola para mantener y generar velocidad.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: física de la velocidad en el surf" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: IMAGES.surfGroup,
    slug: "speed-generation",
  },
  {
    id: "mc-5",
    number: 5,
    name: "Cut Back",
    date: "5 de Julio, 2026",
    topic: "Domina el cutback",
    level: "Intermedios",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "El cutback te permite volver a la zona de poder de la ola. Aprende la técnica completa: desde la aproximación hasta el roundhouse cutback para mantener tu flow en la ola.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: tipos de cutback y cuándo usarlos" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: IMAGES.chameWaves,
    slug: "cut-back",
  },
  {
    id: "mc-6",
    number: 6,
    name: "Flow & Style",
    date: "19 de Julio, 2026",
    topic: "Desarrolla tu estilo personal",
    level: "Todos los niveles",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "El surf no es solo técnica, es expresión. Descubre tu estilo personal, trabaja en la fluidez de tus movimientos y aprende a conectar maniobras con elegancia.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: estilos de surf y expresión personal" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: IMAGES.surfAction,
    slug: "flow-style",
  },
  {
    id: "mc-7",
    number: 7,
    name: "Noseriding Intro",
    date: "9 de Agosto, 2026",
    topic: "Introducción al noseriding",
    level: "Avanzados",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "El arte del longboard: caminar hacia la punta de la tabla. Aprende las técnicas de cross-stepping y noseriding que definen el estilo clásico del surf.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: historia y técnica del noseriding" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: IMAGES.surfGroup,
    slug: "noseriding-intro",
  },
  {
    id: "mc-8",
    number: 8,
    name: "Maneuver Combinations",
    date: "23 de Agosto, 2026",
    topic: "Combinaciones de maniobras",
    level: "Intermedios+",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "Aprende a encadenar maniobras de forma fluida. Bottom turn a cutback, snap a floater, y más combinaciones que elevarán tu surfing a otro nivel.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: secuencias de maniobras y timing" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: IMAGES.chameWaves,
    slug: "maneuver-combinations",
  },
  {
    id: "mc-9",
    number: 9,
    name: "Competitive Prep",
    date: "6 de Septiembre, 2026",
    topic: "Preparación para competencias",
    level: "Avanzados",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "Prepárate para competir. Estrategia de heat, selección de olas bajo presión, criterios de puntuación y mentalidad competitiva.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: reglas de competencia y estrategia" },
      { time: "9:30 - 12:00", activity: "Práctica simulando heats + video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: IMAGES.surfAction,
    slug: "competitive-prep",
  },
  {
    id: "mc-10",
    number: 10,
    name: "Big Wave Fundamentals",
    date: "20 de Septiembre, 2026",
    topic: "Fundamentos de olas grandes",
    level: "Avanzados",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "Seguridad, técnica y mentalidad para enfrentar olas más grandes. Aprende protocolos de seguridad, técnicas de caída y cómo manejar situaciones de hold-down.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: seguridad y protocolos en olas grandes" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: IMAGES.chameWaves,
    slug: "big-wave-fundamentals",
  },
  {
    id: "mc-11",
    number: 11,
    name: "Longboard Style",
    date: "11 de Octubre, 2026",
    topic: "Estilo longboard",
    level: "Todos los niveles",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "El longboard es el alma del surf. Aprende el estilo clásico: trim, soul arch, y la elegancia de surfear con una tabla larga en las olas de Playa Caracol.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: historia y filosofía del longboard" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: IMAGES.surfGroup,
    slug: "longboard-style",
  },
  {
    id: "mc-12",
    number: 12,
    name: "Cross Step",
    date: "25 de Octubre, 2026",
    topic: "Técnica de cross step",
    level: "Intermedios",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "Domina el arte de caminar sobre la tabla. El cross step es la técnica más elegante del longboard y la base para el noseriding profesional.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: biomecánica del cross step" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: IMAGES.surfAction,
    slug: "cross-step",
  },
  {
    id: "mc-13",
    number: 13,
    name: "Tube Riding Intro",
    date: "15 de Noviembre, 2026",
    topic: "Introducción al tubo",
    level: "Avanzados",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "El sueño de todo surfista: meterse en el tubo. Aprende a leer la ola, posicionarte y mantener la línea dentro del barrel. La experiencia definitiva del surf.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: lectura de olas tubulares y posicionamiento" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: IMAGES.chameWaves,
    slug: "tube-riding-intro",
  },
  {
    id: "mc-14",
    number: 14,
    name: "Positioning",
    date: "29 de Noviembre, 2026",
    topic: "Posicionamiento en el lineup",
    level: "Intermedios+",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "El posicionamiento es lo que separa a los buenos surfistas de los grandes. Aprende a leer corrientes, identificar el pico y estar siempre en el lugar correcto.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Teoría: corrientes, mareas y posicionamiento" },
      { time: "9:30 - 12:00", activity: "Práctica en agua + grabación de video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal" },
      { time: "14:30 - 15:00", activity: "Práctica adicional + cierre y certificados" },
    ],
    image: IMAGES.surfGroup,
    slug: "positioning",
  },
  {
    id: "mc-15",
    number: 15,
    name: "Year Review 2026",
    date: "12 de Diciembre, 2026",
    topic: "Revisión anual y cierre de temporada",
    level: "Todos los niveles",
    price: 175,
    capacity: 10,
    schedule: "9:00 AM - 3:00 PM",
    instructor: "Instructor Senior Certificado",
    includes: ["3 horas instrucción especializada", "Video recording + análisis grupal", "Almuerzo completo", "Sesión práctica supervisada", "Certificado de participación", "Fotos del evento"],
    description: "Cierra el año con la comunidad ANS. Revisión de lo aprendido, sesión libre de surf y celebración del progreso de todos los participantes de la temporada 2026.",
    daySchedule: [
      { time: "9:00 - 9:30", activity: "Revisión del año y logros de la comunidad" },
      { time: "9:30 - 12:00", activity: "Sesión libre de surf + video" },
      { time: "12:00 - 13:00", activity: "Almuerzo completo" },
      { time: "13:00 - 14:30", activity: "Video análisis grupal + highlights del año" },
      { time: "14:30 - 15:00", activity: "Certificados + cierre de temporada" },
    ],
    image: IMAGES.beachAerial,
    slug: "year-review-2026",
  },
];

// ============================================================
// SURF CAMPS (8)
// ============================================================
export interface SurfCampProduct {
  id: string;
  number: number;
  name: string;
  dates: string;
  level: string;
  price: number;
  capacity: number;
  includes: string[];
  description: string;
  saturdaySchedule: { time: string; activity: string }[];
  sundaySchedule: { time: string; activity: string }[];
  image: string;
  slug: string;
  highlight: string;
}

export const SURF_CAMPS: SurfCampProduct[] = [
  {
    id: "camp-1",
    number: 1,
    name: "LAUNCH CAMP",
    dates: "15 - 17 de Mayo, 2026",
    level: "Principiantes",
    price: 550,
    capacity: 12,
    includes: [
      "4 sesiones de surf (2h cada día)",
      "Surfer invitado relevante del área",
      "Alojamiento 1 noche en Radisson Riviera",
      "Desayuno sábado + domingo",
      "Almuerzo sábado + domingo",
      "Cena sábado",
      "Video análisis personal",
      "Certificado de nivel",
      "Rashgift ANS premium",
      "Fotografía profesional",
      "Snacks y bebidas",
    ],
    description: "El primer Surf Camp de la temporada 2026. Diseñado para principiantes que quieren dar el salto de las clases individuales a una inmersión completa de fin de semana. Incluye surfer invitado, alojamiento en Radisson y todas las comidas.",
    saturdaySchedule: [
      { time: "8:00", activity: "Check-in + Bienvenida" },
      { time: "8:30 - 10:30", activity: "Sesión 1: Surf con Surfer Invitado" },
      { time: "10:30 - 11:00", activity: "Break + snacks" },
      { time: "11:00 - 13:00", activity: "Sesión 2: Surf técnica" },
      { time: "13:00 - 14:00", activity: "Almuerzo en Vento" },
      { time: "14:00 - 16:00", activity: "Video review + Q&A con Surfer Invitado" },
      { time: "16:00 - 17:00", activity: "Tiempo libre" },
      { time: "19:00", activity: "Cena grupal" },
      { time: "21:00", activity: "Actividad nocturna" },
    ],
    sundaySchedule: [
      { time: "8:00", activity: "Desayuno" },
      { time: "8:30 - 10:30", activity: "Sesión 3: Surf con Surfer Invitado" },
      { time: "10:30 - 11:00", activity: "Break + snacks" },
      { time: "11:00 - 13:00", activity: "Sesión 4 + Evaluación" },
      { time: "13:00 - 14:00", activity: "Almuerzo" },
      { time: "14:00 - 15:00", activity: "Certificados + Fotos con Surfer Invitado" },
      { time: "15:00", activity: "Check-out" },
    ],
    image: IMAGES.surfSchool,
    slug: "launch-camp",
    highlight: "Primer camp de la temporada",
  },
  {
    id: "camp-2",
    number: 2,
    name: "PROGRESSION I",
    dates: "12 - 14 de Junio, 2026",
    level: "Intermedios",
    price: 550,
    capacity: 12,
    includes: ["4 sesiones de surf (2h cada día)", "Surfer invitado relevante del área", "Alojamiento 1 noche en Radisson Riviera", "Desayuno sábado + domingo", "Almuerzo sábado + domingo", "Cena sábado", "Video análisis personal", "Certificado de nivel", "Rashgift ANS premium", "Fotografía profesional", "Snacks y bebidas"],
    description: "Para surfistas intermedios que buscan romper la meseta. Enfocado en maniobras fundamentales, lectura de olas avanzada y desarrollo de estilo personal con coaching de un surfer invitado.",
    saturdaySchedule: [
      { time: "8:00", activity: "Check-in + Bienvenida" },
      { time: "8:30 - 10:30", activity: "Sesión 1: Surf con Surfer Invitado" },
      { time: "10:30 - 11:00", activity: "Break + snacks" },
      { time: "11:00 - 13:00", activity: "Sesión 2: Maniobras intermedias" },
      { time: "13:00 - 14:00", activity: "Almuerzo en Vento" },
      { time: "14:00 - 16:00", activity: "Video review + Q&A con Surfer Invitado" },
      { time: "16:00 - 17:00", activity: "Tiempo libre" },
      { time: "19:00", activity: "Cena grupal" },
      { time: "21:00", activity: "Actividad nocturna" },
    ],
    sundaySchedule: [
      { time: "8:00", activity: "Desayuno" },
      { time: "8:30 - 10:30", activity: "Sesión 3: Surf con Surfer Invitado" },
      { time: "10:30 - 11:00", activity: "Break + snacks" },
      { time: "11:00 - 13:00", activity: "Sesión 4 + Evaluación" },
      { time: "13:00 - 14:00", activity: "Almuerzo" },
      { time: "14:00 - 15:00", activity: "Certificados + Fotos con Surfer Invitado" },
      { time: "15:00", activity: "Check-out" },
    ],
    image: IMAGES.surfAction,
    slug: "progression-i",
    highlight: "Rompe la meseta",
  },
  {
    id: "camp-3", number: 3, name: "MID-YEAR SWELL", dates: "17 - 19 de Julio, 2026", level: "Mixto", price: 550, capacity: 12,
    includes: ["4 sesiones de surf (2h cada día)", "Surfer invitado relevante del área", "Alojamiento 1 noche en Radisson Riviera", "Desayuno sábado + domingo", "Almuerzo sábado + domingo", "Cena sábado", "Video análisis personal", "Certificado de nivel", "Rashgift ANS premium", "Fotografía profesional", "Snacks y bebidas"],
    description: "Aprovecha el mejor swell del año en Playa Caracol. Camp mixto donde principiantes e intermedios comparten la experiencia pero con coaching personalizado por nivel.",
    saturdaySchedule: [{ time: "8:00", activity: "Check-in + Bienvenida" }, { time: "8:30 - 10:30", activity: "Sesión 1: Surf con Surfer Invitado" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 2: Surf por niveles" }, { time: "13:00 - 14:00", activity: "Almuerzo en Vento" }, { time: "14:00 - 16:00", activity: "Video review + Q&A" }, { time: "16:00 - 17:00", activity: "Tiempo libre" }, { time: "19:00", activity: "Cena grupal" }, { time: "21:00", activity: "Actividad nocturna" }],
    sundaySchedule: [{ time: "8:00", activity: "Desayuno" }, { time: "8:30 - 10:30", activity: "Sesión 3: Surf con Surfer Invitado" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 4 + Evaluación" }, { time: "13:00 - 14:00", activity: "Almuerzo" }, { time: "14:00 - 15:00", activity: "Certificados + Fotos" }, { time: "15:00", activity: "Check-out" }],
    image: IMAGES.chameWaves, slug: "mid-year-swell", highlight: "Mejor swell del año",
  },
  {
    id: "camp-4", number: 4, name: "SUMMER VIBES", dates: "14 - 16 de Agosto, 2026", level: "Principiantes", price: 550, capacity: 12,
    includes: ["4 sesiones de surf (2h cada día)", "Surfer invitado relevante del área", "Alojamiento 1 noche en Radisson Riviera", "Desayuno sábado + domingo", "Almuerzo sábado + domingo", "Cena sábado", "Video análisis personal", "Certificado de nivel", "Rashgift ANS premium", "Fotografía profesional", "Snacks y bebidas"],
    description: "El camp más relajado del año. Perfecto para principiantes que quieren aprender surf en un ambiente tropical y desconectado. Olas suaves, buena vibra y comunidad.",
    saturdaySchedule: [{ time: "8:00", activity: "Check-in + Bienvenida" }, { time: "8:30 - 10:30", activity: "Sesión 1: Surf con Surfer Invitado" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 2: Fundamentos" }, { time: "13:00 - 14:00", activity: "Almuerzo en Vento" }, { time: "14:00 - 16:00", activity: "Video review + Q&A" }, { time: "16:00 - 17:00", activity: "Tiempo libre" }, { time: "19:00", activity: "Cena grupal" }, { time: "21:00", activity: "Actividad nocturna" }],
    sundaySchedule: [{ time: "8:00", activity: "Desayuno" }, { time: "8:30 - 10:30", activity: "Sesión 3: Surf con Surfer Invitado" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 4 + Evaluación" }, { time: "13:00 - 14:00", activity: "Almuerzo" }, { time: "14:00 - 15:00", activity: "Certificados + Fotos" }, { time: "15:00", activity: "Check-out" }],
    image: IMAGES.surfGroup, slug: "summer-vibes", highlight: "El más relajado",
  },
  {
    id: "camp-5", number: 5, name: "TECHNIQUE BOOTCAMP", dates: "18 - 20 de Septiembre, 2026", level: "Intermedios", price: 550, capacity: 12,
    includes: ["4 sesiones de surf (2h cada día)", "Surfer invitado relevante del área", "Alojamiento 1 noche en Radisson Riviera", "Desayuno sábado + domingo", "Almuerzo sábado + domingo", "Cena sábado", "Video análisis personal", "Certificado de nivel", "Rashgift ANS premium", "Fotografía profesional", "Snacks y bebidas"],
    description: "Bootcamp intensivo de técnica. Enfocado 100% en perfeccionar maniobras: bottom turn, cutback, snap y combinaciones. Para surfistas que quieren resultados rápidos.",
    saturdaySchedule: [{ time: "8:00", activity: "Check-in + Bienvenida" }, { time: "8:30 - 10:30", activity: "Sesión 1: Drill de maniobras" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 2: Práctica intensiva" }, { time: "13:00 - 14:00", activity: "Almuerzo en Vento" }, { time: "14:00 - 16:00", activity: "Video review detallado" }, { time: "16:00 - 17:00", activity: "Tiempo libre" }, { time: "19:00", activity: "Cena grupal" }, { time: "21:00", activity: "Actividad nocturna" }],
    sundaySchedule: [{ time: "8:00", activity: "Desayuno" }, { time: "8:30 - 10:30", activity: "Sesión 3: Práctica de maniobras" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 4 + Evaluación técnica" }, { time: "13:00 - 14:00", activity: "Almuerzo" }, { time: "14:00 - 15:00", activity: "Certificados + Fotos" }, { time: "15:00", activity: "Check-out" }],
    image: IMAGES.surfAction, slug: "technique-bootcamp", highlight: "Intensivo de técnica",
  },
  {
    id: "camp-6", number: 6, name: "HALLOWEEN SURF", dates: "16 - 18 de Octubre, 2026", level: "Mixto", price: 550, capacity: 12,
    includes: ["4 sesiones de surf (2h cada día)", "Surfer invitado relevante del área", "Alojamiento 1 noche en Radisson Riviera", "Desayuno sábado + domingo", "Almuerzo sábado + domingo", "Cena sábado", "Video análisis personal", "Certificado de nivel", "Rashgift ANS premium", "Fotografía profesional", "Snacks y bebidas"],
    description: "Surf + Halloween = la combinación perfecta. Camp temático con actividades especiales nocturnas, surf de día y la mejor fiesta de la temporada.",
    saturdaySchedule: [{ time: "8:00", activity: "Check-in + Bienvenida" }, { time: "8:30 - 10:30", activity: "Sesión 1: Surf con Surfer Invitado" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 2: Surf libre" }, { time: "13:00 - 14:00", activity: "Almuerzo en Vento" }, { time: "14:00 - 16:00", activity: "Video review + Q&A" }, { time: "16:00 - 17:00", activity: "Tiempo libre" }, { time: "19:00", activity: "Cena temática Halloween" }, { time: "21:00", activity: "Fiesta Halloween" }],
    sundaySchedule: [{ time: "8:00", activity: "Desayuno" }, { time: "8:30 - 10:30", activity: "Sesión 3: Surf con Surfer Invitado" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 4 + Evaluación" }, { time: "13:00 - 14:00", activity: "Almuerzo" }, { time: "14:00 - 15:00", activity: "Certificados + Fotos" }, { time: "15:00", activity: "Check-out" }],
    image: IMAGES.beachAerial, slug: "halloween-surf", highlight: "Camp temático",
  },
  {
    id: "camp-7", number: 7, name: "PRE-SEASON CAMP", dates: "20 - 22 de Noviembre, 2026", level: "Avanzados", price: 550, capacity: 12,
    includes: ["4 sesiones de surf (2h cada día)", "Surfer invitado relevante del área", "Alojamiento 1 noche en Radisson Riviera", "Desayuno sábado + domingo", "Almuerzo sábado + domingo", "Cena sábado", "Video análisis personal", "Certificado de nivel", "Rashgift ANS premium", "Fotografía profesional", "Snacks y bebidas"],
    description: "Para surfistas avanzados que quieren cerrar fuerte antes de la temporada alta. Enfoque en performance surfing con coaching de alto nivel.",
    saturdaySchedule: [{ time: "8:00", activity: "Check-in + Bienvenida" }, { time: "8:30 - 10:30", activity: "Sesión 1: Performance surf" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 2: Maniobras avanzadas" }, { time: "13:00 - 14:00", activity: "Almuerzo en Vento" }, { time: "14:00 - 16:00", activity: "Video review avanzado" }, { time: "16:00 - 17:00", activity: "Tiempo libre" }, { time: "19:00", activity: "Cena grupal" }, { time: "21:00", activity: "Actividad nocturna" }],
    sundaySchedule: [{ time: "8:00", activity: "Desayuno" }, { time: "8:30 - 10:30", activity: "Sesión 3: Surf avanzado" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 4 + Evaluación" }, { time: "13:00 - 14:00", activity: "Almuerzo" }, { time: "14:00 - 15:00", activity: "Certificados + Fotos" }, { time: "15:00", activity: "Check-out" }],
    image: IMAGES.surfAction, slug: "pre-season-camp", highlight: "Para avanzados",
  },
  {
    id: "camp-8", number: 8, name: "HOLIDAY CAMP", dates: "11 - 13 de Diciembre, 2026", level: "Todos", price: 550, capacity: 12,
    includes: ["4 sesiones de surf (2h cada día)", "Surfer invitado relevante del área", "Alojamiento 1 noche en Radisson Riviera", "Desayuno sábado + domingo", "Almuerzo sábado + domingo", "Cena sábado", "Video análisis personal", "Certificado de nivel", "Rashgift ANS premium", "Fotografía profesional", "Snacks y bebidas"],
    description: "Cierra el año surfeando. El último camp de la temporada, abierto a todos los niveles. Celebra las fiestas con la comunidad ANS en Playa Caracol.",
    saturdaySchedule: [{ time: "8:00", activity: "Check-in + Bienvenida" }, { time: "8:30 - 10:30", activity: "Sesión 1: Surf con Surfer Invitado" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 2: Surf libre" }, { time: "13:00 - 14:00", activity: "Almuerzo en Vento" }, { time: "14:00 - 16:00", activity: "Video review + Q&A" }, { time: "16:00 - 17:00", activity: "Tiempo libre" }, { time: "19:00", activity: "Cena de cierre de año" }, { time: "21:00", activity: "Celebración" }],
    sundaySchedule: [{ time: "8:00", activity: "Desayuno" }, { time: "8:30 - 10:30", activity: "Sesión 3: Surf con Surfer Invitado" }, { time: "10:30 - 11:00", activity: "Break + snacks" }, { time: "11:00 - 13:00", activity: "Sesión 4 + Evaluación" }, { time: "13:00 - 14:00", activity: "Almuerzo" }, { time: "14:00 - 15:00", activity: "Certificados + Fotos + Cierre de temporada" }, { time: "15:00", activity: "Check-out" }],
    image: IMAGES.heroAerial, slug: "holiday-camp", highlight: "Cierre de temporada",
  },
];

// ============================================================
// SURF RETREATS (2)
// ============================================================
export interface SurfRetreatProduct {
  id: string;
  number: number;
  name: string;
  dates: string;
  days: number;
  nights: number;
  price: number;
  capacity: number;
  surferInvitado: string;
  includes: string[];
  description: string;
  mission: string;
  dailySchedule: { day: string; morning: string; afternoon: string; evening: string }[];
  image: string;
  slug: string;
}

export const SURF_RETREATS: SurfRetreatProduct[] = [
  {
    id: "retreat-1",
    number: 1,
    name: "Summer Swell Retreat",
    dates: "15 - 20 de Julio, 2026",
    days: 6,
    nights: 5,
    price: 1150,
    capacity: 10,
    surferInvitado: "Surfista reconocido de Panamá",
    includes: [
      "Surfer invitado relevante todo el retreat",
      "5 noches alojamiento en Radisson Riviera (hab. doble)",
      "Surf diario (2h cada día)",
      "Todos los desayunos (5)",
      "Todos los almuerzos (5)",
      "Todas las cenas (5)",
      "Video análisis personalizado",
      "Tours incluidos (Isla Otoque + Jet Ski)",
      "Certificado de nivel",
      "Fotografía profesional",
      "Rashgift ANS premium",
      "Transporte incluido",
      "Snacks y bebidas",
    ],
    description: "La experiencia definitiva de surf en Panamá. 5 noches en el Radisson Riviera con surf diario, un surfer invitado de renombre durante todo el retreat, tours a islas paradisíacas, pensión completa y la mejor comunidad de surf del país.",
    mission: "Transformar tu surf y tu perspectiva. No es solo un viaje, es una inmersión total en la cultura del surf panameño, donde cada ola te acerca más a tu mejor versión como surfista.",
    dailySchedule: [
      { day: "Día 1", morning: "Check-in en Radisson", afternoon: "Primera clase con Surfer Invitado", evening: "Cena de bienvenida" },
      { day: "Día 2", morning: "Desayuno + 2da clase de surf", afternoon: "Video análisis + playa libre", evening: "Cena grupal" },
      { day: "Día 3", morning: "Desayuno + 3ra clase de surf", afternoon: "Tour Isla Otoque", evening: "Cena grupal" },
      { day: "Día 4", morning: "Desayuno + 4ta clase de surf", afternoon: "Jet Ski tour", evening: "Cena grupal" },
      { day: "Día 5", morning: "Desayuno + Última clase con Surfer", afternoon: "Certificados + cierre", evening: "Cena de despedida" },
      { day: "Día 6", morning: "Desayuno + Check-out", afternoon: "", evening: "" },
    ],
    image: IMAGES.radissonPool,
    slug: "summer-swell-retreat",
  },
  {
    id: "retreat-2",
    number: 2,
    name: "Holiday Reset Retreat",
    dates: "10 - 15 de Diciembre, 2026",
    days: 6,
    nights: 5,
    price: 1150,
    capacity: 10,
    surferInvitado: "Surfista de Centroamérica",
    includes: [
      "Surfer invitado relevante todo el retreat",
      "5 noches alojamiento en Radisson Riviera (hab. doble)",
      "Surf diario (2h cada día)",
      "Todos los desayunos (5)",
      "Todos los almuerzos (5)",
      "Todas las cenas (5)",
      "Video análisis personalizado",
      "Tours incluidos (Isla Otoque + Jet Ski)",
      "Certificado de nivel",
      "Fotografía profesional",
      "Rashgift ANS premium",
      "Transporte incluido",
      "Snacks y bebidas",
    ],
    description: "Cierra el año reseteando cuerpo y mente con surf. 5 noches en el Radisson Riviera, un surfer invitado de Centroamérica, tours a islas, pensión completa y la energía perfecta para empezar el nuevo año renovado.",
    mission: "Resetear, reconectar y renovar. Termina el año dejando atrás el estrés y comenzando una nueva etapa con la energía del océano y la comunidad ANS.",
    dailySchedule: [
      { day: "Día 1", morning: "Check-in en Radisson", afternoon: "Primera clase con Surfer Invitado", evening: "Cena de bienvenida" },
      { day: "Día 2", morning: "Desayuno + 2da clase de surf", afternoon: "Video análisis + playa libre", evening: "Cena grupal" },
      { day: "Día 3", morning: "Desayuno + 3ra clase de surf", afternoon: "Tour Isla Otoque", evening: "Cena grupal" },
      { day: "Día 4", morning: "Desayuno + 4ta clase de surf", afternoon: "Jet Ski tour", evening: "Cena grupal" },
      { day: "Día 5", morning: "Desayuno + Última clase con Surfer", afternoon: "Certificados + cierre", evening: "Cena de despedida navideña" },
      { day: "Día 6", morning: "Desayuno + Check-out", afternoon: "", evening: "" },
    ],
    image: IMAGES.radissonLounge,
    slug: "holiday-reset-retreat",
  },
];

// ============================================================
// NAVIGATION & CONTACT
// ============================================================
export const WHATSAPP_NUMBER = "+507-6443-1477";
export const WHATSAPP_URL = "https://wa.me/50764431477";
export const EMAIL = "info@anspanama.com";
export const INSTAGRAM = "https://www.instagram.com/anspanama/";
export const FACEBOOK = "https://www.facebook.com/anspanama/";
export const YOUTUBE = "https://www.youtube.com/@anspanama";
export const LOCATION = "Playa Caracol, Punta Chame, Panamá";
export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Playa+Caracol+Punta+Chame+Panama";
