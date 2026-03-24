// ANS Surf - Pacific Flow Design
// Masterclasses: Calendar listing of all 15 masterclasses
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Users, Waves } from "lucide-react";
import { IMAGES, MASTERCLASSES, WHATSAPP_URL } from "@/lib/data";
import { getEventStatus, getStatusBadgeColor } from "@/lib/dateUtils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function Masterclasses() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/hero-masterclasses-group.jpg" alt="Grupo ANS Surf con tablas en Playa Caracol" className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} loading="lazy" />
        </div>
        <div className="relative container pt-12">
          <p className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">Programa 2026</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-4">Masterclasses</h1>
          <p className="text-white/70 font-body text-lg max-w-2xl">
            15 sesiones temáticas al año, cada dos semanas en sábados. Técnicas específicas con video análisis grupal, almuerzo incluido y certificado. Cupo limitado a 10 personas.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-white/60 text-sm font-body">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Calendar className="w-4 h-4" /> Sábados, cada 2 semanas</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Clock className="w-4 h-4" /> 9:00 AM - 3:00 PM</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Users className="w-4 h-4" /> Máx. 10 personas</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Waves className="w-4 h-4" /> $175 por sesión</span>
          </div>
        </div>
      </section>

      {/* Masterclass Grid */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MASTERCLASSES.map((mc) => {
              const status = getEventStatus(mc.date);
              const badgeColor = getStatusBadgeColor(status);
              return (
              <motion.div key={mc.id} variants={fadeUp} className={status === "PASADO" ? "opacity-60" : ""}>
                <Link href={`/masterclasses/${mc.slug}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <div className="relative h-44 overflow-hidden">
                    <img src={mc.image} alt={mc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="bg-coral text-white text-xs font-display font-bold px-2 py-1 rounded">#{mc.number}</span>
                      <span className={`text-xs font-display font-bold px-2 py-1 rounded ${badgeColor}`}>{status}</span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-ocean/80 backdrop-blur-sm text-white text-xs font-display px-2 py-1 rounded">{mc.level}</span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-white font-display font-bold text-lg">${mc.price}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="w-3.5 h-3.5" /> {mc.date}
                    </div>
                    <h3 className="font-display font-bold text-ocean text-lg mb-1 group-hover:text-coral transition-colors">{mc.name}</h3>
                    <p className="text-muted-foreground text-sm font-body mb-3 line-clamp-2">{mc.topic}</p>
                    <span className="text-coral text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      {status === "PASADO" ? "Ver resumen" : "Ver detalles"} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ocean py-16">
        <div className="container text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">¿Quieres Reservar una Masterclass?</h2>
          <p className="text-white/60 font-body mb-6">Cupos limitados a 10 personas. Reserva tu lugar por WhatsApp.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-3 rounded-md font-display font-semibold transition-colors">
            Reservar por WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
