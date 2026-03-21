// ANS Surf - Pacific Flow Design
// Navbar: Sticky top nav with ocean-inspired styling
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/clases", label: "Clases" },
  { href: "/masterclasses", label: "Masterclasses" },
  { href: "/surf-camps", label: "Surf Camps" },
  { href: "/retreats", label: "Retreats" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ocean/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            ANS
          </span>
          <span className="hidden sm:block text-white/70 text-xs font-body leading-tight">
            Academia Nacional<br />de Surf
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-white bg-white/15"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center gap-2 bg-coral hover:bg-coral-hover text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4" />
            Reservar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-ocean/98 backdrop-blur-md border-t border-white/10">
          <nav className="container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  location === link.href
                    ? "text-white bg-white/15"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-coral text-white px-4 py-3 rounded-md text-base font-semibold"
            >
              <Phone className="w-4 h-4" />
              Reservar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
