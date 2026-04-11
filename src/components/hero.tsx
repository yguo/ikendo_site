"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

function SwordStroke() {
  return (
    <svg
      className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block"
      width="500"
      height="600"
      viewBox="0 0 500 600"
      fill="none"
    >
      <motion.path
        d="M 450 50 Q 350 150 250 300 Q 150 450 100 550"
        stroke="#8B3A2F"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      />
      <motion.path
        d="M 420 80 Q 330 170 240 310 Q 160 430 120 520"
        stroke="#8B3A2F"
        strokeWidth="0.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
      />
      <motion.path
        d="M 80 560 Q 90 540 100 560 Q 110 580 120 560 Q 130 540 140 560 Q 150 580 160 560 Q 170 540 180 560 Q 190 580 200 560"
        stroke="#8B3A2F"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background text-foreground flex items-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <SwordStroke />

      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-[1px] bg-[#8B3A2F]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#8B3A2F] font-normal">
              The Art of Conversational AI
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extralight leading-[1.2] tracking-tight mb-6 text-foreground">
            In the silence before the strike,{" "}
            <span className="text-kendo font-light">precision</span> is born.
          </h1>

          <p className="text-[15px] text-muted-foreground font-extralight leading-relaxed mb-4 max-w-lg">
            Enterprise-grade conversation agents. Built in minutes.
            Mastered over time. iKendo is the discipline of shaping
            every word an AI speaks with the rigor of a swordmaster.
          </p>

          <p className="text-[13px] text-muted-foreground/60 font-extralight italic mb-10 max-w-md">
            &ldquo;The body must think. The word must cut. Only then does the
            conversation begin.&rdquo;
          </p>

          <div className="flex items-center gap-3">
            <Button className="bg-[#8B3A2F] hover:bg-[#A0522D] text-white text-xs px-6 h-9 rounded-md font-normal tracking-wide">
              Start Building
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground text-xs h-9 px-5 font-normal"
            >
              <Play className="mr-1.5 h-3 w-3" />
              Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-6 flex items-center gap-5 text-[11px] text-muted-foreground/60 tracking-wide"
        >
          <span>1,000+ Enterprise Clients</span>
          <span className="w-[1px] h-3 bg-border" />
          <span>North America · Europe · Japan · SEA</span>
        </motion.div>
      </div>
    </section>
  );
}
