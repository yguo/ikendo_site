"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-28 bg-secondary/50 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="cta-lines"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="#8B3A2F"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-lines)" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[13px] text-kendo/80 italic mb-6 max-w-sm mx-auto font-extralight">
            &ldquo;Every response has a lineage. Every conversation, a
            purpose. The blade does not question — it serves the hand that
            wields it.&rdquo;
          </p>

          <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mb-4 text-foreground">
            Begin the discipline.
          </h2>

          <p className="text-sm text-muted-foreground mb-10 max-w-md mx-auto font-extralight">
            Build your first enterprise conversation agent in 5 minutes.
            No code required. Just describe your business — iKendo does the
            rest.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Button className="bg-[#8B3A2F] hover:bg-[#A0522D] text-white text-xs px-7 h-9 rounded-md font-normal tracking-wide">
              Start Building
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-accent text-xs h-9 px-6 font-normal tracking-wide"
            >
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
