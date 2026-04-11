export function Logo({ className = "", size = 32 }: { className?: string; size?: number }) {
  const k = "#8B3A2F";
  const fg = "currentColor";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* ===== Men (面) — kendo mask ===== */}

      {/* Outer helmet shell — rounded trapezoid */}
      <path
        d="M 16 18 Q 16 12, 24 10 L 40 10 Q 48 12, 48 18 L 48 34 Q 48 42, 32 44 Q 16 42, 16 34 Z"
        stroke={fg}
        strokeWidth="1.8"
        fill="none"
        opacity="0.85"
      />

      {/* Mengane (面金) — horizontal grille bars */}
      <line x1="18" y1="22" x2="46" y2="22" stroke={k} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="19" y1="26" x2="45" y2="26" stroke={k} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="30" x2="44" y2="30" stroke={k} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="21.5" y1="34" x2="42.5" y2="34" stroke={k} strokeWidth="1.2" strokeLinecap="round" />

      {/* Tsuki-dare (chin protector) */}
      <path
        d="M 24 38 Q 28 41, 32 41 Q 36 41, 40 38"
        stroke={fg}
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />

      {/* ===== Shinai (竹刀) — bamboo sword, crossing behind the mask ===== */}

      {/* Blade */}
      <line
        x1="42"
        y1="6"
        x2="22"
        y2="58"
        stroke={k}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Tsuba (guard disc) */}
      <ellipse
        cx="35.2"
        cy="23"
        rx="3"
        ry="1.6"
        stroke={k}
        strokeWidth="1.2"
        fill="none"
        transform="rotate(-20, 35.2, 23)"
      />

      {/* Tsuka (grip wrapping marks) */}
      <line x1="26" y1="46" x2="28.5" y2="42" stroke={fg} strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <line x1="24.5" y1="49" x2="27" y2="45" stroke={fg} strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <line x1="23" y1="52" x2="25.5" y2="48" stroke={fg} strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

      {/* Sakigawa (tip cap) */}
      <circle cx="43" cy="4" r="1.2" fill={k} opacity="0.7" />
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo size={24} />
      <span className="text-[15px] font-light tracking-tight">
        <span className="text-kendo">i</span>Kendo
      </span>
    </div>
  );
}
