/* ANS Surf — Visual Calendar for Masterclasses & Surf Camps */
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Link } from "wouter";
import { parseSpanishDate, parseDateRange, getEventStatus, getRangeEventStatus, getStatusBadgeColor } from "@/lib/dateUtils";
import type { EventStatus } from "@/lib/dateUtils";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;       // "10 de Mayo, 2026"
  dateRange?: string;  // "15 - 17 de Mayo, 2026"
  type: "masterclass" | "surfcamp";
  slug: string;
  level?: string;
  price: number;
  color: string;
}

interface EventCalendarProps {
  events: CalendarEvent[];
}

const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const DAY_NAMES = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

export default function EventCalendar({ events }: EventCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    // Start on today's month or first event month
    const today = new Date();
    return { year: today.getFullYear(), month: today.getMonth() };
  });

  // Get events that fall in the current month
  const monthEvents = useMemo(() => {
    return events.filter((ev) => {
      if (ev.dateRange) {
        const { start, end } = parseDateRange(ev.dateRange);
        // Check if range overlaps with current month
        const monthStart = new Date(currentMonth.year, currentMonth.month, 1);
        const monthEnd = new Date(currentMonth.year, currentMonth.month + 1, 0);
        return start <= monthEnd && end >= monthStart;
      } else {
        const d = parseSpanishDate(ev.date);
        return d.getMonth() === currentMonth.month && d.getFullYear() === currentMonth.year;
      }
    });
  }, [events, currentMonth]);

  // Build calendar grid
  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentMonth.year, currentMonth.month, 1);
    const lastDay = new Date(currentMonth.year, currentMonth.month + 1, 0);
    const totalDays = lastDay.getDate();

    // Monday = 0 start
    let startDow = firstDay.getDay() - 1;
    if (startDow < 0) startDow = 6;

    const days: (number | null)[] = [];
    for (let i = 0; i < startDow; i++) days.push(null);
    for (let d = 1; d <= totalDays; d++) days.push(d);
    // Pad to complete last week
    while (days.length % 7 !== 0) days.push(null);

    return days;
  }, [currentMonth]);

  // Map day → events
  const dayEvents = useMemo(() => {
    const map = new Map<number, CalendarEvent[]>();
    for (const ev of monthEvents) {
      if (ev.dateRange) {
        const { start, end } = parseDateRange(ev.dateRange);
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          if (d.getMonth() === currentMonth.month && d.getFullYear() === currentMonth.year) {
            const day = d.getDate();
            if (!map.has(day)) map.set(day, []);
            map.get(day)!.push(ev);
          }
        }
      } else {
        const d = parseSpanishDate(ev.date);
        const day = d.getDate();
        if (!map.has(day)) map.set(day, []);
        map.get(day)!.push(ev);
      }
    }
    return map;
  }, [monthEvents, currentMonth]);

  const today = new Date();
  const isToday = (day: number) =>
    day === today.getDate() && currentMonth.month === today.getMonth() && currentMonth.year === today.getFullYear();

  const prevMonth = () =>
    setCurrentMonth((p) => p.month === 0 ? { year: p.year - 1, month: 11 } : { year: p.year, month: p.month - 1 });
  const nextMonth = () =>
    setCurrentMonth((p) => p.month === 11 ? { year: p.year + 1, month: 0 } : { year: p.year, month: p.month + 1 });

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-ocean text-white">
        <button onClick={prevMonth} className="p-1 hover:bg-white/10 rounded transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="font-display font-bold text-lg">
          {MONTH_NAMES[currentMonth.month]} {currentMonth.year}
        </h3>
        <button onClick={nextMonth} className="p-1 hover:bg-white/10 rounded transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 border-b border-gray-100">
        {DAY_NAMES.map((d) => (
          <div key={d} className="text-center py-2 text-xs font-semibold text-gray-400 uppercase">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {calendarDays.map((day, i) => {
          const evts = day ? dayEvents.get(day) || [] : [];
          return (
            <div
              key={i}
              className={`min-h-[72px] sm:min-h-[80px] border-b border-r border-gray-50 p-1 ${
                day === null ? "bg-gray-50/50" : ""
              } ${isToday(day!) ? "bg-coral/5" : ""}`}
            >
              {day !== null && (
                <>
                  <span
                    className={`text-xs font-medium block text-right px-1 ${
                      isToday(day)
                        ? "bg-coral text-white rounded-full w-6 h-6 flex items-center justify-center ml-auto"
                        : evts.length > 0
                        ? "text-ocean font-bold"
                        : "text-gray-400"
                    }`}
                  >
                    {day}
                  </span>
                  {evts.map((ev, j) => (
                    <Link
                      key={j}
                      href={ev.type === "masterclass" ? `/masterclasses/${ev.slug}` : `/surf-camps/${ev.slug}`}
                      className={`block mt-0.5 text-[10px] sm:text-xs px-1.5 py-0.5 rounded-sm font-medium truncate transition-opacity hover:opacity-80 ${ev.color}`}
                      title={ev.title}
                    >
                      {ev.title}
                    </Link>
                  ))}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Event list for current month */}
      {monthEvents.length > 0 && (
        <div className="px-6 py-4 border-t border-gray-100 bg-foam/30">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Eventos en {MONTH_NAMES[currentMonth.month]}
          </h4>
          <div className="space-y-2">
            {monthEvents.map((ev) => {
              const status = ev.dateRange ? getRangeEventStatus(ev.dateRange) : getEventStatus(ev.date);
              const badgeColor = getStatusBadgeColor(status);
              return (
                <Link
                  key={ev.id}
                  href={ev.type === "masterclass" ? `/masterclasses/${ev.slug}` : `/surf-camps/${ev.slug}`}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group"
                >
                  <div className={`w-2 h-8 rounded-full ${ev.color.split(" ")[0]}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ocean group-hover:text-coral transition-colors truncate">
                      {ev.title}
                    </p>
                    <p className="text-xs text-gray-500">{ev.dateRange || ev.date} · ${ev.price}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${badgeColor}`}>{status}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
