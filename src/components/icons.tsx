/**
 * Tabler icons outline (subset) — inlined SVG pour éviter le poids
 * d'un package complet sur une landing placeholder.
 * Stroke 20px Sauge par défaut, override via props className.
 */

type IconProps = { className?: string };

const base = "w-5 h-5 stroke-sauge fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]";

export function IconTarget({ className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function IconClock({ className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12,7 12,12 15,15" />
    </svg>
  );
}

export function IconChartLine({ className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M4 19l4-6 4 2 4-8 4 4" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  );
}

export function IconShieldCheck({ className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z" />
      <polyline points="9,12 11,14 15,10" />
    </svg>
  );
}

export function IconUsers({ className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 21v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
      <path d="M16 4a3 3 0 0 1 0 6" />
      <path d="M21 21v-1a4 4 0 0 0-3-3.9" />
    </svg>
  );
}

export function IconChartBar({ className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <rect x="4" y="13" width="3" height="7" />
      <rect x="10" y="8" width="3" height="12" />
      <rect x="16" y="4" width="3" height="16" />
    </svg>
  );
}

export function IconFileText({ className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M6 3h8l5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <polyline points="14,3 14,8 19,8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="14" y2="17" />
    </svg>
  );
}

export function IconTrendingUp({ className = "" }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <polyline points="3,17 9,11 13,15 21,7" />
      <polyline points="14,7 21,7 21,14" />
    </svg>
  );
}
