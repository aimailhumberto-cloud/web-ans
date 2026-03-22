/* ANS Surf — Interactive Location Map (Leaflet + OpenStreetMap) */
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";

// Fix Leaflet default icon issue with bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Custom coral marker
const coralIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
}

// Real coordinates for Playa Caracol / Punta Chame area
const LOCATIONS: Location[] = [
  {
    id: "ans-surfside",
    name: "ANS SurfSide",
    lat: 8.6440,
    lng: -79.7080,
    description: "Base de operaciones. Clases de surf, masterclasses, surfcamps y tienda.",
  },
  {
    id: "playa-caracol",
    name: "Playa Caracol",
    lat: 8.6434,
    lng: -79.7077,
    description: "Olas consistentes todo el año. Fondo de arena, ideal para aprender.",
  },
  {
    id: "punta-chame",
    name: "Punta Chame",
    lat: 8.5750,
    lng: -79.7350,
    description: "Capital del kitesurf. Vientos de Nov a Mar, aguas planas.",
  },
  {
    id: "radisson-riviera",
    name: "Radisson Riviera",
    lat: 8.6430,
    lng: -79.7070,
    description: "Hotel partner. Sede de los Surf Camps con alojamiento incluido.",
  },
  {
    id: "vento-beach",
    name: "Vento Beach Club",
    lat: 8.6435,
    lng: -79.7075,
    description: "Restaurante frente al mar. Almuerzos de masterclasses y surf camps.",
  },
];

const MAP_CENTER: [number, number] = [8.620, -79.715];
const MAP_ZOOM = 13;

function FlyTo({ target }: { target: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo(target, 15, { duration: 1 });
  }, [target, map]);
  return null;
}

export default function LocationMap() {
  const [active, setActive] = useState<string | null>(null);
  const [flyTarget, setFlyTarget] = useState<[number, number] | null>(null);

  const handleClick = (loc: Location) => {
    setActive(loc.id);
    setFlyTarget([loc.lat, loc.lng]);
  };

  return (
    <section className="py-20 bg-foam">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-coral font-display font-semibold text-sm uppercase tracking-widest mb-2">
            Encuéntranos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ocean">
            Nuestra Ubicación
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            ANS SurfSide está en Playa Caracol, Punta Chame — a solo 90 minutos de Ciudad de Panamá por la autopista.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Location list */}
          <div className="space-y-2 order-2 lg:order-1">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => handleClick(loc)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  active === loc.id
                    ? "bg-ocean text-white border-ocean shadow-lg"
                    : "bg-white border-gray-200 hover:border-coral hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-3">
                  <MapPin className={`w-4 h-4 mt-0.5 shrink-0 ${active === loc.id ? "text-coral" : "text-ocean"}`} />
                  <div>
                    <h4 className={`font-display font-bold text-sm ${active === loc.id ? "text-coral" : "text-ocean"}`}>
                      {loc.name}
                    </h4>
                    <p className={`text-xs mt-1 ${active === loc.id ? "text-white/70" : "text-muted-foreground"}`}>
                      {loc.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Map */}
          <div className="lg:col-span-2 order-1 lg:order-2 rounded-xl overflow-hidden border border-gray-200 shadow-sm h-[400px] lg:h-[460px]">
            <MapContainer
              center={MAP_CENTER}
              zoom={MAP_ZOOM}
              scrollWheelZoom={false}
              className="w-full h-full z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <FlyTo target={flyTarget} />
              {LOCATIONS.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lng]}
                  icon={coralIcon}
                  eventHandlers={{ click: () => handleClick(loc) }}
                >
                  <Popup>
                    <div className="min-w-[180px]">
                      <h3 className="font-bold text-sm">{loc.name}</h3>
                      <p className="text-xs text-gray-600 mt-1">{loc.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
