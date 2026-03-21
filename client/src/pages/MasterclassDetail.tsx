// ANS Surf - Pacific Flow Design
// MasterclassDetail: Salty Souls-inspired storytelling landing page
// Structure: Hero → Quote → Chapter 1 (The Surf) → Photo Break → Chapter 2 (Who Is This For) →
// Quick Stats → Mid CTA → Chapter 3 (The Day) → Photo Grid → Chapter 4 (The Location) →
// Included/Not Included → Meet Instructors → FAQ → Final CTA
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Calendar, Clock, Users, Check, X, MapPin, Star,
  Video, Award, Waves, Phone, ChevronDown, Compass, Camera, Sun, Coffee
} from "lucide-react";
import { MASTERCLASSES, WHATSAPP_URL, WHATSAPP_NUMBER, LOCATION, IMAGES } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NotFound from "./NotFound";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

// Inspirational quotes that rotate per masterclass
const QUOTES = [
  { text: "El mejor surfista es el que más se divierte.", author: "Duke Kahanamoku" },
  { text: "Las olas no se miden en pies y pulgadas, se miden en incrementos de miedo.", author: "Buzzy Trent" },
  { text: "El surf es la fuente más cercana a la eternidad.", author: "Patrick Swayze" },
  { text: "No puedes detener las olas, pero puedes aprender a surfear.", author: "Jon Kabat-Zinn" },
  { text: "El mar, una vez que te hechiza, te mantiene en su red de maravilla para siempre.", author: "Jacques Cousteau" },
  { text: "El surf te enseña a ser paciente. A esperar la ola correcta.", author: "Gerry Lopez" },
  { text: "La vida es como el surf. A veces te caes, pero siempre vuelves a remar.", author: "Bethany Hamilton" },
  { text: "Surfear es la cosa más cercana a caminar sobre el agua.", author: "Bob Simmons" },
  { text: "El océano no tiene compasión, pero tiene belleza infinita.", author: "Laird Hamilton" },
  { text: "Cada ola es una nueva oportunidad.", author: "Anónimo" },
  { text: "El surf es el deporte de los reyes.", author: "Tradición hawaiana" },
  { text: "No se trata de la ola, se trata de lo que sientes al montarla.", author: "Kelly Slater" },
  { text: "El mejor momento para surfear fue ayer. El segundo mejor es ahora.", author: "Proverbio surfista" },
  { text: "El surf te conecta con algo más grande que tú mismo.", author: "Rob Machado" },
  { text: "Cada sesión de surf es una lección de humildad y gratitud.", author: "Tom Curren" },
];

// Photo gallery for visual variety
const GALLERY = [
  IMAGES.surfAction, IMAGES.surfLesson, IMAGES.surfGroup, IMAGES.surfGirls,
  IMAGES.chameWaves, IMAGES.surfSchool, IMAGES.surfKids, IMAGES.caracolBeach,
  IMAGES.beachAerial, IMAGES.surfSunset, IMAGES.radissonPool, IMAGES.ventoClub,
  IMAGES.radissonAerial, IMAGES.caracolAerial2, IMAGES.radissonFront, IMAGES.radissonLounge
];

// "Who is this for" descriptions per level
const WHO_IS_THIS_FOR: Record<string, { title: string; description: string; traits: string[] }> = {
  "Principiantes": {
    title: "Para Ti Que Estás Empezando",
    description: "Esta masterclass es para ti si sueñas con pararte en una tabla por primera vez, o si ya tomaste una clase pero quieres entender realmente qué estás haciendo. No necesitas experiencia previa — solo ganas de mojarte y aprender.",
    traits: ["Nunca has surfeado o tienes pocas sesiones", "Quieres entender los fundamentos correctamente", "Buscas un ambiente seguro y sin presión", "Te emociona la idea de conectar con el océano"],
  },
  "Intermedios": {
    title: "Para Ti Que Quieres Más",
    description: "Ya te paras en la tabla, ya remaste hasta el lineup, pero sientes que estás en una meseta. Esta masterclass es para romper ese techo. Vamos a trabajar en las técnicas que separan a un surfista casual de uno que realmente domina las olas.",
    traits: ["Ya surfeas pero quieres mejorar tu técnica", "Sientes que estás estancado en tu progreso", "Quieres aprender maniobras específicas", "Buscas feedback profesional de tu surf"],
  },
  "Avanzados": {
    title: "Para Ti Que Vives el Surf",
    description: "Surfeas regularmente, tienes tu propio equipo, y buscas ese edge que te lleve al siguiente nivel. Esta masterclass es coaching de alto rendimiento con análisis detallado y técnicas avanzadas que normalmente solo se enseñan en competencia.",
    traits: ["Surfeas frecuentemente y tienes experiencia sólida", "Quieres perfeccionar maniobras avanzadas", "Buscas coaching de nivel competitivo", "Quieres video análisis detallado de tu técnica"],
  },
  "Intermedios+": {
    title: "Para Ti Que Quieres Dominar",
    description: "Estás entre intermedio y avanzado. Surfeas bien, pero sabes que hay técnicas específicas que te faltan dominar. Esta masterclass cierra esa brecha con coaching preciso y personalizado.",
    traits: ["Tienes buena base pero quieres especializarte", "Buscas dominar técnicas específicas", "Quieres transicionar a nivel avanzado", "Valoras el coaching personalizado"],
  },
  "Todos los niveles": {
    title: "Para Toda la Comunidad ANS",
    description: "No importa si es tu primera ola o tu ola número mil. Esta sesión es para toda la comunidad — un espacio donde compartimos, aprendemos juntos y celebramos el surf como estilo de vida.",
    traits: ["Quieres ser parte de la comunidad ANS", "Disfrutas surfear con otros", "Valoras la experiencia grupal", "Quieres cerrar el año con buena energía"],
  },
};

export default function MasterclassDetail() {
  const { slug } = useParams<{ slug: string }>();
  const mc = MASTERCLASSES.find((m) => m.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!mc) return <NotFound />;

  const mcIndex = MASTERCLASSES.findIndex((m) => m.slug === slug);
  const prevMc = mcIndex > 0 ? MASTERCLASSES[mcIndex - 1] : null;
  const nextMc = mcIndex < MASTERCLASSES.length - 1 ? MASTERCLASSES[mcIndex + 1] : null;
  const quote = QUOTES[mcIndex % QUOTES.length];
  const whoFor = WHO_IS_THIS_FOR[mc.level] || WHO_IS_THIS_FOR["Todos los niveles"];

  // Distribute gallery images across sections
  const g = (offset: number) => GALLERY[(mcIndex * 3 + offset) % GALLERY.length];

  const whatsappLink = `${WHATSAPP_URL}?text=Hola! Me interesa la Masterclass %23${mc.number}: ${encodeURIComponent(mc.name)} del ${encodeURIComponent(mc.date)}`;
  const whatsappCall = `${WHATSAPP_URL}?text=Hola! Quisiera hablar con alguien sobre la Masterclass %23${mc.number}`;

  const faqs = [
    { q: "¿Necesito experiencia previa?", a: `Esta masterclass es para nivel ${mc.level.toLowerCase()}. Si no estás seguro de tu nivel, escríbenos por WhatsApp y te orientamos sin compromiso.` },
    { q: "¿Qué pasa si llueve?", a: "Las masterclasses se realizan llueva o haga sol — el surf no se detiene por la lluvia. Solo en caso de condiciones extremas (tormentas eléctricas) se reprograma sin costo." },
    { q: "¿Puedo traer mi propia tabla?", a: "Claro que sí. Pero también proporcionamos tablas de alta calidad adecuadas para cada nivel, sin costo adicional. Tú decides." },
    { q: "¿Cómo llego a Playa Caracol?", a: "Está a solo 1.5 horas de Ciudad de Panamá por la Panamericana. Tomas la salida a Punta Chame y sigues hasta Playa Caracol. Hay estacionamiento gratuito." },
    { q: "¿Puedo cancelar o cambiar de fecha?", a: "Sí. Puedes cancelar hasta 48 horas antes sin penalidad. También puedes transferir tu cupo a otra persona o cambiar a otra fecha disponible." },
    { q: "¿Qué incluye el almuerzo?", a: "Almuerzo completo en Vento Beach Club, el restaurante del resort Playa Caracol. Menú variado con opciones para todos los gustos." },
  ];

  return (
    <div className="min-h-screen bg-foam">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════
          HERO - Full screen immersive with product overlay
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={mc.image} alt={mc.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean via-ocean/60 to-ocean/20" />
        </div>
        <div className="relative container pb-12 pt-32">
          <Link href="/masterclasses" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm font-body mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Todas las Masterclasses
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-coral text-white text-sm font-display font-bold px-3 py-1 rounded">Masterclass #{mc.number}</span>
            <span className="bg-white/15 text-white text-sm font-display px-3 py-1 rounded">{mc.level}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-[1.05]">{mc.name}</h1>
          <p className="text-white/80 font-body text-lg sm:text-xl max-w-2xl mb-6">{mc.topic}</p>

          {/* Quick Info Bar */}
          <div className="flex flex-wrap gap-5 text-white/70 text-sm font-body mb-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-coral" /> {mc.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-coral" /> {mc.schedule}</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-coral" /> Máximo {mc.capacity} personas</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-coral" /> {LOCATION}</span>
          </div>

          {/* Hero CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-md font-display font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Reservar Mi Cupo — ${mc.price} <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={whatsappCall}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-6 py-4 rounded-md font-display font-semibold transition-all"
            >
              <Phone className="w-4 h-4" /> Hablar con Alguien
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INSPIRATIONAL QUOTE
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-ocean py-14">
        <div className="container text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white italic leading-relaxed">
              "{quote.text}"
            </p>
            <cite className="block mt-4 text-coral font-body text-sm not-italic tracking-wider uppercase">
              — {quote.author}
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 1: THE SURF — Split photo + text
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Photo Side */}
              <motion.div variants={fadeUp} className="relative">
                <img src={g(0)} alt="Surf en Playa Caracol" className="w-full h-[500px] object-cover rounded-lg shadow-xl" />
                <div className="absolute -bottom-6 -right-6 bg-coral text-white p-4 rounded-lg shadow-lg hidden lg:block">
                  <Waves className="w-6 h-6 mb-1" />
                  <span className="font-display font-bold text-sm block">Olas Consistentes</span>
                  <span className="text-white/80 text-xs">Todo el año</span>
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div variants={fadeUp}>
                <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 1</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">
                  El Surf
                </h2>
                <p className="text-foreground font-body text-lg leading-relaxed mb-6">
                  {mc.description}
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Imagínate esto: llegas a Playa Caracol temprano en la mañana. El sol apenas asoma sobre el Pacífico y las olas rompen perfectas sobre el fondo de arena. Tu instructor te recibe con un café, revisan juntos el plan del día, y antes de que te des cuenta ya estás en el agua, sintiendo la energía del océano bajo tus pies.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  Esta no es una clase más. Es una sesión intensiva diseñada para que en un solo día domines técnicas que normalmente toman semanas de práctica. Con grupos reducidos de máximo {mc.capacity} personas, cada participante recibe atención personalizada, feedback en tiempo real, y video análisis para que veas exactamente qué estás haciendo bien y qué puedes mejorar.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-sand/50">
                    <Video className="w-6 h-6 text-coral mb-3" />
                    <h4 className="font-display font-bold text-ocean text-sm">Video Análisis</h4>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">Te grabamos surfeando y analizamos tu técnica cuadro por cuadro. Te llevas el video a casa.</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-sand/50">
                    <Award className="w-6 h-6 text-coral mb-3" />
                    <h4 className="font-display font-bold text-ocean text-sm">Certificado ANS</h4>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">Recibe tu certificado oficial de nivel al completar la masterclass.</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-sand/50">
                    <Camera className="w-6 h-6 text-coral mb-3" />
                    <h4 className="font-display font-bold text-ocean text-sm">Fotografía Pro</h4>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">Fotos profesionales de tu sesión para que compartas tu experiencia.</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-sand/50">
                    <Coffee className="w-6 h-6 text-coral mb-3" />
                    <h4 className="font-display font-bold text-ocean text-sm">Almuerzo Incluido</h4>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">Almuerzo completo en Vento Beach Club, el restaurante del resort.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FULL-WIDTH PHOTO BREAK — Just vibes
      ═══════════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-3 h-[250px] sm:h-[300px]">
        <img src={g(1)} alt="Surf lifestyle" className="w-full h-full object-cover" />
        <img src={g(2)} alt="Playa Caracol" className="w-full h-full object-cover" />
        <img src={g(3)} alt="Comunidad ANS" className="w-full h-full object-cover" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 2: WHO IS THIS FOR — Centered emotional text
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeUp}>
              <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 2</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">
                {whoFor.title}
              </h2>
              <p className="text-foreground font-body text-lg leading-relaxed mb-10">
                {whoFor.description}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
              {whoFor.traits.map((trait, i) => (
                <div key={i} className="flex items-start gap-3 p-3">
                  <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-coral" />
                  </div>
                  <span className="text-foreground font-body text-sm leading-relaxed">{trait}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          QUICK STATS — Icon-based at a glance
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-12 border-y border-sand/30">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Users className="w-7 h-7" />, label: "Grupo Máximo", value: `${mc.capacity} personas` },
              { icon: <Clock className="w-7 h-7" />, label: "Duración", value: "6 horas" },
              { icon: <Star className="w-7 h-7" />, label: "Nivel", value: mc.level },
              { icon: <Compass className="w-7 h-7" />, label: "Equipo", value: "Incluido" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="text-coral">{stat.icon}</div>
                <span className="font-display font-bold text-ocean text-lg">{stat.value}</span>
                <span className="text-muted-foreground text-xs font-body uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MID-PAGE CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.chameWaves} alt="Olas de Chame" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean/85" />
        </div>
        <div className="relative container text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            Solo {mc.capacity} cupos. No te quedes fuera.
          </h3>
          <p className="text-white/70 font-body text-lg max-w-xl mx-auto mb-8">
            Las masterclasses ANS se llenan rápido. Reserva tu lugar y asegura tu transformación.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-md font-display font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Reservar Ahora — ${mc.price} <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 3: THE DAY — Schedule with storytelling
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Text Side */}
              <motion.div variants={fadeUp}>
                <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 3</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">
                  Tu Día en ANS
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  Un día completo de inmersión en el surf. Desde la teoría en la mañana hasta la práctica en el agua, pasando por almuerzo en Vento Beach Club y video análisis con tu instructor. Así se ve tu masterclass:
                </p>

                {/* Timeline */}
                <div className="space-y-0 bg-white rounded-lg p-6 shadow-sm">
                  {mc.daySchedule.map((item, i) => (
                    <div key={i} className={`flex gap-4 py-4 ${i < mc.daySchedule.length - 1 ? "border-b border-sand/50" : ""}`}>
                      <div className="w-24 shrink-0">
                        <span className="font-display font-bold text-coral text-sm">{item.time}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-ocean rounded-full mt-2 shrink-0" />
                        <span className="text-foreground font-body">{item.activity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Photo Side */}
              <motion.div variants={fadeUp} className="space-y-4">
                <img src={g(4)} alt="Sesión de surf" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
                <div className="grid grid-cols-2 gap-4">
                  <img src={g(5)} alt="Video análisis" className="w-full h-[200px] object-cover rounded-lg shadow-md" />
                  <img src={IMAGES.ventoClub} alt="Almuerzo en Vento" className="w-full h-[200px] object-cover rounded-lg shadow-md" />
                </div>
                <p className="text-muted-foreground text-xs font-body text-center italic">
                  Surf, almuerzo en Vento Beach Club, y video análisis — todo en un día.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PHOTO GRID — Full-width lifestyle collage
      ═══════════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-2 md:grid-cols-4 h-[200px] sm:h-[280px]">
        <img src={g(6)} alt="Lifestyle" className="w-full h-full object-cover" />
        <img src={g(7)} alt="Lifestyle" className="w-full h-full object-cover" />
        <img src={g(8)} alt="Lifestyle" className="w-full h-full object-cover hidden md:block" />
        <img src={g(9)} alt="Lifestyle" className="w-full h-full object-cover hidden md:block" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 4: THE LOCATION — About Playa Caracol
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Text Side */}
              <motion.div variants={fadeUp} className="order-2 lg:order-1">
                <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 4</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">
                  Sobre Playa Caracol
                </h2>
                <p className="text-foreground font-body text-lg leading-relaxed mb-6">
                  Playa Caracol es el spot de surf más accesible del Pacífico panameño. A solo 1 hora y media de Ciudad de Panamá, en la península de Punta Chame, encontrarás olas consistentes todo el año y un fondo de arena que la hace perfecta para aprender y perfeccionar técnicas.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  El resort Playa Caracol cuenta con el Hotel Radisson Riviera, restaurantes frente al mar, piscinas, spa, y todo lo que necesitas para complementar tu experiencia de surf con el confort de un destino de primer nivel.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Nuestros instructores certificados ISA llevan más de 5 años formando surfistas en estas aguas. Conocen cada corriente, cada banco de arena, y saben exactamente dónde posicionarte para que aproveches cada ola al máximo.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-ocean">
                    <Sun className="w-4 h-4 text-coral" />
                    <span className="font-body">Agua cálida todo el año</span>
                  </div>
                  <div className="flex items-center gap-2 text-ocean">
                    <Waves className="w-4 h-4 text-coral" />
                    <span className="font-body">Olas consistentes</span>
                  </div>
                </div>
              </motion.div>

              {/* Photo Side */}
              <motion.div variants={fadeUp} className="order-1 lg:order-2">
                <img src={IMAGES.caracolAerial2} alt="Vista aérea de Playa Caracol" className="w-full h-[450px] object-cover rounded-lg shadow-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INCLUDED / NOT INCLUDED — Side by side
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-ocean text-center mb-12">
              ¿Qué Incluye Tu Masterclass?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Included */}
              <motion.div variants={fadeUp} className="bg-white rounded-lg p-8 shadow-sm border border-sand/50">
                <h3 className="font-display font-bold text-ocean text-lg mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  Incluido
                </h3>
                <div className="space-y-3">
                  {mc.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-foreground font-body text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Not Included */}
              <motion.div variants={fadeUp} className="bg-white rounded-lg p-8 shadow-sm border border-sand/50">
                <h3 className="font-display font-bold text-ocean text-lg mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  No Incluido
                </h3>
                <div className="space-y-3">
                  {[
                    "Transporte hasta Playa Caracol",
                    "Alojamiento (disponible en Radisson Riviera)",
                    "Bebidas alcohólicas",
                    "Seguro de viaje personal",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-body text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT TO BRING
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14">
        <div className="container max-w-3xl">
          <h3 className="font-display text-xl font-bold text-ocean text-center mb-8">¿Qué Traer?</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Protector solar reef-safe", "Traje de baño", "Toalla", "Agua", "Gorra o sombrero", "Sandalias", "Ropa de cambio", "Buena actitud"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-foam rounded-lg p-3 text-sm text-foreground font-body">
                <Sun className="w-3.5 h-3.5 text-coral shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MEET YOUR INSTRUCTORS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.beachAerial} alt="Playa Caracol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean/90" />
        </div>
        <div className="relative container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <h2 className="font-display text-3xl font-bold text-white mb-3">Conoce a Tus Instructores</h2>
              <p className="text-white/70 font-body max-w-xl mx-auto mb-12">
                Instructores certificados ISA con más de 5 años de experiencia formando surfistas en Playa Caracol.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { name: "Instructor Principal", role: "Head Coach ISA", img: IMAGES.surfAction },
                { name: mc.instructor, role: "Masterclass Lead", img: IMAGES.surfLesson },
                { name: "Fotógrafo ANS", role: "Video & Foto", img: IMAGES.surfGroup },
              ].map((person, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-coral shadow-lg mb-3">
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-display font-bold text-white text-sm">{person.name}</span>
                  <span className="text-coral text-xs font-body">{person.role}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ — Accordion style
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-20">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-ocean text-center mb-12">
              Preguntas Frecuentes
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm border border-sand/50 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-display font-bold text-ocean text-sm pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-coral shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 -mt-1">
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PERSONAL CTA — "Want to talk to someone?"
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 border-y border-sand/30">
        <div className="container max-w-2xl text-center">
          <p className="text-muted-foreground font-body mb-4">¿Tienes más preguntas? ¿Quieres hablar con alguien antes de reservar?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappCall}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ocean hover:text-coral font-display font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" /> Habla con Nuestro Equipo →
            </a>
            <span className="text-sand hidden sm:block">|</span>
            <span className="text-muted-foreground font-body text-sm">{WHATSAPP_NUMBER}</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BOOKING SUMMARY + FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-16">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-coral/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Details */}
              <div>
                <h3 className="font-display font-bold text-ocean text-xl mb-4">Resumen</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Masterclass", value: `#${mc.number} — ${mc.name}` },
                    { label: "Fecha", value: mc.date },
                    { label: "Horario", value: mc.schedule },
                    { label: "Nivel", value: mc.level },
                    { label: "Cupos", value: `${mc.capacity} personas máximo` },
                    { label: "Ubicación", value: "Playa Caracol, Punta Chame" },
                    { label: "Equipo", value: "Incluido" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-sand/30">
                      <span className="text-muted-foreground font-body">{row.label}</span>
                      <span className="font-semibold text-foreground font-body text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex flex-col justify-center items-center text-center">
                <span className="text-muted-foreground text-sm font-body mb-1">Precio por persona</span>
                <div className="font-display font-extrabold text-5xl text-ocean mb-6">${mc.price}</div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white py-4 rounded-md font-display font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Reservar Mi Cupo <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-muted-foreground text-xs mt-3 font-body">Cupos limitados. Reserva con anticipación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          UPSELL — Want more?
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14">
        <div className="container max-w-4xl">
          <h3 className="font-display text-xl font-bold text-ocean text-center mb-8">¿Quieres Más Que Un Día?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/surf-camps" className="group bg-foam rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-sand/50">
              <Waves className="w-6 h-6 text-coral mb-3" />
              <h4 className="font-display font-bold text-ocean group-hover:text-coral transition-colors">Surf Camps</h4>
              <p className="text-muted-foreground text-sm font-body mt-1">Fin de semana completo con alojamiento en Radisson Riviera, todas las comidas y surf intensivo.</p>
              <span className="text-coral text-sm font-display font-semibold mt-3 inline-block">Desde $550 →</span>
            </Link>
            <Link href="/retreats" className="group bg-foam rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-sand/50">
              <Star className="w-6 h-6 text-coral mb-3" />
              <h4 className="font-display font-bold text-ocean group-hover:text-coral transition-colors">Surf Retreats</h4>
              <p className="text-muted-foreground text-sm font-body mt-1">5 noches de inmersión total: surf diario, tours, pensión completa y la experiencia premium ANS.</p>
              <span className="text-coral text-sm font-display font-semibold mt-3 inline-block">Desde $1,150 →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NAVIGATION — Prev / Next Masterclass
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-8 border-t border-sand/30">
        <div className="container max-w-3xl">
          <div className="flex gap-4">
            {prevMc && (
              <Link href={`/masterclasses/${prevMc.slug}`} className="flex-1 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs text-muted-foreground block font-body">← Anterior</span>
                <span className="text-sm font-display font-semibold text-ocean">#{prevMc.number} {prevMc.name}</span>
              </Link>
            )}
            {nextMc && (
              <Link href={`/masterclasses/${nextMc.slug}`} className="flex-1 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-right">
                <span className="text-xs text-muted-foreground block font-body">Siguiente →</span>
                <span className="text-sm font-display font-semibold text-ocean">#{nextMc.number} {nextMc.name}</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA — Full width with aerial photo
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.heroAerial} alt="Playa Caracol desde el aire" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean/80" />
        </div>
        <div className="relative container text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">¿Listo para Dominar las Olas?</h2>
          <p className="text-white/70 font-body text-lg max-w-xl mx-auto mb-8">
            Reserva tu cupo en la Masterclass #{mc.number} y transforma tu surf en un solo día.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-md font-display font-bold text-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            RESERVAR MI CUPO <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
