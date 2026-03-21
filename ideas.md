# ANS Surf - Brainstorm de Diseño

## Contexto
Academia Nacional de Surf en Playa Caracol, Panamá. Productos: clases básicas, paquetes, 15 masterclasses, 8 surf camps y 2 surf retreats premium. Alojamiento en Radisson, actividades en Vento Club. Target: locales + turistas internacionales.

---

<response>
<text>
## Idea 1: "Coastal Brutalism"

**Movimiento de Diseño:** Neo-Brutalism aplicado al surf — tipografía cruda, bordes duros, colores saturados sobre fondos texturizados que evocan arena mojada y concreto costero.

**Principios Core:**
1. Contraste extremo entre elementos — nada es sutil, todo tiene presencia
2. Tipografía como arquitectura — los títulos son monumentales, el texto es funcional
3. Asimetría deliberada — layouts que se sienten como olas rompiendo

**Filosofía de Color:** Negro carbón (#1A1A1A) como base, Amarillo eléctrico (#FFD700) para CTAs y precios, Azul profundo (#003366) para secciones de confianza, Blanco roto (#F5F0EB) para fondos de contenido. La idea es que el sitio se sienta como un poster de competencia de surf de los 90s modernizado.

**Paradigma de Layout:** Bloques asimétricos apilados. Hero full-bleed con texto gigante superpuesto. Secciones con bordes gruesos (4px) que separan contenido. Cards con sombras duras (no difusas). Grid irregular para productos.

**Elementos Firma:** Bordes gruesos negros en cards y secciones. Tipografía monumental en headers (120px+). Stickers/badges rotativos para "SOLD OUT", "NEW", "PREMIUM".

**Filosofía de Interacción:** Hover states con cambio de color instantáneo (sin transición suave). Scroll que revela bloques con efecto de "caída". Cursor personalizado con forma de ola.

**Animación:** Entrada de elementos con slide-in desde los lados. Números de precio con efecto de conteo. Badges que rotan lentamente. Parallax mínimo solo en hero.

**Tipografía:** Títulos: Space Grotesk (Bold, 800). Cuerpo: DM Sans (Regular, 400). Precios: Space Mono (Bold). Contraste máximo entre display y body.
</text>
<probability>0.05</probability>
</response>

<response>
<text>
## Idea 2: "Pacific Flow"

**Movimiento de Diseño:** Organic Modernism — formas fluidas inspiradas en olas y corrientes oceánicas, paleta natural del Pacífico panameño, sensación de movimiento constante pero controlado.

**Principios Core:**
1. Fluidez visual — curvas SVG, bordes redondeados orgánicos, transiciones suaves
2. Jerarquía natural — como la pirámide de productos (clases → retreats), el diseño escala en intensidad visual
3. Respiración — espacios amplios que evocan la playa al amanecer

**Filosofía de Color:** Azul Océano Profundo (#1E3A5F) como primario — transmite profesionalismo y profundidad. Coral Vivo (#FF6B5B) para CTAs — energía sin agresividad. Arena Cálida (#D4B896) para fondos — calidez tropical. Espuma (#F8F6F2) para secciones claras. Verde Manglar (#2D5A4A) como acento secundario para trust badges.

**Paradigma de Layout:** Secciones que fluyen una hacia otra con divisores SVG curvos (wave dividers). Hero con overlay gradiente diagonal. Layout de 2 columnas asimétrico (60/40) para productos premium. Grid de 3 columnas para catálogo. Sidebar sticky para navegación en landing pages largas.

**Elementos Firma:** Wave dividers SVG entre secciones (cada uno diferente). Indicador de nivel de surf visual (barras como olas crecientes). Badge "Todo Incluido" con icono de maleta + ola.

**Filosofía de Interacción:** Hover suave con elevación (shadow + scale 1.02). Scroll reveal con fade-up. Cards de producto con flip para ver "qué incluye". WhatsApp flotante con pulso suave.

**Animación:** Fade-up al scroll (staggered por 100ms entre elementos). Hero con parallax sutil en imagen de fondo. Contador animado para estadísticas (alumnos, años, etc). Wave loader entre páginas.

**Tipografía:** Títulos: Montserrat (700, SemiBold). Cuerpo: Source Sans 3 (400, Regular). Precios: Montserrat (800, ExtraBold). Quotes/testimonios: Playfair Display (Italic).
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Idea 3: "Surf Editorial"

**Movimiento de Diseño:** Editorial Design meets Surf Culture — inspirado en revistas de surf premium como Surfer Magazine y Stab. Layouts editoriales con fotografía dominante, tipografía serif elegante, y una sensación de "artículo de revista" en cada landing page.

**Principios Core:**
1. La fotografía manda — cada sección arranca con una imagen que cuenta una historia
2. Tipografía editorial — mezcla de serif para títulos y sans-serif para cuerpo, como una revista premium
3. Narrativa visual — cada producto se presenta como un "artículo" con storytelling

**Filosofía de Color:** Casi monocromático con acentos. Fondo: Blanco cálido (#FAFAF7). Texto principal: Negro suave (#1C1C1C). Acento único: Azul Atlántico (#0066CC) para links y CTAs. Segundo acento: Terracota (#C4622D) para badges premium y precios de retreats. La restricción cromática hace que las fotografías sean las protagonistas absolutas.

**Paradigma de Layout:** Layout editorial de revista — columnas de texto junto a imágenes full-height. Hero con imagen full-bleed y título superpuesto en esquina. Secciones de producto como "spreads" de revista (imagen izquierda, contenido derecha, alternando). Landing pages de retreats como artículos longform con pull-quotes.

**Elementos Firma:** Pull-quotes grandes entre secciones ("Las mejores olas de Panamá, sin piedras"). Números de edición/fecha en esquina superior como revista. Líneas finas horizontales como separadores (1px).

**Filosofía de Interacción:** Minimalista — hover cambia opacidad de imagen. Click revela contenido con slide elegante. Scroll suave con snap en secciones principales. Sin efectos llamativos — la elegancia está en la contención.

**Animación:** Imágenes con reveal de cortina (clip-path animation). Texto que aparece línea por línea al scroll. Transiciones de página con fade cross-dissolve. Números con typewriter effect.

**Tipografía:** Títulos: Fraunces (Variable, Optical Size). Cuerpo: Inter (400, 500). Subtítulos: Inter (600). Pull-quotes: Fraunces Italic (300). Precios: Inter (700). La mezcla serif/sans crea tensión visual elegante.
</text>
<probability>0.06</probability>
</response>

---

## Decisión

Selecciono **Idea 2: "Pacific Flow"** por las siguientes razones:

1. La paleta de colores (Azul Océano + Coral + Arena) es la más alineada con la marca ANS y el entorno de Playa Caracol
2. Los wave dividers SVG crean una identidad visual única sin ser agresivos
3. La jerarquía visual natural (fluye como la pirámide de productos) facilita la navegación
4. El balance entre profesionalismo y calidez tropical es exactamente lo que necesita una academia de surf que vende desde clases de $55 hasta retreats de $1,150
5. La tipografía Montserrat + Source Sans 3 es legible en móvil y tiene personalidad sin ser extravagante
