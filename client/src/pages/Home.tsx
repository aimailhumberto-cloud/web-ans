// ANS Surf - Pacific Flow Design
// Home: Landing page with hero, programs overview, testimonials, CTA
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Calendar, MapPin, Star, Clock, Waves } from "lucide-react";
import LocationMap from "@/components/LocationMap";
import {
  IMAGES,
  WHATSAPP_URL,
  MASTERCLASSES,
  SURF_CAMPS,
  SURF_RETREATS,
} from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const nextMasterclass = MASTERCLASSES[0];
  const nextCamp = SURF_CAMPS[0];
  const nextRetreat = SURF_RETREATS[0];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ==================== HERO ==================== */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-ans-tent.jpg"
            alt="ANS Academia Nacional de Surf en Playa Caracol, Punta Chame"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean/70 via-ocean/50 to-ocean/80" />
        </div>
        <div className="relative container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-3">
              Playa Caracol, Punta Chame
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Aprende a Surfear<br />
              <span className="text-coral">con los Mejores</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg sm:text-xl font-body leading-relaxed mb-8 max-w-lg">
              Clases, Masterclasses, Surf Camps y Retreats con instructores certificados. La academia de surf más completa de Panamá.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                href="/clases"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-md font-display font-semibold transition-colors"
              >
                Ver Programas <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-md font-display font-semibold backdrop-blur-sm transition-colors"
              >
                Contactar
              </a>
            </motion.div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs font-body">Descubre más</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <section className="bg-ocean py-6">
        <div className="container flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-white/70 text-sm font-body">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-coral" />
            <span>Instructores Certificados</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-coral" />
            <span>+5 Años de Experiencia</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-coral" />
            <span>Playa Caracol, Chame</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-coral" />
            <span>#1 en TripAdvisor</span>
          </div>
        </div>
      </section>

      <WaveDivider from="fill-ocean" to="fill-ocean" className="bg-foam" />

      {/* ==================== PROGRAMS OVERVIEW ==================== */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">
              Nuestros Programas
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-extrabold text-ocean mb-4">
              Tu Camino en el Surf
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
              Desde tu primera ola hasta maniobras avanzadas. Elige el programa que se adapta a tu nivel y objetivos.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Clases */}
            <motion.div variants={fadeUp}>
              <Link href="/clases" className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={IMAGES.surfKids} alt="Clases de Surf" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="bg-coral text-white text-xs font-display font-semibold px-2 py-1 rounded">Desde $55</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-ocean text-lg mb-1">Clases de Surf</h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">Clases individuales y paquetes para todos los niveles. Tu primer paso en el surf.</p>
                  <span className="text-coral text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver clases <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Masterclasses */}
            <motion.div variants={fadeUp}>
              <Link href="/masterclasses" className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={IMAGES.surfGroup} alt="Masterclasses" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="bg-coral text-white text-xs font-display font-semibold px-2 py-1 rounded">$175/sesión</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-ocean text-lg mb-1">Masterclasses</h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">15 sesiones temáticas al año. Técnicas específicas con video análisis grupal.</p>
                  <span className="text-coral text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver calendario <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Surf Camps */}
            <motion.div variants={fadeUp}>
              <Link href="/surf-camps" className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={IMAGES.surfSchool} alt="Surf Camps" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="bg-coral text-white text-xs font-display font-semibold px-2 py-1 rounded">$550/camp</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-ocean text-lg mb-1">Surf Camps</h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">Fin de semana completo: surf, alojamiento en Radisson, comidas y surfer invitado.</p>
                  <span className="text-coral text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver camps <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Retreats */}
            <motion.div variants={fadeUp}>
              <Link href="/retreats" className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={IMAGES.radissonPool} alt="Surf Retreats" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="bg-coral text-white text-xs font-display font-semibold px-2 py-1 rounded">$1,150/retreat</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-ocean text-lg mb-1">Surf Retreats</h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">5 noches en Radisson. Surf, tours, pensión completa. La experiencia definitiva.</p>
                  <span className="text-coral text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver retreats <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== NEXT EVENTS ==================== */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">
              Próximos Eventos
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-extrabold text-ocean mb-4">
              No Te Pierdas lo Que Viene
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Next Masterclass */}
            <motion.div variants={fadeUp} className="bg-sand-light rounded-lg p-6 border border-sand">
              <div className="flex items-center gap-2 text-coral text-xs font-display font-semibold uppercase tracking-wider mb-3">
                <Waves className="w-4 h-4" />
                Próxima Masterclass
              </div>
              <h3 className="font-display font-bold text-ocean text-xl mb-2">{nextMasterclass.name}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {nextMasterclass.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {nextMasterclass.schedule}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{nextMasterclass.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-ocean text-lg">${nextMasterclass.price}</span>
                <Link href={`/masterclasses/${nextMasterclass.slug}`} className="text-coral text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Ver detalles <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Next Camp */}
            <motion.div variants={fadeUp} className="bg-sand-light rounded-lg p-6 border border-sand">
              <div className="flex items-center gap-2 text-coral text-xs font-display font-semibold uppercase tracking-wider mb-3">
                <Users className="w-4 h-4" />
                Próximo Surf Camp
              </div>
              <h3 className="font-display font-bold text-ocean text-xl mb-2">{nextCamp.name}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {nextCamp.dates}</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {nextCamp.capacity} cupos</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{nextCamp.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-ocean text-lg">${nextCamp.price}</span>
                <Link href={`/surf-camps/${nextCamp.slug}`} className="text-coral text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Ver detalles <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Next Retreat */}
            <motion.div variants={fadeUp} className="bg-sand-light rounded-lg p-6 border border-sand">
              <div className="flex items-center gap-2 text-coral text-xs font-display font-semibold uppercase tracking-wider mb-3">
                <Star className="w-4 h-4" />
                Próximo Retreat
              </div>
              <h3 className="font-display font-bold text-ocean text-xl mb-2">{nextRetreat.name}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {nextRetreat.dates}</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {nextRetreat.capacity} cupos</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{nextRetreat.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-ocean text-lg">${nextRetreat.price.toLocaleString()}</span>
                <Link href={`/retreats/${nextRetreat.slug}`} className="text-coral text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Ver detalles <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== RADISSON SECTION ==================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.radissonLounge} alt="Radisson Riviera Playa Caracol" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-ocean/75" />
        </div>
        <div className="relative container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-3">
                Alojamiento Premium
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-5">
                Radisson Riviera<br />Playa Caracol
              </h2>
              <p className="text-white/80 font-body text-lg leading-relaxed mb-6">
                Nuestros Surf Camps y Retreats incluyen alojamiento en el Radisson Riviera, el resort más exclusivo de Playa Caracol. Habitaciones con vista al mar, piscina, restaurante Vento Beach Club y acceso directo a la playa.
              </p>
              <ul className="space-y-3 text-white/70 font-body">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full shrink-0" />
                  Habitaciones con vista al océano
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full shrink-0" />
                  Restaurante Vento Beach Club
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full shrink-0" />
                  Piscina infinity con vista al mar
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full shrink-0" />
                  Acceso directo a la playa de surf
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src={IMAGES.radissonPool} alt="Piscina Radisson" className="rounded-lg w-full h-40 object-cover" loading="lazy" />
              <img src={IMAGES.ventoClub} alt="Vento Beach Club" className="rounded-lg w-full h-40 object-cover" loading="lazy" />
              <img src={IMAGES.ventoDaypass} alt="Vento Daypass" className="rounded-lg w-full h-40 object-cover col-span-2" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="bg-foam py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">Testimonios</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ocean">Lo Que Dicen Nuestros Surfistas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: "La mejor experiencia de surf que he tenido. Los instructores son increíbles y Playa Caracol es perfecta para aprender. Volví 3 veces.", name: "María G.", from: "Ciudad de Panamá" },
              { quote: "El Surf Camp superó todas mis expectativas. El Radisson, la comida en Vento y el surfer invitado fueron de primera. Ya reservé el siguiente.", name: "Carlos R.", from: "Bogotá, Colombia" },
              { quote: "Vine sin saber nada de surf y salí parado en la tabla en la primera clase. Los instructores tienen mucha paciencia y profesionalismo.", name: "David M.", from: "San José, Costa Rica" },
              { quote: "La masterclass de bottom turn me cambió el surfing. El video análisis es brutal — ves exactamente qué estás haciendo mal. 100% recomendado.", name: "Alejandro P.", from: "Ciudad de Panamá" },
              { quote: "My 12-year-old daughter took Surf 101 and was hooked. She’s now doing Foundation. The instructors make every kid feel like a champion.", name: "Sarah W.", from: "Miami, FL" },
              { quote: "El kitesurf en Punta Chame es otro nivel. Vientos perfectos, aguas planas y un instructor que no te suelta hasta que vuelas. Certificé IKO en 3 días.", name: "Roberto L.", from: "Medellín, Colombia" },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-coral text-coral" />
                  ))}
                </div>
                <p className="text-foreground font-body italic mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-display font-bold text-ocean text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.from}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MAP ==================== */}
      <LocationMap />

      {/* ==================== CTA ==================== */}
      <section className="bg-ocean py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Listo para Surfear?
          </h2>
          <p className="text-white/70 font-body text-lg max-w-xl mx-auto mb-8">
            Contáctanos por WhatsApp y reserva tu lugar. Cupos limitados en Masterclasses, Camps y Retreats.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-md font-display font-semibold text-lg transition-colors"
            >
              Reservar por WhatsApp
            </a>
            <Link
              href="/clases"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-display font-semibold text-lg transition-colors"
            >
              Ver Todos los Programas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
