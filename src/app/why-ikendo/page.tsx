"use client";

import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import {
  Zap,
  Shield,
  Globe,
  Clock,
  AudioLines,
  Brain,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const differentiators = [
  {
    icon: AudioLines,
    title: "Voice-First Architecture",
    description:
      "Built from the ground up for voice conversations — not bolted onto a chatbot. Ultra-natural voice synthesis across 6 languages with custom voice cloning in under 5 minutes.",
  },
  {
    icon: Clock,
    title: "Sub-800ms Latency",
    description:
      "End-to-end processing — ASR, reasoning, and TTS — completes in under 800 milliseconds. Conversations feel natural because they are natural.",
  },
  {
    icon: Shield,
    title: "100% Rule Compliance",
    description:
      "Dynamic rule loading at the architecture level, not prompt-based. Every response is traceable, auditable, and explainable. Zero deviation from your business logic.",
  },
  {
    icon: Brain,
    title: "5-Minute Cold Start",
    description:
      "Describe your business in natural language. No flowcharts, no decision trees, no code. A functioning enterprise agent in a single conversation.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Turn Coherence",
    description:
      "Even after dozens of turns — with topic switches, corrections, and interruptions — the agent stays on track and extracts key entities with precision.",
  },
  {
    icon: Globe,
    title: "True Multi-Language",
    description:
      "Not translation-on-top. Native-quality voice and understanding in English, Chinese, Japanese, Korean, German, and Spanish.",
  },
];

const whyPoints = [
  "Interruptible conversations — users can cut in at any moment",
  "Automatic background noise filtering on all voice channels",
  "Long-tail scenario handling for edge cases and unusual requests",
  "Key information extraction — names, dates, addresses, reference numbers",
  "Full conversation analytics with AI-powered improvement suggestions",
  "One-click deployment across phone, chat, email, and custom channels",
  "Continuous flywheel: Train → Test → Deploy → Analyze → Improve",
  "Enterprise-grade security and compliance for regulated industries",
];

export default function WhyIKendoPage() {
  return (
    <>
      <section className="pt-28 pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
                Why iKendo
              </span>
              <h1 className="text-3xl md:text-4xl font-extralight tracking-tight mt-3 mb-5">
                The discipline of building{" "}
                <span className="text-kendo font-light">
                  conversation agents
                </span>{" "}
                that work.
              </h1>
              <p className="text-[15px] text-muted-foreground font-extralight leading-relaxed max-w-xl">
                Most conversational AI breaks in the real world. Calls are
                noisy, customers interrupt, edge cases multiply, compliance
                demands are absolute. iKendo was built for this reality —
                where every word must earn trust.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-extralight tracking-tight">
                What sets iKendo apart.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.08}>
                  <div className="bg-card border border-border rounded-lg p-6 h-full">
                    <div className="w-9 h-9 rounded-md bg-kendo/8 flex items-center justify-center mb-4">
                      <Icon className="w-4.5 h-4.5 text-kendo" />
                    </div>
                    <h3 className="text-sm font-light tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed font-extralight">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
                  The Full Picture
                </span>
                <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mt-3 mb-6">
                  Enterprise-grade, out of the box.
                </h2>
                <p className="text-sm text-muted-foreground font-extralight leading-relaxed">
                  iKendo is a complete lifecycle platform — not a toolkit
                  that requires months of engineering. From cold start to
                  production in minutes, with continuous improvement built
                  into the architecture.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-3">
                {whyPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 text-[13px] text-foreground font-extralight"
                  >
                    <CheckCircle2 className="w-4 h-4 text-kendo shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "1,000+", label: "Enterprise Clients" },
                { value: "<800ms", label: "Response Latency" },
                { value: "6", label: "Languages" },
                { value: "5 min", label: "To First Agent" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-extralight tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground/70 mt-1.5 uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
