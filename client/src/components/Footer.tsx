// ANS Surf - Pacific Flow Design
// Footer: Ocean-dark footer with contact info and links
import { Link } from "wouter";
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import {
  WHATSAPP_URL,
  WHATSAPP_NUMBER,
  EMAIL,
  INSTAGRAM,
  FACEBOOK,
  YOUTUBE,
  LOCATION,
  GOOGLE_MAPS_URL,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ocean text-white/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src="/logo-ans.png" alt="ANS" className="h-10 w-auto mb-3 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-white/60 mb-4">
              Academia Nacional de Surf. Más de 5 años enseñándote a estar sobre las olas en Playa Caracol, Panamá.
            </p>
            <div className="flex gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Programas */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-wider">Programas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/clases" className="hover:text-coral transition-colors">Clases de Surf</Link></li>
              <li><Link href="/clases#paquetes" className="hover:text-coral transition-colors">Paquetes</Link></li>
              <li><Link href="/masterclasses" className="hover:text-coral transition-colors">Masterclasses</Link></li>
              <li><Link href="/surf-camps" className="hover:text-coral transition-colors">Surf Camps</Link></li>
              <li><Link href="/retreats" className="hover:text-coral transition-colors">Surf Retreats</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-wider">Información</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/nosotros" className="hover:text-coral transition-colors">Nosotros</Link></li>
              <li><a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">Ubicación</a></li>
              <li><Link href="/nosotros#faq" className="hover:text-coral transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-coral shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">{WHATSAPP_NUMBER}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-coral shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-coral transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-coral shrink-0" />
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">{LOCATION}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} ANS - Academia Nacional de Surf. Todos los derechos reservados.</p>
          <p>Playa Caracol, Punta Chame, Panamá</p>
        </div>
      </div>
    </footer>
  );
}
