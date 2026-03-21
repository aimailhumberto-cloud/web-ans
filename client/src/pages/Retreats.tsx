// ANS Surf - Pacific Flow Design
// Retreats: Premium listing of 2 surf retreats
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Moon, Hotel, Utensils, Star, Plane } from "lucide-react";
import { IMAGES, SURF_RETREATS, WHATSAPP_URL } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function Retreats() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.radissonPool} alt="Radisson Riviera" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean/80 via-ocean/60 to-ocean/80" />
        </div>
        <div className="relative container pt-12 text-center">
          <p className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">La Experiencia Definitiva</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">Surf Retreats</h1>
          <p className="text-white/70 font-body text-lg max-w-2xl mx-auto mb-8">
            5 noches en el Radisson Riviera. Surf diario con surfer invitado, tours a islas, pensión completa y la transformación que estabas buscando.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm font-body">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Moon className="w-4 h-4" /> 5 noches</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Hotel className="w-4 h-4" /> Radisson Riviera</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Utensils className="w-4 h-4" /> Pensión Completa</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Plane className="w-4 h-4" /> Tours Incluidos</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded"><Users className="w-4 h-4" /> Máx. 10 personas</span>
          </div>
        </div>
      </section>

      {/* Retreats */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-10">
            {SURF_RETREATS.map((retreat) => (
              <motion.div key={retreat.id} variants={fadeUp}>
                <Link href={`/retreats/${retreat.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-72 lg:h-auto overflow-hidden">
                      <img src={retreat.image} alt={retreat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-ocean/50 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-coral text-white text-sm font-display font-bold px-3 py-1 rounded">Retreat #{retreat.number}</span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="font-display font-extrabold text-white text-3xl">${retreat.price.toLocaleString()}</span>
                        <span className="text-white/70 text-sm ml-1">/ persona</span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display font-extrabold text-ocean text-3xl mb-3 group-hover:text-coral transition-colors">{retreat.name}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {retreat.dates}</span>
                          <span className="flex items-center gap-1"><Moon className="w-3.5 h-3.5" /> {retreat.nights} noches</span>
                          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {retreat.capacity} cupos</span>
                        </div>
                        <p className="text-foreground font-body text-lg leading-relaxed mb-4">{retreat.description}</p>
                        <blockquote className="border-l-4 border-coral pl-4 italic text-muted-foreground font-body mb-6">
                          "{retreat.mission}"
                        </blockquote>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-sand">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><Hotel className="w-4 h-4" /> Radisson</span>
                          <span className="flex items-center gap-1"><Utensils className="w-4 h-4" /> All-inclusive</span>
                          <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Surfer invitado</span>
                        </div>
                        <span className="text-coral font-display font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
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
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">La Experiencia que Cambiará tu Surf</h2>
          <p className="text-white/60 font-body mb-6 max-w-xl mx-auto">Solo 2 retreats al año, máximo 10 personas. Reserva tu lugar ahora.</p>
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
