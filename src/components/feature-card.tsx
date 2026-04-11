"use client";

import { AnimatedSection } from "./animated-section";
import {
  AudioLines,
  Clock,
  Mic,
  MessageSquare,
  Shield,
  Users,
} from "lucide-react";

const features = [
  {
    icon: AudioLines,
    title: "Ultra-Natural Voice",
    description:
      "Human-like voice synthesis across 6 languages — English, Chinese, Japanese, Korean, German, and Spanish. Custom voice cloning in under 5 minutes.",
  },
  {
    icon: Clock,
    title: "Sub-800ms Latency",
    description:
      "Responses arrive before the pause feels unnatural. Real-time processing ensures conversations flow without hesitation.",
  },
  {
    icon: Mic,
    title: "Interruptible & Noise-Aware",
    description:
      "Users can interrupt at any moment. Background noise is automatically filtered so the agent hears only what matters.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Turn Coherence",
    description:
      "Even after dozens of turns, the agent stays on track. Accurate extraction of names, times, addresses, and key entities throughout.",
  },
  {
    icon: Users,
    title: "Long-Tail Coverage",
    description:
      "Edge cases and unusual requests don't break the flow. The agent handles the unexpected with grace and fallback intelligence.",
  },
  {
    icon: Shield,
    title: "100% Rule Compliance",
    description:
      "Dynamic rule loading ensures every response is traceable and explainable. Full audit trail. Zero deviation from business logic.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
              Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mt-3">
              Precision in every syllable.
            </h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto font-extralight">
              The swordmaster does not think about the blade — the blade
              becomes an extension of intent. So too with iKendo.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={feature.title} delay={i * 0.08}>
                <div className="group bg-card border border-border rounded-lg p-6 hover:border-kendo/30 hover:shadow-sm transition-all duration-300 h-full">
                  <div className="w-8 h-8 rounded-md bg-kendo/8 flex items-center justify-center mb-4 group-hover:bg-kendo/15 transition-colors">
                    <Icon className="w-4 h-4 text-kendo" />
                  </div>
                  <h3 className="text-sm font-light tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed font-extralight">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
