"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Strike {
  id: number;
  x: number;
  y: number;
  facingRight: boolean;
}

let strikeId = 0;

const DUR = 0.7;
const PEAK = 0.22;

function KendoFigure({ x, y, facingRight, onComplete }: { x: number; y: number; facingRight: boolean; onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, DUR * 1000 + 250);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const k = "#8B3A2F";

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: x - 36,
        top: y - 48,
        transform: facingRight ? "scaleX(1)" : "scaleX(-1)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, PEAK, PEAK, PEAK * 0.25, 0] }}
      transition={{ duration: DUR, times: [0, 0.06, 0.5, 0.8, 1] }}
    >
      <svg width="80" height="90" viewBox="0 0 80 90" fill="none">

        {/* ── Men (面) mask — the focal element ── */}
        <path
          d="M 22 6 Q 22 2, 28 2 L 34 2 Q 40 2, 40 6 L 40 18 Q 40 22, 36 23 L 26 23 Q 22 22, 22 18 Z"
          fill={k} opacity="0.9"
        />
        {/* Men-gane (grill bars) */}
        <line x1="24" y1="8" x2="38" y2="8" stroke="#fff" strokeWidth="0.6" opacity="0.4" />
        <line x1="24" y1="11" x2="38" y2="11" stroke="#fff" strokeWidth="0.6" opacity="0.4" />
        <line x1="24" y1="14" x2="38" y2="14" stroke="#fff" strokeWidth="0.6" opacity="0.4" />
        <line x1="24" y1="17" x2="38" y2="17" stroke="#fff" strokeWidth="0.6" opacity="0.4" />
        {/* Men-dare — simplified to lines */}
        <line x1="22" y1="12" x2="18" y2="22" stroke={k} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <line x1="40" y1="12" x2="44" y2="22" stroke={k} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

        {/* ── Body — single line torso ── */}
        <line x1="31" y1="23" x2="31" y2="48" stroke={k} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        {/* ── Legs — simple lines, lunge stance ── */}
        <line x1="31" y1="48" x2="40" y2="72" stroke={k} strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
        <line x1="31" y1="48" x2="18" y2="70" stroke={k} strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />

        {/* ── Arms — animated lines gripping sword ── */}
        <motion.line
          x1="31" y1="32"
          stroke={k} strokeWidth="1.3" strokeLinecap="round" opacity="0.6"
          animate={{
            x2: [44, 48],
            y2: [16, 38],
          }}
          transition={{ duration: DUR * 0.35, delay: DUR * 0.08, ease: "easeIn" }}
        />

        {/* ── Shinai (竹刀) — long sword, decisive slash ── */}
        <motion.line
          stroke={k} strokeWidth="2" strokeLinecap="round" opacity="0.9"
          animate={{
            x1: [44, 48],
            y1: [14, 36],
            x2: [68, 58],
            y2: [-20, 4],
          }}
          transition={{ duration: DUR * 0.35, delay: DUR * 0.08, ease: "easeIn" }}
        />

        {/* ── Slash trail ── */}
        <motion.path
          d="M 70 -16 Q 58 4 44 20"
          stroke={k} strokeWidth="1" strokeLinecap="round" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 0, 1, 1],
            opacity: [0, 0, 0.35, 0],
          }}
          transition={{ duration: DUR, times: [0, 0.38, 0.56, 0.82] }}
        />

        {/* ── Impact sparks ── */}
        <motion.g
          animate={{ opacity: [0, 0, 0.4, 0] }}
          transition={{ duration: DUR, times: [0, 0.44, 0.56, 0.82] }}
        >
          <motion.line
            x1="52" y1="14" stroke={k} strokeWidth="0.7" strokeLinecap="round"
            animate={{ x2: [52, 58], y2: [14, 10] }}
            transition={{ duration: DUR * 0.18, delay: DUR * 0.44 }}
          />
          <motion.line
            x1="56" y1="8" stroke={k} strokeWidth="0.7" strokeLinecap="round"
            animate={{ x2: [56, 64], y2: [8, 4] }}
            transition={{ duration: DUR * 0.18, delay: DUR * 0.44 }}
          />
        </motion.g>

      </svg>
    </motion.div>
  );
}

export function KendoStrike() {
  const [strikes, setStrikes] = useState<Strike[]>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("a") ||
      target.closest("button") ||
      target.closest("input") ||
      target.closest("textarea") ||
      target.closest("[role='dialog']") ||
      target.closest("[data-no-strike]")
    ) {
      return;
    }

    const midX = window.innerWidth / 2;
    const id = ++strikeId;
    setStrikes((prev) => [...prev, { id, x: e.clientX, y: e.clientY, facingRight: e.clientX < midX }]);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  const removeStrike = useCallback((id: number) => {
    setStrikes((prev) => prev.filter((s) => s.id !== id));
  }, []);

  return (
    <AnimatePresence>
      {strikes.map((strike) => (
        <KendoFigure
          key={strike.id}
          x={strike.x}
          y={strike.y}
          facingRight={strike.facingRight}
          onComplete={() => removeStrike(strike.id)}
        />
      ))}
    </AnimatePresence>
  );
}
