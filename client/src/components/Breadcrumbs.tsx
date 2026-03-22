// ANS Surf - Breadcrumbs component for detail pages
import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-ocean/95 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container py-2.5 flex items-center gap-1.5 text-xs font-body overflow-x-auto">
        <Link
          href="/"
          className="text-white/50 hover:text-white transition-colors shrink-0 flex items-center gap-1"
        >
          <Home className="w-3 h-3" />
          <span className="hidden sm:inline">Inicio</span>
        </Link>
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5 shrink-0">
            <ChevronRight className="w-3 h-3 text-white/30" />
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="text-white/50 hover:text-white transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-white/80 font-medium">{crumb.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
