// Utility to determine masterclass/event status based on date
// Returns: "PRÓXIMO" | "HOY" | "PASADO"

const MONTH_MAP: Record<string, number> = {
  enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
  julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11,
};

export function parseSpanishDate(dateStr: string): Date {
  // Format: "10 de Mayo, 2026"
  const match = dateStr.match(/(\d+)\s+de\s+(\w+),?\s*(\d{4})/i);
  if (!match) return new Date(0);
  const [, day, monthStr, year] = match;
  const month = MONTH_MAP[monthStr.toLowerCase()] ?? 0;
  return new Date(parseInt(year), month, parseInt(day));
}

export function parseDateRange(dateStr: string): { start: Date; end: Date } {
  // Format: "15 - 17 de Mayo, 2026" or "10 - 15 de Diciembre, 2026"
  const match = dateStr.match(/(\d+)\s*-\s*(\d+)\s+de\s+(\w+),?\s*(\d{4})/i);
  if (!match) return { start: new Date(0), end: new Date(0) };
  const [, startDay, endDay, monthStr, year] = match;
  const month = MONTH_MAP[monthStr.toLowerCase()] ?? 0;
  return {
    start: new Date(parseInt(year), month, parseInt(startDay)),
    end: new Date(parseInt(year), month, parseInt(endDay)),
  };
}

export type EventStatus = "PRÓXIMO" | "HOY" | "PASADO";

export function getEventStatus(dateStr: string): EventStatus {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = parseSpanishDate(dateStr);
  eventDate.setHours(0, 0, 0, 0);

  if (eventDate.getTime() === today.getTime()) return "HOY";
  if (eventDate > today) return "PRÓXIMO";
  return "PASADO";
}

export function getRangeEventStatus(dateStr: string): EventStatus {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const { start, end } = parseDateRange(dateStr);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  if (today >= start && today <= end) return "HOY";
  if (start > today) return "PRÓXIMO";
  return "PASADO";
}

export function getStatusBadgeColor(status: EventStatus): string {
  switch (status) {
    case "PRÓXIMO": return "bg-emerald-500 text-white";
    case "HOY": return "bg-coral text-white animate-pulse";
    case "PASADO": return "bg-gray-400 text-white";
  }
}
