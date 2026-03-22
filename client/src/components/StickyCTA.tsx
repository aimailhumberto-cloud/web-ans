// ANS Surf - Sticky CTA bar for detail pages
// Shows at the bottom of the screen when scrolled past the hero
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface StickyCTAProps {
  label: string;
  price: number | string;
  whatsappLink: string;
}

export default function StickyCTA({ label, price, whatsappLink }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero (roughly 600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-ocean/95 backdrop-blur-md border-t border-white/10 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom">
      <div className="container flex items-center justify-between py-3 gap-4">
        <div className="hidden sm:flex flex-col">
          <span className="text-white/60 text-xs font-body">{label}</span>
          <span className="text-white font-display font-bold text-lg">
            ${typeof price === "number" ? price.toLocaleString() : price}
            <span className="text-white/50 text-xs font-body ml-1">por persona</span>
          </span>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-md font-display font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
        >
          Reservar Ahora <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
