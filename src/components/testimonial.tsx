"use client";

import { AnimatedSection } from "./animated-section";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We deployed iKendo across our entire call center in a single afternoon. The accuracy on policy-specific questions exceeded what our previous solution achieved in six months.",
    author: "Head of Customer Operations",
    company: "Leading Insurance Provider, Japan",
  },
  {
    quote:
      "The multi-language support is remarkable. Our agents now handle English, Japanese, and Korean inquiries with native-level fluency — and the latency is imperceptible.",
    author: "VP of Digital Experience",
    company: "Global EV Manufacturer, Europe",
  },
  {
    quote:
      "What impressed us most is the rule compliance. Every response is auditable. In financial services, that's not a feature — it's a requirement.",
    author: "Chief Technology Officer",
    company: "Fintech Platform, North America",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
              Trusted Globally
            </span>
            <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mt-3">
              1,000+ enterprises across four continents.
            </h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto font-extralight">
              North America · Europe · Japan · Southeast Asia
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-lg p-6 h-full flex flex-col">
                <Quote className="w-4 h-4 text-kendo/30 mb-4" />
                <p className="text-[13px] text-foreground leading-relaxed flex-1 mb-6 font-extralight">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <div className="text-[13px] font-light">{testimonial.author}</div>
                  <div className="text-[11px] text-muted-foreground/60 mt-0.5">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
