"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./animated-section";

interface StatProps {
  value: string;
  numericPart: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function AnimatedStat({ numericPart, prefix = "", suffix = "", label }: StatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const steps = 40;
          const increment = numericPart / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericPart) {
              setCount(numericPart);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericPart, hasAnimated]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-2xl md:text-3xl font-extralight tracking-tight text-foreground">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-[11px] text-muted-foreground/70 mt-1.5 uppercase tracking-[0.2em]">
        {label}
      </div>
    </div>
  );
}

const stats: StatProps[] = [
  { value: "1,000+", numericPart: 1000, suffix: "+", label: "Enterprise Clients" },
  { value: "6", numericPart: 6, label: "Languages Supported" },
  { value: "<800ms", numericPart: 800, prefix: "<", suffix: "ms", label: "Response Latency" },
  { value: "100%", numericPart: 100, suffix: "%", label: "Rule Compliance" },
];

export function StatsBar() {
  return (
    <AnimatedSection>
      <section className="py-14 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
