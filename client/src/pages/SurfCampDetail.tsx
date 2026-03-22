// ANS Surf - Pacific Flow Design
// SurfCampDetail: Salty Souls-inspired storytelling landing page
// Structure: Hero → Quote → Chapter 1 (The Experience) → Photo Break → Chapter 2 (Who Is This For) →
// Quick Stats → Mid CTA → Chapter 3 (The Weekend) → Photo Grid → Chapter 4 (Radisson Riviera) →
// Chapter 5 (Gastronomy) → Included/Not Included → Meet Instructors → FAQ → Final CTA
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Calendar, Users, Check, X, MapPin, Hotel, Utensils,
  Camera, Star, Moon, Waves, Sun, Phone, ChevronDown, Compass, Coffee, Dumbbell
} from "lucide-react";
import { SURF_CAMPS, WHATSAPP_URL, WHATSAPP_NUMBER, LOCATION, IMAGES } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NotFound from "./NotFound";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const QUOTES = [
  { text: "El surf te enseña que la paciencia y la persistencia son las mejores herramientas.", author: "Kelly Slater" },
  { text: "No hay nada como un fin de semana en el agua para resetear el alma.", author: "Laird Hamilton" },
  { text: "El océano es un maestro silencioso que enseña a través de la experiencia.", author: "Gerry Lopez" },
  { text: "La vida es mejor cuando surfeas con amigos.", author: "Rob Machado" },
  { text: "El surf camp es donde los desconocidos se convierten en familia.", author: "Bethany Hamilton" },
  { text: "Cada ola que surfeas te acerca más a quien realmente eres.", author: "Tom Curren" },
  { text: "El mejor viaje es el que te transforma.", author: "Mark Twain" },
  { text: "No se trata de la ola perfecta, se trata de la experiencia perfecta.", author: "Tradición surfista" },
];

const GALLERY = [
  IMAGES.surfAction, IMAGES.surfLesson, IMAGES.surfGroup, IMAGES.surfGirls,
  IMAGES.chameWaves, IMAGES.surfSchool, IMAGES.surfKids, IMAGES.caracolBeach,
  IMAGES.beachAerial, IMAGES.surfSunset, IMAGES.radissonPool, IMAGES.ventoClub,
  IMAGES.radissonAerial, IMAGES.caracolAerial2, IMAGES.radissonFront, IMAGES.radissonLounge
];

const WHO_IS_THIS_FOR: Record<string, { title: string; description: string; traits: string[] }> = {
  "Principiantes": {
    title: "Para Ti Que Sueñas con Surfear",
    description: "Este camp es para ti si siempre quisiste aprender surf pero nunca tuviste un fin de semana completo para dedicarle. No necesitas experiencia — solo ganas. Llegarás sin saber nada y te irás surfeando olas reales, con video para probarlo.",
    traits: ["Nunca has surfeado o tienes muy poca experiencia", "Quieres un fin de semana diferente, lejos de la rutina", "Te atrae la idea de aprender algo nuevo en la playa", "Buscas una experiencia completa: surf, hotel, comida, comunidad"],
  },
  "Intermedios": {
    title: "Para Ti Que Quieres Romper la Meseta",
    description: "Ya te paras, ya remas, ya atrapas olas. Pero sientes que llevas meses haciendo lo mismo. Este camp está diseñado para darte ese empujón técnico que necesitas, con coaching intensivo, video análisis y un surfer invitado que ha estado exactamente donde tú estás.",
    traits: ["Surfeas pero sientes que no avanzas", "Quieres aprender maniobras nuevas", "Buscas feedback profesional detallado", "Quieres conocer surfistas de tu nivel"],
  },
  "Mixto": {
    title: "Para Todos los Que Aman el Océano",
    description: "No importa tu nivel. Este camp reúne a surfistas de todos los backgrounds en una experiencia compartida. Cada uno recibe coaching personalizado según su nivel, pero la experiencia — las comidas, las noches, la energía — es de todos.",
    traits: ["Quieres una experiencia grupal diversa", "Te gusta conocer gente nueva que comparte tu pasión", "Buscas un fin de semana completo de desconexión", "Valoras tanto el surf como la experiencia social"],
  },
  "Avanzados": {
    title: "Para Ti Que Vives en el Agua",
    description: "Surfeas regularmente y buscas llevar tu performance al siguiente nivel. Este camp es coaching intensivo con un surfer invitado de alto nivel, video análisis detallado y sesiones diseñadas para pulir tu técnica competitiva.",
    traits: ["Surfeas frecuentemente y tienes nivel sólido", "Buscas coaching de nivel competitivo", "Quieres video análisis profesional de tu surf", "Te interesa el networking con otros surfistas avanzados"],
  },
  "Todos": {
    title: "Para Toda la Familia ANS",
    description: "El último camp del año es para todos. Principiantes, intermedios, avanzados — todos juntos cerrando la temporada con la mejor energía. Es más que surf, es celebración.",
    traits: ["Quieres cerrar el año surfeando", "Buscas una experiencia de comunidad", "No importa tu nivel, solo tu actitud", "Quieres crear recuerdos inolvidables"],
  },
};

export default function SurfCampDetail() {
  const { slug } = useParams<{ slug: string }>();
  const camp = SURF_CAMPS.find((c) => c.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!camp) return <NotFound />;

  const campIndex = SURF_CAMPS.findIndex((c) => c.slug === slug);
  const prevCamp = campIndex > 0 ? SURF_CAMPS[campIndex - 1] : null;
  const nextCamp = campIndex < SURF_CAMPS.length - 1 ? SURF_CAMPS[campIndex + 1] : null;
  const quote = QUOTES[campIndex % QUOTES.length];
  const whoFor = WHO_IS_THIS_FOR[camp.level] || WHO_IS_THIS_FOR["Mixto"];
  const g = (offset: number) => GALLERY[(campIndex * 3 + offset) % GALLERY.length];

  const whatsappLink = `${WHATSAPP_URL}?text=Hola! Me interesa el Surf Camp %23${camp.number}: ${encodeURIComponent(camp.name)} (${encodeURIComponent(camp.dates)})`;
  const whatsappCall = `${WHATSAPP_URL}?text=Hola! Quisiera hablar con alguien sobre el Surf Camp %23${camp.number}`;

  const faqs = [
    { q: "¿Qué nivel necesito para este camp?", a: `Este camp es para nivel ${camp.level.toLowerCase()}. Si no estás seguro de tu nivel, escríbenos y te orientamos.` },
    { q: "¿Qué incluye el alojamiento?", a: "Incluye 1 noche en el Hotel Radisson Riviera (habitación doble compartida). El hotel cuenta con piscina, spa, restaurante y todas las amenidades de un resort de primera." },
    { q: "¿Qué pasa si llueve?", a: "El camp se realiza llueva o haga sol. El surf no se detiene por la lluvia. Solo en caso de condiciones extremas se ajusta el programa." },
    { q: "¿Puedo traer mi propia tabla?", a: "Sí, pero también proporcionamos tablas de alta calidad para todos los niveles sin costo adicional." },
    { q: "¿Cómo llego?", a: "Playa Caracol está a 1.5 horas de Ciudad de Panamá. Hay estacionamiento gratuito. Si necesitas transporte, podemos coordinarlo." },
    { q: "¿Puedo cancelar?", a: "Sí. Cancelación gratuita hasta 72 horas antes. También puedes transferir tu cupo a otra persona." },
    { q: "¿Quién es el surfer invitado?", a: "Cada camp cuenta con un surfer invitado relevante del área. Los anunciamos 2 semanas antes del evento en nuestras redes sociales." },
  ];

  return (
    <div className="min-h-screen bg-foam">
      <Navbar />
      <Breadcrumbs crumbs={[
        { label: "Surf Camps", href: "/surf-camps" },
        { label: `#${camp.number} ${camp.name}` },
      ]} />
      <StickyCTA label={`Camp #${camp.number}: ${camp.name}`} price={camp.price} whatsappLink={whatsappLink} />

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={camp.image} alt={camp.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean via-ocean/60 to-ocean/20" />
        </div>
        <div className="relative container pb-12 pt-32">
          <Link href="/surf-camps" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm font-body mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Todos los Surf Camps
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-coral text-white text-sm font-display font-bold px-3 py-1 rounded">Camp #{camp.number}</span>
            <span className="bg-white/15 text-white text-sm font-display px-3 py-1 rounded">{camp.level}</span>
            <span className="bg-white/15 text-white text-sm font-display px-3 py-1 rounded">{camp.highlight}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-[1.05]">{camp.name}</h1>
          <p className="text-white/80 font-body text-lg sm:text-xl max-w-2xl mb-6">{camp.description}</p>

          <div className="flex flex-wrap gap-5 text-white/70 text-sm font-body mb-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-coral" /> {camp.dates}</span>
            <span className="flex items-center gap-1.5"><Moon className="w-4 h-4 text-coral" /> 2 días, 1 noche</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-coral" /> Máximo {camp.capacity} personas</span>
            <span className="flex items-center gap-1.5"><Hotel className="w-4 h-4 text-coral" /> Radisson Riviera</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-md font-display font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Reservar Mi Cupo — ${camp.price} <ArrowRight className="w-5 h-5" />
            </a>
            <a href={whatsappCall} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-6 py-4 rounded-md font-display font-semibold transition-all">
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
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white italic leading-relaxed">"{quote.text}"</p>
            <cite className="block mt-4 text-coral font-body text-sm not-italic tracking-wider uppercase">— {quote.author}</cite>
          </motion.blockquote>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 1: THE EXPERIENCE — Split photo + text
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div variants={fadeUp} className="relative">
                <img src={g(0)} alt="Surf Camp experience" className="w-full h-[500px] object-cover rounded-lg shadow-xl" />
                <div className="absolute -bottom-6 -right-6 bg-coral text-white p-4 rounded-lg shadow-lg hidden lg:block">
                  <Hotel className="w-6 h-6 mb-1" />
                  <span className="font-display font-bold text-sm block">Radisson Riviera</span>
                  <span className="text-white/80 text-xs">1 noche incluida</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 1</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">La Experiencia</h2>
                <p className="text-foreground font-body text-lg leading-relaxed mb-6">
                  Un fin de semana completo de inmersión en el surf. Desde el viernes por la tarde hasta el domingo, vivirás la experiencia ANS en su máxima expresión: surf intensivo con un surfer invitado de renombre, alojamiento en el Hotel Radisson Riviera, todas las comidas en Vento Beach Club, y la mejor comunidad de surf de Panamá.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Imagínate despertar en un hotel frente al mar, desayunar con vista al Pacífico, caminar a la playa y encontrar a tu instructor esperándote con las tablas listas. Surfeas toda la mañana, almuerzas con el grupo en el restaurante del resort, y por la tarde revisas tu video con el surfer invitado que te da tips que normalmente solo comparte en competencia. Así es un Surf Camp ANS.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  No es solo un curso de surf. Es un fin de semana donde todo está pensado para que solo te preocupes por una cosa: mejorar tu surf y disfrutar el proceso.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-sand/50">
                    <Waves className="w-6 h-6 text-coral mb-3" />
                    <h4 className="font-display font-bold text-ocean text-sm">4 Sesiones de Surf</h4>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">2 horas cada sesión, 2 por día, con coaching personalizado.</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-sand/50">
                    <Star className="w-6 h-6 text-coral mb-3" />
                    <h4 className="font-display font-bold text-ocean text-sm">Surfer Invitado</h4>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">Un surfista relevante del área comparte su experiencia contigo.</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-sand/50">
                    <Camera className="w-6 h-6 text-coral mb-3" />
                    <h4 className="font-display font-bold text-ocean text-sm">Video + Fotos</h4>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">Video análisis personal + fotografía profesional incluida.</p>
                  </div>
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-sand/50">
                    <Hotel className="w-6 h-6 text-coral mb-3" />
                    <h4 className="font-display font-bold text-ocean text-sm">Todo Incluido</h4>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">Hotel, desayunos, almuerzos, cena, snacks y bebidas.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FULL-WIDTH PHOTO BREAK */}
      <section className="grid grid-cols-3 h-[250px] sm:h-[300px]">
        <img src={g(1)} alt="Surf lifestyle" className="w-full h-full object-cover" />
        <img src={g(2)} alt="Camp vibes" className="w-full h-full object-cover" />
        <img src={g(3)} alt="Community" className="w-full h-full object-cover" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 2: WHO IS THIS FOR
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeUp}>
              <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 2</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">{whoFor.title}</h2>
              <p className="text-foreground font-body text-lg leading-relaxed mb-10">{whoFor.description}</p>
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

      {/* QUICK STATS */}
      <section className="bg-foam py-12 border-y border-sand/30">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            {[
              { icon: <Users className="w-7 h-7" />, label: "Grupo", value: `${camp.capacity} máx` },
              { icon: <Moon className="w-7 h-7" />, label: "Duración", value: "2 días, 1 noche" },
              { icon: <Star className="w-7 h-7" />, label: "Nivel", value: camp.level },
              { icon: <Compass className="w-7 h-7" />, label: "Equipo", value: "Incluido" },
              { icon: <Hotel className="w-7 h-7" />, label: "Hotel", value: "Radisson Riviera" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center gap-2">
                <div className="text-coral">{stat.icon}</div>
                <span className="font-display font-bold text-ocean text-base">{stat.value}</span>
                <span className="text-muted-foreground text-xs font-body uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.chameWaves} alt="Olas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean/85" />
        </div>
        <div className="relative container text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">Un Fin de Semana Que Cambia Todo.</h3>
          <p className="text-white/70 font-body text-lg max-w-xl mx-auto mb-8">Solo {camp.capacity} cupos. Surf, hotel, comidas, comunidad — todo incluido por ${camp.price}.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-md font-display font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Reservar Ahora <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 3: THE WEEKEND — Two-day schedule
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 3</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2">Tu Fin de Semana</h2>
              <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">Dos días diseñados para maximizar tu tiempo en el agua y tu experiencia fuera de ella.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Saturday */}
              <motion.div variants={fadeUp} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center text-white font-display font-bold text-sm">S</div>
                  <div>
                    <h3 className="font-display font-bold text-ocean">Sábado</h3>
                    <p className="text-muted-foreground text-xs font-body">Día completo de inmersión</p>
                  </div>
                </div>
                <div className="space-y-0">
                  {camp.saturdaySchedule.map((item, i) => (
                    <div key={i} className={`flex gap-3 py-3 ${i < camp.saturdaySchedule.length - 1 ? "border-b border-sand/30" : ""}`}>
                      <span className="w-16 shrink-0 font-display font-bold text-coral text-xs">{item.time}</span>
                      <span className="text-foreground font-body text-sm">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Sunday */}
              <motion.div variants={fadeUp} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-ocean flex items-center justify-center text-white font-display font-bold text-sm">D</div>
                  <div>
                    <h3 className="font-display font-bold text-ocean">Domingo</h3>
                    <p className="text-muted-foreground text-xs font-body">Cierre y certificación</p>
                  </div>
                </div>
                <div className="space-y-0">
                  {camp.sundaySchedule.map((item, i) => (
                    <div key={i} className={`flex gap-3 py-3 ${i < camp.sundaySchedule.length - 1 ? "border-b border-sand/30" : ""}`}>
                      <span className="w-16 shrink-0 font-display font-bold text-coral text-xs">{item.time}</span>
                      <span className="text-foreground font-body text-sm">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="grid grid-cols-2 md:grid-cols-4 h-[200px] sm:h-[280px]">
        <img src={g(4)} alt="Lifestyle" className="w-full h-full object-cover" />
        <img src={g(5)} alt="Lifestyle" className="w-full h-full object-cover" />
        <img src={g(6)} alt="Lifestyle" className="w-full h-full object-cover hidden md:block" />
        <img src={g(7)} alt="Lifestyle" className="w-full h-full object-cover hidden md:block" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 4: RADISSON RIVIERA — Where you stay
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div variants={fadeUp} className="order-2 lg:order-1">
                <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 4</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">Tu Casa Este Fin de Semana</h2>
                <p className="text-foreground font-body text-lg leading-relaxed mb-6">
                  El Hotel Radisson Riviera en Playa Caracol es mucho más que un lugar para dormir. Es donde tu experiencia de surf se convierte en una experiencia de resort completa.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Habitaciones con vista al mar, piscina infinita frente al Pacífico, restaurante Vento Beach Club con gastronomía de primer nivel, y la playa literalmente a tus pies. Después de un día intenso de surf, no hay mejor lugar para recargar energías.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {["Habitación doble con A/C", "Piscina infinita", "Restaurante Vento", "WiFi incluido", "Estacionamiento", "Acceso a la playa"].map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-foreground font-body">
                      <Check className="w-4 h-4 text-coral shrink-0" /> {amenity}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="order-1 lg:order-2 space-y-4">
                <img src={IMAGES.radissonPool} alt="Piscina Radisson Riviera" className="w-full h-[300px] object-cover rounded-lg shadow-xl" />
                <div className="grid grid-cols-2 gap-4">
                  <img src={IMAGES.radissonAerial} alt="Radisson aéreo" className="w-full h-[180px] object-cover rounded-lg shadow-md" />
                  <img src={IMAGES.radissonLounge} alt="Radisson lounge" className="w-full h-[180px] object-cover rounded-lg shadow-md" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 5: GASTRONOMY — Vento Beach Club
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div variants={fadeUp}>
                <img src={IMAGES.ventoClub} alt="Vento Beach Club" className="w-full h-[400px] object-cover rounded-lg shadow-xl" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 5</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">La Gastronomía</h2>
                <p className="text-foreground font-body text-lg leading-relaxed mb-6">
                  Todas tus comidas están incluidas en Vento Beach Club, el restaurante del resort Playa Caracol. Desayunos energéticos antes de surfear, almuerzos completos después de las sesiones, y una cena grupal el sábado por la noche.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La gastronomía es parte integral de la experiencia. No es un "almuerzo rápido" — es sentarte con tu grupo, compartir las historias del día, reírte de las caídas y celebrar las olas que atrapaste. Todo frente al mar.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: <Coffee className="w-5 h-5" />, meal: "Desayunos", desc: "Sábado y domingo — energía para surfear" },
                    { icon: <Utensils className="w-5 h-5" />, meal: "Almuerzos", desc: "Sábado y domingo — menú completo" },
                    { icon: <Moon className="w-5 h-5" />, meal: "Cena Grupal", desc: "Sábado noche — la mejor del fin de semana" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-coral">{item.icon}</div>
                      <div>
                        <span className="font-display font-bold text-ocean text-sm">{item.meal}</span>
                        <p className="text-muted-foreground text-xs font-body">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INCLUDED / NOT INCLUDED
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-ocean text-center mb-12">¿Qué Incluye Tu Surf Camp?</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="bg-foam rounded-lg p-8 shadow-sm border border-sand/50">
                <h3 className="font-display font-bold text-ocean text-lg mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"><Check className="w-4 h-4 text-green-600" /></div>
                  Incluido
                </h3>
                <div className="space-y-3">
                  {camp.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-foreground font-body text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-foam rounded-lg p-8 shadow-sm border border-sand/50">
                <h3 className="font-display font-bold text-ocean text-lg mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center"><X className="w-4 h-4 text-red-400" /></div>
                  No Incluido
                </h3>
                <div className="space-y-3">
                  {["Transporte hasta Playa Caracol", "Bebidas alcohólicas", "Seguro de viaje personal", "Propinas (opcionales)"].map((item, i) => (
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

      {/* MEET INSTRUCTORS */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.beachAerial} alt="Playa Caracol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean/90" />
        </div>
        <div className="relative container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <h2 className="font-display text-3xl font-bold text-white mb-3">Conoce a Tu Equipo</h2>
              <p className="text-white/70 font-body max-w-xl mx-auto mb-12">Instructores certificados ISA + un surfer invitado de renombre en cada camp.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { name: "Head Coach", role: "Instructor ISA", img: IMAGES.surfAction },
                { name: "Surfer Invitado", role: "Guest Pro", img: IMAGES.surfLesson },
                { name: "Asistente", role: "Coach Jr.", img: IMAGES.surfGroup },
                { name: "Fotógrafo", role: "Video & Foto", img: IMAGES.surfGirls },
              ].map((person, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-coral shadow-lg mb-3">
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

      {/* FAQ */}
      <section className="bg-foam py-20">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-ocean text-center mb-12">Preguntas Frecuentes</motion.h2>
            <motion.div variants={fadeUp} className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm border border-sand/50 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
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

      {/* PERSONAL CTA */}
      <section className="bg-white py-12 border-y border-sand/30">
        <div className="container max-w-2xl text-center">
          <p className="text-muted-foreground font-body mb-4">¿Tienes más preguntas? ¿Quieres hablar con alguien antes de reservar?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={whatsappCall} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ocean hover:text-coral font-display font-semibold transition-colors">
              <Phone className="w-4 h-4" /> Habla con Nuestro Equipo →
            </a>
            <span className="text-sand hidden sm:block">|</span>
            <span className="text-muted-foreground font-body text-sm">{WHATSAPP_NUMBER}</span>
          </div>
        </div>
      </section>

      {/* BOOKING SUMMARY */}
      <section className="bg-foam py-16">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-coral/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-bold text-ocean text-xl mb-4">Resumen</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Surf Camp", value: `#${camp.number} — ${camp.name}` },
                    { label: "Fechas", value: camp.dates },
                    { label: "Nivel", value: camp.level },
                    { label: "Cupos", value: `${camp.capacity} personas máximo` },
                    { label: "Hotel", value: "Radisson Riviera (1 noche)" },
                    { label: "Comidas", value: "2 desayunos, 2 almuerzos, 1 cena" },
                    { label: "Equipo", value: "Incluido" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-sand/30">
                      <span className="text-muted-foreground font-body">{row.label}</span>
                      <span className="font-semibold text-foreground font-body text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <span className="text-muted-foreground text-sm font-body mb-1">Precio por persona</span>
                <div className="font-display font-extrabold text-5xl text-ocean mb-6">${camp.price}</div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white py-4 rounded-md font-display font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Reservar Mi Cupo <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-muted-foreground text-xs mt-3 font-body">Cupos limitados. Reserva con anticipación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPSELL */}
      <section className="bg-white py-14">
        <div className="container max-w-4xl">
          <h3 className="font-display text-xl font-bold text-ocean text-center mb-8">¿Quieres la Experiencia Completa?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/masterclasses" className="group bg-foam rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-sand/50">
              <Waves className="w-6 h-6 text-coral mb-3" />
              <h4 className="font-display font-bold text-ocean group-hover:text-coral transition-colors">Masterclasses</h4>
              <p className="text-muted-foreground text-sm font-body mt-1">Sesiones de un día enfocadas en técnicas específicas. Perfecto para complementar tu camp.</p>
              <span className="text-coral text-sm font-display font-semibold mt-3 inline-block">Desde $175 →</span>
            </Link>
            <Link href="/retreats" className="group bg-foam rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-sand/50">
              <Star className="w-6 h-6 text-coral mb-3" />
              <h4 className="font-display font-bold text-ocean group-hover:text-coral transition-colors">Surf Retreats</h4>
              <p className="text-muted-foreground text-sm font-body mt-1">5 noches de inmersión total: surf diario, tours a islas, pensión completa y la experiencia premium.</p>
              <span className="text-coral text-sm font-display font-semibold mt-3 inline-block">Desde $1,150 →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="bg-foam py-8 border-t border-sand/30">
        <div className="container max-w-3xl">
          <div className="flex gap-4">
            {prevCamp && (
              <Link href={`/surf-camps/${prevCamp.slug}`} className="flex-1 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs text-muted-foreground block font-body">← Anterior</span>
                <span className="text-sm font-display font-semibold text-ocean">#{prevCamp.number} {prevCamp.name}</span>
              </Link>
            )}
            {nextCamp && (
              <Link href={`/surf-camps/${nextCamp.slug}`} className="flex-1 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-right">
                <span className="text-xs text-muted-foreground block font-body">Siguiente →</span>
                <span className="text-sm font-display font-semibold text-ocean">#{nextCamp.number} {nextCamp.name}</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.heroAerial} alt="Playa Caracol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean/80" />
        </div>
        <div className="relative container text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">Tu Fin de Semana Te Espera.</h2>
          <p className="text-white/70 font-body text-lg max-w-xl mx-auto mb-8">
            Surf, hotel, comidas, comunidad. Todo incluido. Solo {camp.capacity} cupos.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-md font-display font-bold text-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            RESERVAR MI CUPO <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
