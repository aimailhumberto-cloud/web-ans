// ANS Surf - Pacific Flow Design
// SurfCamps: Listing of all 8 surf camps
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Moon, Utensils, Hotel } from "lucide-react";
import { IMAGES, SURF_CAMPS, WHATSAPP_URL } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function SurfCamps() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 pb-20 bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={IMAGES.surfSchool} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container pt-12">
          <p className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">Temporada 2026</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-4">Surf Camps</h1>
          <p className="text-white/70 font-body text-lg max-w-2xl mb-6">
            Fin de semana completo de inmersión en el surf. Alojamiento en Radisson Riviera, todas las comidas en Vento, surfer invitado, video análisis y certificado de nivel.
          </p>
          <div className="flex flex-wrap gap-4 text-white/60 text-sm font-body">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Calendar className="w-4 h-4" /> 1 por mes, Viernes a Domingo</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Hotel className="w-4 h-4" /> 1 noche en Radisson</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Utensils className="w-4 h-4" /> Todas las comidas</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Users className="w-4 h-4" /> Máx. 12 personas</span>
          </div>
        </div>
      </section>

      {/* What's Included Banner */}
      <section className="bg-coral py-6">
        <div className="container flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white text-sm font-body">
          <div className="flex items-center gap-2"><Hotel className="w-5 h-5" /> Radisson Riviera</div>
          <div className="flex items-center gap-2"><Utensils className="w-5 h-5" /> Pensión Completa</div>
          <div className="flex items-center gap-2"><Users className="w-5 h-5" /> Surfer Invitado</div>
          <div className="flex items-center gap-2"><Moon className="w-5 h-5" /> Actividad Nocturna</div>
        </div>
      </section>

      {/* Camps Grid */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
            {SURF_CAMPS.map((camp, i) => (
              <motion.div key={camp.id} variants={fadeUp}>
                <Link href={`/surf-camps/${camp.slug}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[400px_1fr]">
                    <div className="relative h-56 md:h-full overflow-hidden">
                      <img src={camp.image} alt={camp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ocean/50 to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-coral text-white text-xs font-display font-bold px-2 py-1 rounded">Camp #{camp.number}</span>
                        <span className="bg-ocean/80 backdrop-blur-sm text-white text-xs font-display px-2 py-1 rounded">{camp.level}</span>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-coral text-xs font-display font-semibold uppercase tracking-wider mb-2">
                          {camp.highlight}
                        </div>
                        <h3 className="font-display font-bold text-ocean text-2xl mb-2 group-hover:text-coral transition-colors">{camp.name}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {camp.dates}</span>
                          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {camp.capacity} cupos</span>
                        </div>
                        <p className="text-muted-foreground font-body mb-4 line-clamp-2">{camp.description}</p>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-sand">
                        <div>
                          <span className="font-display font-extrabold text-ocean text-2xl">${camp.price}</span>
                          <span className="text-muted-foreground text-sm ml-1">/ persona</span>
                        </div>
                        <span className="text-coral font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Ver detalles <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ocean py-16">
        <div className="container text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">Reserva Tu Surf Camp</h2>
          <p className="text-white/60 font-body mb-6 max-w-xl mx-auto">Cupos limitados a 12 personas por camp. Incluye alojamiento en Radisson, todas las comidas y surfer invitado.</p>
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
