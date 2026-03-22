// ANS Surf - Pacific Flow Design
// RetreatDetail: Salty Souls-inspired premium storytelling landing page
// Structure: Hero → Quote → Chapter 1 (The Transformation) → Photo Break → Chapter 2 (Who Is This For) →
// Quick Stats → Mid CTA → Chapter 3 (Your Week) → Photo Grid → Chapter 4 (Radisson Riviera) →
// Chapter 5 (Gastronomy) → Chapter 6 (Beyond Surf) → Included/Not Included → Meet Team → FAQ → Final CTA
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Calendar, Users, Check, X, Hotel, Utensils,
  Camera, Star, Moon, Waves, Sun, Phone, ChevronDown, Compass, Coffee,
  Heart, Sparkles, Anchor
} from "lucide-react";
import { SURF_RETREATS, WHATSAPP_URL, WHATSAPP_NUMBER, LOCATION, IMAGES } from "@/lib/data";
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
  { text: "El viaje de mil millas comienza con un solo paso. El tuyo comienza con una ola.", author: "Lao Tzu, adaptado" },
  { text: "No se trata de encontrarte a ti mismo. Se trata de crearte a ti mismo. Y el océano es el mejor taller.", author: "George Bernard Shaw, adaptado" },
];

const GALLERY = [
  IMAGES.surfAction, IMAGES.surfLesson, IMAGES.surfGroup, IMAGES.surfGirls,
  IMAGES.chameWaves, IMAGES.surfSchool, IMAGES.surfKids, IMAGES.caracolBeach,
  IMAGES.beachAerial, IMAGES.surfSunset, IMAGES.radissonPool, IMAGES.ventoClub,
  IMAGES.radissonAerial, IMAGES.caracolAerial2, IMAGES.radissonFront, IMAGES.radissonLounge
];

export default function RetreatDetail() {
  const { slug } = useParams<{ slug: string }>();
  const retreat = SURF_RETREATS.find((r) => r.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!retreat) return <NotFound />;

  const retreatIndex = SURF_RETREATS.findIndex((r) => r.slug === slug);
  const otherRetreat = SURF_RETREATS.find((r) => r.slug !== slug);
  const quote = QUOTES[retreatIndex % QUOTES.length];
  const g = (offset: number) => GALLERY[(retreatIndex * 5 + offset) % GALLERY.length];

  const whatsappLink = `${WHATSAPP_URL}?text=Hola! Me interesa el Surf Retreat: ${encodeURIComponent(retreat.name)} (${encodeURIComponent(retreat.dates)})`;
  const whatsappCall = `${WHATSAPP_URL}?text=Hola! Quisiera hablar con alguien sobre el Surf Retreat: ${encodeURIComponent(retreat.name)}`;

  const faqs = [
    { q: "¿Qué nivel de surf necesito?", a: "Este retreat es para todos los niveles. Si no estás seguro, escríbenos y te orientamos. Lo importante es tener ganas de aprender y disfrutar." },
    { q: "¿Puedo ir solo/a?", a: "¡Claro! La mayoría de nuestros participantes vienen solos. Es una de las mejores formas de conocer gente increíble que comparte tu pasión por el surf y la aventura." },
    { q: "¿Qué tipo de habitación incluye?", a: "Habitación doble en el Hotel Radisson Riviera con vista al mar, aire acondicionado, baño privado y todas las amenidades del resort. Si deseas habitación individual, consulta el suplemento." },
    { q: "¿Qué pasa si no puedo surfear algún día?", a: "El programa es flexible. Si algún día prefieres descansar, puedes disfrutar de la piscina, el spa, o simplemente relajarte en la playa. No hay presión." },
    { q: "¿Están incluidos los tours?", a: "Sí. El retreat incluye excursiones a islas y otras actividades según la temporada. Todo está coordinado para que solo te preocupes por disfrutar." },
    { q: "¿Cómo llego a Playa Caracol?", a: "Está a 1.5 horas de Ciudad de Panamá. El transporte está incluido en el retreat. También puedes llegar en auto propio con estacionamiento gratuito." },
    { q: "¿Puedo cancelar?", a: "Cancelación gratuita hasta 14 días antes. Entre 14 y 7 días, se retiene el 50%. Menos de 7 días, no hay reembolso. Puedes transferir tu cupo a otra persona en cualquier momento." },
    { q: "¿Hay opciones vegetarianas/veganas?", a: "Sí. Vento Beach Club ofrece opciones para todas las dietas. Indícanos tus restricciones alimentarias al reservar y nos aseguramos de que cada comida sea perfecta para ti." },
  ];

  return (
    <div className="min-h-screen bg-foam">
      <Navbar />
      <Breadcrumbs crumbs={[
        { label: "Retreats", href: "/retreats" },
        { label: retreat.name },
      ]} />
      <StickyCTA label={retreat.name} price={retreat.price} whatsappLink={whatsappLink} />

      {/* ═══════════════════════════════════════════════════════════
          HERO - Premium full-screen immersive
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={retreat.image} alt={retreat.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean via-ocean/50 to-transparent" />
        </div>
        <div className="relative container pb-14 pt-32">
          <Link href="/retreats" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm font-body mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Todos los Retreats
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-coral text-white text-sm font-display font-bold px-3 py-1 rounded">Surf Retreat</span>
            <span className="bg-white/15 text-white text-sm font-display px-3 py-1 rounded">{retreat.nights} Noches</span>
            <span className="bg-white/15 text-white text-sm font-display px-3 py-1 rounded flex items-center gap-1"><Star className="w-3 h-3" /> Experiencia Premium</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-[1.05]">{retreat.name}</h1>
          <p className="text-white/80 font-body text-lg sm:text-xl max-w-3xl mb-8">{retreat.description}</p>

          <div className="flex flex-wrap gap-5 text-white/70 text-sm font-body mb-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-coral" /> {retreat.dates}</span>
            <span className="flex items-center gap-1.5"><Moon className="w-4 h-4 text-coral" /> {retreat.nights} noches, {retreat.days} días</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-coral" /> Máximo {retreat.capacity} personas</span>
            <span className="flex items-center gap-1.5"><Hotel className="w-4 h-4 text-coral" /> Radisson Riviera</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-md font-display font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Reservar Mi Lugar — ${retreat.price.toLocaleString()} <ArrowRight className="w-5 h-5" />
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
      <section className="bg-ocean py-16">
        <div className="container text-center">
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white italic leading-relaxed">"{quote.text}"</p>
            <cite className="block mt-4 text-coral font-body text-sm not-italic tracking-wider uppercase">— {quote.author}</cite>
          </motion.blockquote>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 1: THE TRANSFORMATION
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div variants={fadeUp} className="relative">
                <img src={g(0)} alt="Surf retreat experience" className="w-full h-[520px] object-cover rounded-lg shadow-xl" />
                <div className="absolute -bottom-6 -right-6 bg-coral text-white p-5 rounded-lg shadow-lg hidden lg:block">
                  <Sparkles className="w-6 h-6 mb-1" />
                  <span className="font-display font-bold text-sm block">Experiencia Premium</span>
                  <span className="text-white/80 text-xs">{retreat.nights} noches all-inclusive</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 1</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">Más Que Un Viaje de Surf</h2>
                <p className="text-foreground font-body text-lg leading-relaxed mb-6">
                  Un Surf Retreat ANS no es un curso de surf con hotel. Es una experiencia transformacional de {retreat.nights} noches donde el surf es el vehículo, pero el destino eres tú. Cada día está diseñado para que crezcas como surfista, como persona, y como parte de una comunidad que comparte tu pasión.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Imagínate despertar cada mañana en el Hotel Radisson Riviera, con el sonido de las olas como despertador. Desayuno con vista al Pacífico. Surf con instructores que conocen cada corriente de Playa Caracol. Almuerzo gourmet en Vento Beach Club. Excursiones a islas vírgenes. Cenas bajo las estrellas. Y al final de cada día, la satisfacción de saber que estás viviendo algo único.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  "{retreat.mission}"
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: <Waves className="w-5 h-5" />, label: "Surf Diario" },
                    { icon: <Utensils className="w-5 h-5" />, label: "Pensión Completa" },
                    { icon: <Anchor className="w-5 h-5" />, label: "Tours a Islas" },
                    { icon: <Camera className="w-5 h-5" />, label: "Video & Fotos" },
                    { icon: <Star className="w-5 h-5" />, label: "Surfer Invitado" },
                    { icon: <Hotel className="w-5 h-5" />, label: `${retreat.nights} Noches Hotel` },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-sand/50 text-center">
                      <div className="text-coral flex justify-center mb-2">{item.icon}</div>
                      <span className="font-display font-bold text-ocean text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FULL-WIDTH PHOTO BREAK */}
      <section className="grid grid-cols-3 h-[280px] sm:h-[350px]">
        <img src={g(1)} alt="Retreat vibes" className="w-full h-full object-cover" />
        <img src={g(2)} alt="Nature" className="w-full h-full object-cover" />
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
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">¿Es Este Retreat Para Ti?</h2>
              <p className="text-foreground font-body text-lg leading-relaxed mb-4">
                Este retreat es para ti si buscas más que vacaciones. Si quieres una semana que te devuelva la energía, te conecte con la naturaleza, y te deje con habilidades nuevas y amistades para toda la vida.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-10">
                No necesitas ser un surfista experto. Necesitas tener ganas de vivir algo diferente. De soltar el teléfono, meter los pies en la arena, y dejarte llevar por el ritmo del océano durante {retreat.nights} días.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
              {[
                "Buscas una experiencia transformacional, no solo vacaciones",
                "Quieres aprender surf o mejorar tu técnica en un entorno premium",
                "Valoras el bienestar: buena comida, descanso, naturaleza",
                "Te emociona la idea de explorar islas, cascadas y naturaleza",
                "Quieres desconectar de la rutina y reconectar contigo",
                "Buscas conocer personas con tu misma energía",
              ].map((trait, i) => (
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
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 text-center">
            {[
              { icon: <Moon className="w-6 h-6" />, label: "Noches", value: String(retreat.nights) },
              { icon: <Users className="w-6 h-6" />, label: "Grupo", value: `${retreat.capacity} máx` },
              { icon: <Waves className="w-6 h-6" />, label: "Sesiones Surf", value: `${retreat.days - 1}` },
              { icon: <Utensils className="w-6 h-6" />, label: "Comidas", value: `${retreat.nights * 3}` },
              { icon: <Compass className="w-6 h-6" />, label: "Tours", value: "2+" },
              { icon: <Star className="w-6 h-6" />, label: "Pro Surfer", value: "Incluido" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex flex-col items-center gap-1.5">
                <div className="text-coral">{stat.icon}</div>
                <span className="font-display font-bold text-ocean text-base">{stat.value}</span>
                <span className="text-muted-foreground text-[10px] font-body uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.surfSunset} alt="Sunset surf" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean/80" />
        </div>
        <div className="relative container text-center">
          <h3 className="font-display text-2xl sm:text-4xl font-bold text-white mb-3">{retreat.nights} Noches. Una Transformación.</h3>
          <p className="text-white/70 font-body text-lg max-w-xl mx-auto mb-8">
            Surf, tours, pensión completa en Radisson Riviera. Solo {retreat.capacity} lugares.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-md font-display font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Reservar Mi Lugar — ${retreat.price.toLocaleString()} <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 3: YOUR WEEK — Day by day
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 3</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2">Tu Semana</h2>
              <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">Cada día es una aventura diferente. Aquí tienes un vistazo a lo que te espera.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {retreat.dailySchedule.map((day, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white rounded-lg p-5 shadow-sm border border-sand/50 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center text-white font-display font-bold text-sm">
                      {day.day.replace("Día ", "D")}
                    </div>
                    <h4 className="font-display font-bold text-ocean text-sm">{day.day}</h4>
                  </div>
                  <div className="space-y-2">
                    {day.morning && (
                      <div className="flex items-start gap-2 text-xs font-body text-foreground">
                        <Sun className="w-3.5 h-3.5 text-coral shrink-0 mt-0.5" />
                        <span><strong className="text-ocean">Mañana:</strong> {day.morning}</span>
                      </div>
                    )}
                    {day.afternoon && (
                      <div className="flex items-start gap-2 text-xs font-body text-foreground">
                        <Compass className="w-3.5 h-3.5 text-coral shrink-0 mt-0.5" />
                        <span><strong className="text-ocean">Tarde:</strong> {day.afternoon}</span>
                      </div>
                    )}
                    {day.evening && (
                      <div className="flex items-start gap-2 text-xs font-body text-foreground">
                        <Moon className="w-3.5 h-3.5 text-coral shrink-0 mt-0.5" />
                        <span><strong className="text-ocean">Noche:</strong> {day.evening}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="grid grid-cols-2 md:grid-cols-4 h-[220px] sm:h-[300px]">
        <img src={g(4)} alt="Retreat life" className="w-full h-full object-cover" />
        <img src={g(5)} alt="Nature" className="w-full h-full object-cover" />
        <img src={g(6)} alt="Surf" className="w-full h-full object-cover hidden md:block" />
        <img src={g(7)} alt="Community" className="w-full h-full object-cover hidden md:block" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 4: RADISSON RIVIERA
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div variants={fadeUp} className="order-2 lg:order-1">
                <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 4</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">Tu Hogar Esta Semana</h2>
                <p className="text-foreground font-body text-lg leading-relaxed mb-6">
                  El Hotel Radisson Riviera en Playa Caracol es tu base durante los {retreat.nights} días del retreat. Habitaciones con vista al mar, piscina infinita frente al Pacífico, acceso directo a la playa, y todas las amenidades de un resort de primera clase.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Después de cada sesión de surf, vuelves a un lugar donde todo está pensado para tu descanso y recuperación. La piscina para relajar los músculos. El restaurante para una comida que te recarga. Y tu habitación con la brisa del mar entrando por la ventana.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  No es camping. No es un hostel. Es un resort de verdad, porque creemos que la experiencia premium no termina cuando sales del agua.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {["Habitación con vista al mar", "Piscina infinita", "Restaurante Vento", "WiFi de alta velocidad", "Acceso directo a la playa", "Aire acondicionado", "Room service", "Estacionamiento gratuito"].map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-foreground font-body">
                      <Check className="w-4 h-4 text-coral shrink-0" /> {amenity}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="order-1 lg:order-2 space-y-4">
                <img src={IMAGES.radissonPool} alt="Piscina Radisson Riviera" className="w-full h-[320px] object-cover rounded-lg shadow-xl" />
                <div className="grid grid-cols-2 gap-4">
                  <img src={IMAGES.radissonAerial} alt="Radisson aéreo" className="w-full h-[180px] object-cover rounded-lg shadow-md" />
                  <img src={IMAGES.radissonFront} alt="Radisson entrada" className="w-full h-[180px] object-cover rounded-lg shadow-md" />
                </div>
                <img src={IMAGES.radissonLounge} alt="Radisson lounge" className="w-full h-[200px] object-cover rounded-lg shadow-md" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHAPTER 5: GASTRONOMY
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div variants={fadeUp}>
                <img src={IMAGES.ventoClub} alt="Vento Beach Club" className="w-full h-[420px] object-cover rounded-lg shadow-xl" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 5</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2 mb-6">Pensión Completa</h2>
                <p className="text-foreground font-body text-lg leading-relaxed mb-6">
                  Todas tus comidas están incluidas. Desde el desayuno energético antes del surf hasta la cena de despedida bajo las estrellas. Vento Beach Club es el corazón gastronómico de tu retreat.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La comida no es un detalle menor — es parte fundamental de la experiencia. Menús diseñados para surfistas: nutritivos, variados, deliciosos. Con opciones para todas las dietas y restricciones alimentarias. Y siempre con la mejor vista del Pacífico.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: <Sun className="w-5 h-5" />, meal: "Desayunos", desc: "Energéticos y variados — frutas, proteínas, jugos naturales" },
                    { icon: <Coffee className="w-5 h-5" />, meal: "Snacks & Hidratación", desc: "Frutas, barras, agua y bebidas durante todo el día" },
                    { icon: <Utensils className="w-5 h-5" />, meal: "Almuerzos", desc: "Menú completo post-surf con opciones para todos" },
                    { icon: <Moon className="w-5 h-5" />, meal: "Cenas", desc: "Gastronomía de resort con noches temáticas especiales" },
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
          CHAPTER 6: BEYOND SURF — Tours & Adventures
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-coral text-xs font-display font-semibold uppercase tracking-[0.2em]">Capítulo 6</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ocean mt-2">Más Allá del Surf</h2>
              <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">El retreat incluye experiencias que complementan tu transformación.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="text-center">
                <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <Anchor className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-display font-bold text-ocean text-lg mb-3">Tours a Islas</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Excursiones a Isla Otoque y otras islas vírgenes del Golfo de Panamá. Snorkel, playas desiertas, y la sensación de estar en el paraíso. Incluye transporte en bote y almuerzo.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-display font-bold text-ocean text-lg mb-3">Jet Ski & Aventura</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Tour en jet ski por la costa de Playa Caracol. Adrenalina pura con vistas increíbles del Pacífico panameño. Una experiencia que complementa perfectamente el surf.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-display font-bold text-ocean text-lg mb-3">Comunidad & Conexión</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Cenas grupales, fogatas en la playa, y momentos compartidos que crean lazos para toda la vida. El surfer invitado te acompaña durante todo el retreat, no solo en el agua.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHOTO BREAK */}
      <section className="grid grid-cols-3 h-[250px] sm:h-[300px]">
        <img src={g(8)} alt="Retreat" className="w-full h-full object-cover" />
        <img src={IMAGES.caracolBeach} alt="Playa Caracol" className="w-full h-full object-cover" />
        <img src={g(10)} alt="Lifestyle" className="w-full h-full object-cover" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INCLUDED / NOT INCLUDED
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-ocean text-center mb-12">¿Qué Incluye Tu Retreat?</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="bg-white rounded-lg p-8 shadow-sm border border-sand/50">
                <h3 className="font-display font-bold text-ocean text-lg mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"><Check className="w-4 h-4 text-green-600" /></div>
                  Todo Incluido
                </h3>
                <div className="space-y-3">
                  {retreat.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-foreground font-body text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white rounded-lg p-8 shadow-sm border border-sand/50">
                <h3 className="font-display font-bold text-ocean text-lg mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center"><X className="w-4 h-4 text-red-400" /></div>
                  No Incluido
                </h3>
                <div className="space-y-3">
                  {["Vuelos internacionales", "Bebidas alcohólicas premium", "Seguro de viaje personal", "Suplemento habitación individual (consultar)", "Propinas (opcionales)"].map((item, i) => (
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

      {/* MEET THE TEAM */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.beachAerial} alt="Playa Caracol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean/90" />
        </div>
        <div className="relative container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <h2 className="font-display text-3xl font-bold text-white mb-3">Tu Equipo de Retreat</h2>
              <p className="text-white/70 font-body max-w-xl mx-auto mb-12">Un equipo dedicado a que tu experiencia sea inolvidable.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { name: "Head Coach", role: "Surf Lead ISA", img: IMAGES.surfAction },
                { name: retreat.surferInvitado, role: "Guest Pro Surfer", img: IMAGES.surfLesson },
                { name: "Fotógrafo", role: "Video & Foto", img: IMAGES.surfGroup },
                { name: "Coordinador", role: "Logistics & Tours", img: IMAGES.surfSchool },
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
                    { label: "Retreat", value: retreat.name },
                    { label: "Fechas", value: retreat.dates },
                    { label: "Duración", value: `${retreat.nights} noches, ${retreat.days} días` },
                    { label: "Cupos", value: `${retreat.capacity} personas máximo` },
                    { label: "Hotel", value: `Radisson Riviera (${retreat.nights} noches)` },
                    { label: "Comidas", value: "Pensión completa" },
                    { label: "Tours", value: "Isla Otoque + Jet Ski" },
                    { label: "Extras", value: "Video, fotos, certificado" },
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
                <div className="font-display font-extrabold text-5xl text-ocean mb-2">${retreat.price.toLocaleString()}</div>
                <p className="text-muted-foreground text-xs font-body mb-6">{retreat.nights} noches all-inclusive en Radisson Riviera</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white py-4 rounded-md font-display font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Reservar Mi Lugar <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-muted-foreground text-xs mt-3 font-body">Solo {retreat.capacity} lugares. Reserva con anticipación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER RETREAT */}
      {otherRetreat && (
        <section className="bg-white py-14">
          <div className="container max-w-3xl text-center">
            <h3 className="font-display text-xl font-bold text-ocean mb-6">¿No puedes en estas fechas?</h3>
            <Link href={`/retreats/${otherRetreat.slug}`} className="group inline-block bg-foam rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-sand/50 text-left max-w-md">
              <span className="text-coral text-xs font-display font-semibold">Próximo Retreat</span>
              <h4 className="font-display font-bold text-ocean text-lg group-hover:text-coral transition-colors mt-1">{otherRetreat.name}</h4>
              <p className="text-muted-foreground text-sm font-body mt-1">{otherRetreat.dates}</p>
              <span className="text-coral text-sm font-display font-semibold mt-3 inline-block">Ver Detalles →</span>
            </Link>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.heroAerial} alt="Playa Caracol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean/80" />
        </div>
        <div className="relative container text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">Tu Transformación Empieza Aquí.</h2>
          <p className="text-white/70 font-body text-lg max-w-xl mx-auto mb-8">
            {retreat.nights} noches en el Pacífico panameño. Surf, tours, pensión completa. Solo {retreat.capacity} lugares.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-10 py-5 rounded-md font-display font-bold text-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            RESERVAR MI LUGAR <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
