// ANS Surf - Pacific Flow Design
// Nosotros: About page with team, location, FAQ
import { motion } from "framer-motion";
import { MapPin, Award, Users, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";
import { IMAGES, WHATSAPP_URL, LOCATION, GOOGLE_MAPS_URL } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const FAQ = [
  { q: "¿Necesito experiencia previa para tomar clases?", a: "No, nuestras clases están diseñadas para todos los niveles. Tenemos programas específicos para principiantes absolutos, intermedios y avanzados." },
  { q: "¿Qué incluye el equipo de surf?", a: "Todas las clases incluyen tabla de surf adecuada a tu nivel, leash, rash guard y chaleco de seguridad. No necesitas traer nada." },
  { q: "¿Cuál es la mejor época para surfear en Playa Caracol?", a: "Playa Caracol tiene olas todo el año. La temporada alta de surf es de abril a octubre, pero las condiciones son buenas durante todo el año para aprender." },
  { q: "¿Los Surf Camps incluyen alojamiento?", a: "Sí, todos los Surf Camps incluyen alojamiento en el Radisson Riviera Playa Caracol, todas las comidas en Vento Beach Club y transporte local." },
  { q: "¿Cómo llego a Playa Caracol?", a: "Playa Caracol está a 1.5 horas de Ciudad de Panamá por la carretera Interamericana. Tomando el desvío hacia Punta Chame, son 25 minutos hasta la playa." },
  { q: "¿Hay estacionamiento?", a: "Sí, el Radisson Riviera tiene estacionamiento gratuito para huéspedes y visitantes." },
  { q: "¿Cuál es la política de cancelación?", a: "Cancelaciones con más de 72 horas de anticipación reciben reembolso completo. Entre 24-72 horas, se puede reprogramar. Menos de 24 horas no tiene reembolso." },
  { q: "¿Aceptan niños?", a: "Sí, tenemos clases especiales para niños desde los 6 años. Los Surf Camps son para mayores de 12 años y los Retreats para mayores de 16." },
];

export default function Nosotros() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.heroAerial} alt="Playa Caracol" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean/80 via-ocean/60 to-ocean/80" />
        </div>
        <div className="relative container pt-12 text-center">
          <p className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">Nuestra Historia</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-4">Sobre ANS</h1>
          <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
            Más de 5 años enseñando surf en Playa Caracol. Somos la academia de surf más completa de Panamá.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <p className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">Quiénes Somos</p>
              <h2 className="font-display text-3xl font-extrabold text-ocean mb-4">La Academia Nacional de Surf</h2>
              <p className="text-foreground font-body text-lg leading-relaxed mb-4">
                ANS nació de la pasión por compartir el surf con todos. Ubicados en Playa Caracol, Punta Chame, tenemos las condiciones perfectas para aprender: olas consistentes, agua cálida y un entorno natural incomparable.
              </p>
              <p className="text-foreground font-body text-lg leading-relaxed mb-4">
                Nuestro equipo de instructores certificados ISA ha formado a cientos de surfistas, desde principiantes que nunca habían tocado una tabla hasta avanzados que buscan perfeccionar sus maniobras.
              </p>
              <p className="text-foreground font-body text-lg leading-relaxed">
                En alianza con el Radisson Riviera Playa Caracol, ofrecemos una experiencia completa que combina el mejor surf de Panamá con alojamiento de primera, gastronomía y bienestar.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              <img src={IMAGES.surfGroup} alt="Grupo de surf" className="rounded-lg w-full h-44 object-cover" />
              <img src={IMAGES.surfKids} alt="Clases de surf" className="rounded-lg w-full h-44 object-cover" />
              <img src={IMAGES.surfSchool} alt="Escuela de surf" className="rounded-lg w-full h-44 object-cover col-span-2" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">Nuestros Valores</p>
            <h2 className="font-display text-3xl font-extrabold text-ocean">Lo Que Nos Define</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excelencia", desc: "Instructores certificados ISA con formación continua y estándares internacionales." },
              { icon: Users, title: "Comunidad", desc: "Creamos una familia de surfistas que se apoyan y crecen juntos." },
              { icon: Heart, title: "Pasión", desc: "Amamos el surf y transmitimos esa energía en cada clase y cada ola." },
              { icon: MapPin, title: "Conexión", desc: "Respetamos el océano y promovemos el surf sostenible y responsable." },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-coral/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-display font-bold text-ocean mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.heroAerial} alt="Vista aérea" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean/80" />
        </div>
        <div className="relative container text-center">
          <MapPin className="w-10 h-10 text-coral mx-auto mb-4" />
          <h2 className="font-display text-3xl font-extrabold text-white mb-3">Nuestra Ubicación</h2>
          <p className="text-white/70 font-body text-lg max-w-xl mx-auto mb-6">
            Playa Caracol, Punta Chame, Panamá. A solo 1.5 horas de Ciudad de Panamá. El spot de surf más accesible del Pacífico panameño.
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-md font-display font-semibold transition-colors"
          >
            <MapPin className="w-4 h-4" /> Ver en Google Maps
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-foam py-20" id="faq">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="font-display text-3xl font-extrabold text-ocean">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-display font-semibold text-ocean pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-coral shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground font-body">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
