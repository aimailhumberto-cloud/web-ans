// ANS Surf - Pacific Flow Design
// Clases: Catalog page for classes and packages
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Users, Award, Shield } from "lucide-react";
import { IMAGES, CLASES_BASICAS, PAQUETES, WHATSAPP_URL } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function Clases() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.surfKids} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container pt-12">
          <p className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">Programas ANS</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-4">Clases de Surf</h1>
          <p className="text-white/70 font-body text-lg max-w-2xl">
            Desde tu primera ola hasta perfeccionar tu técnica. Clases individuales con instructores certificados y paquetes con descuento para progresar más rápido.
          </p>
        </div>
      </section>

      {/* Classes */}
      <section className="bg-foam py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="font-display text-3xl font-extrabold text-ocean mb-2">Clases Individuales</h2>
              <p className="text-muted-foreground font-body">Elige tu nivel y reserva tu clase. Todos los equipos incluidos.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {CLASES_BASICAS.map((c) => (
                <motion.div key={c.id} variants={fadeUp} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean/50 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-ocean/80 backdrop-blur-sm text-white text-xs font-display font-semibold px-2 py-1 rounded">{c.level}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-ocean text-xl mb-2">{c.name}</h3>
                    <p className="text-muted-foreground text-sm font-body mb-4">{c.description}</p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {c.duration}</span>
                      {c.minAge && <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Desde {c.minAge} años</span>}
                    </div>
                    <div className="space-y-1.5 mb-5">
                      {c.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="w-3.5 h-3.5 text-coral shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-sand">
                      <span className="font-display font-extrabold text-ocean text-2xl">${c.price}</span>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-coral hover:bg-coral-hover text-white px-4 py-2 rounded-md text-sm font-display font-semibold transition-colors flex items-center gap-1">
                        Reservar <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Packages */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} id="paquetes">
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="font-display text-3xl font-extrabold text-ocean mb-2">Paquetes de Clases</h2>
              <p className="text-muted-foreground font-body">Ahorra con nuestros paquetes. Transferibles y válidos por 3 meses.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PAQUETES.map((p, i) => (
                <motion.div
                  key={p.id}
                  variants={fadeUp}
                  className={`rounded-lg p-6 border-2 transition-shadow hover:shadow-lg ${
                    i === 1 ? "bg-ocean text-white border-coral relative" : "bg-white border-sand"
                  }`}
                >
                  {i === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-coral text-white text-xs font-display font-bold px-3 py-1 rounded-full">MÁS POPULAR</span>
                    </div>
                  )}
                  <h3 className={`font-display font-bold text-xl mb-1 ${i === 1 ? "text-white" : "text-ocean"}`}>{p.name}</h3>
                  <p className={`text-sm font-body mb-4 ${i === 1 ? "text-white/70" : "text-muted-foreground"}`}>{p.description}</p>

                  <div className="mb-4">
                    <span className={`font-display font-extrabold text-4xl ${i === 1 ? "text-white" : "text-ocean"}`}>${p.price}</span>
                    <span className={`text-sm ml-1 ${i === 1 ? "text-white/60" : "text-muted-foreground"}`}>/ {p.classes} clases</span>
                  </div>

                  <div className={`text-sm mb-5 space-y-2 ${i === 1 ? "text-white/80" : "text-foreground"}`}>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-coral shrink-0" /> ${p.pricePerClass} por clase ({p.savings} ahorro)</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-coral shrink-0" /> Válido {p.validity}</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-coral shrink-0" /> Niveles: {p.levels}</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-coral shrink-0" /> Transferible</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-coral shrink-0" /> Equipo incluido</div>
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-md font-display font-semibold transition-colors ${
                      i === 1 ? "bg-coral hover:bg-coral-hover text-white" : "bg-ocean hover:bg-ocean-light text-white"
                    }`}
                  >
                    Reservar <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <Award className="w-10 h-10 text-coral mx-auto mb-3" />
              <h3 className="font-display font-bold text-ocean mb-1">Instructores Certificados</h3>
              <p className="text-muted-foreground text-sm font-body">Todos nuestros instructores tienen certificación internacional ISA.</p>
            </div>
            <div>
              <Shield className="w-10 h-10 text-coral mx-auto mb-3" />
              <h3 className="font-display font-bold text-ocean mb-1">Seguro Incluido</h3>
              <p className="text-muted-foreground text-sm font-body">Todas las clases incluyen seguro de accidentes y equipo de seguridad.</p>
            </div>
            <div>
              <Users className="w-10 h-10 text-coral mx-auto mb-3" />
              <h3 className="font-display font-bold text-ocean mb-1">Grupos Reducidos</h3>
              <p className="text-muted-foreground text-sm font-body">Máximo 4 alumnos por instructor para atención personalizada.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
