"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import {
  TrainScreenshot,
  SimulationScreenshot,
  DeployScreenshot,
  InsightsScreenshot,
} from "@/components/product-screenshots";
import {
  Brain,
  FlaskConical,
  Rocket,
  BarChart3,
  Zap,
  Globe,
  VolumeX,
  FileCheck,
  Clock,
  ArrowDown,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";

const lifecycleSteps = [
  {
    id: "train",
    step: "01",
    icon: Brain,
    title: "Train / Optimize",
    subtitle: "From silence to readiness",
    description:
      "The first stroke is always the most important. Describe your business in natural language — your workflows, your tone, your rules. In 5 minutes of dialogue with our onboarding assistant, your agent is born. Not from code, but from intent.",
    quote:
      "\"The beauty of the sword lies not in its sharpness, but in the certainty of the hand that holds it.\"",
    features: [
      { icon: MessageCircle, title: "Natural Language Onboarding", desc: "Describe your business goals in plain words. No flowcharts, no code." },
      { icon: Clock, title: "5-Minute Cold Start", desc: "From zero to a functioning agent in a single conversation." },
      { icon: Globe, title: "Multi-Language Voice Profiles", desc: "Set up voices in English, Chinese, Japanese, Korean, German, and Spanish." },
      { icon: FileCheck, title: "Dynamic Rule Injection", desc: "Business rules loaded on-the-fly. Updated without redeployment." },
    ],
    screenshot: <TrainScreenshot />,
  },
  {
    id: "test",
    step: "02",
    icon: FlaskConical,
    title: "Test / Simulate",
    subtitle: "Practice before the duel",
    description:
      "No swordmaster enters combat without practice. Run end-to-end simulated conversations that mirror your real customers — their frustrations, their edge cases, their unexpected questions. See exactly how your agent will respond before a single customer hears it.",
    quote:
      "\"Perfection is not the absence of error, but the presence of discipline in every rehearsal.\"",
    features: [
      { icon: FlaskConical, title: "Full Conversation Simulation", desc: "End-to-end dialogue testing from greeting to resolution." },
      { icon: Zap, title: "Stress Testing", desc: "Edge cases, adversarial inputs, and long-tail scenarios." },
      { icon: BarChart3, title: "A/B Scenario Comparison", desc: "Compare different agent configurations side by side." },
      { icon: FileCheck, title: "Compliance Pre-Check", desc: "Validate regulatory adherence before deployment." },
    ],
    screenshot: <SimulationScreenshot />,
  },
  {
    id: "deploy",
    step: "03",
    icon: Rocket,
    title: "Deploy / Launch",
    subtitle: "The blade meets the world",
    description:
      "One click. Every channel. Your agent goes live on phone, chat, email, or any custom integration. Real-time monitoring ensures you see every conversation as it happens. Sub-800ms latency means your customers never wait.",
    quote:
      "\"Action is the highest form of thought. Hesitation is the only true failure.\"",
    features: [
      { icon: Rocket, title: "One-Click Multi-Channel", desc: "Deploy to phone, chat, email, and custom channels simultaneously." },
      { icon: Clock, title: "Sub-800ms Latency", desc: "Responses arrive before the pause feels unnatural." },
      { icon: VolumeX, title: "Noise Filtering", desc: "Background noise automatically filtered in real-time." },
      { icon: Zap, title: "Interrupt Handling", desc: "Users can interrupt at any moment. The agent adapts instantly." },
    ],
    screenshot: <DeployScreenshot />,
  },
  {
    id: "analyze",
    step: "04",
    icon: BarChart3,
    title: "Analyze / Insights",
    subtitle: "Reflection sharpens the blade",
    description:
      "Every conversation generates structured insights. AI-powered analysis reveals patterns, gaps, and opportunities. Automated recommendations feed back into training — the flywheel turns, and each cycle is sharper than the last.",
    quote:
      "\"The warrior who reflects is more dangerous than the one who merely acts.\"",
    features: [
      { icon: BarChart3, title: "Conversation Analytics", desc: "Deep analysis of every dialogue — sentiment, resolution, patterns." },
      { icon: Brain, title: "Auto-Optimization", desc: "AI suggests improvements that feed directly back into training." },
      { icon: FileCheck, title: "Compliance Audit Trail", desc: "Every response traceable to its source rules and knowledge base." },
      { icon: Zap, title: "Key Info Extraction", desc: "Automatic extraction of names, dates, addresses, and entities." },
    ],
    screenshot: <InsightsScreenshot />,
  },
];

function ArchitectureDiagram() {
  return (
    <AnimatedSection>
      <div className="py-24 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
              Architecture
            </span>
            <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mt-3 text-foreground">
              Where iKendo lives in your stack.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 text-xs">
            <div className="bg-card border border-border rounded-lg p-5 w-full md:w-48 text-center">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Your Business</div>
              <div className="space-y-2 text-muted-foreground">
                <div className="bg-secondary rounded px-3 py-1.5">Rules & Policies</div>
                <div className="bg-secondary rounded px-3 py-1.5">Knowledge Base</div>
                <div className="bg-secondary rounded px-3 py-1.5">CRM & APIs</div>
              </div>
            </div>

            <ArrowDown className="w-4 h-4 text-muted-foreground md:rotate-[-90deg]" />

            <div className="bg-[#8B3A2F]/5 border border-[#8B3A2F]/20 rounded-lg p-5 w-full md:w-56 text-center">
              <div className="text-[10px] uppercase tracking-widest text-kendo mb-3">iKendo Engine</div>
              <div className="space-y-2">
                <div className="bg-[#8B3A2F]/10 rounded px-3 py-1.5 text-foreground">Dynamic Rule Loading</div>
                <div className="bg-[#8B3A2F]/10 rounded px-3 py-1.5 text-foreground">Voice Synthesis & ASR</div>
                <div className="bg-[#8B3A2F]/10 rounded px-3 py-1.5 text-foreground">Conversation Orchestrator</div>
                <div className="bg-[#8B3A2F]/10 rounded px-3 py-1.5 text-foreground">Analytics Engine</div>
              </div>
            </div>

            <ArrowDown className="w-4 h-4 text-muted-foreground md:rotate-[-90deg]" />

            <div className="bg-card border border-border rounded-lg p-5 w-full md:w-48 text-center">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Your Customers</div>
              <div className="space-y-2 text-muted-foreground">
                <div className="bg-secondary rounded px-3 py-1.5 flex items-center justify-center gap-2"><Phone className="w-3 h-3" /> Phone</div>
                <div className="bg-secondary rounded px-3 py-1.5 flex items-center justify-center gap-2"><MessageCircle className="w-3 h-3" /> Chat</div>
                <div className="bg-secondary rounded px-3 py-1.5 flex items-center justify-center gap-2"><Mail className="w-3 h-3" /> Email</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function TechAdvantages() {
  const advantages = [
    { icon: Clock, value: "<800ms", label: "Response Latency", desc: "End-to-end processing including ASR, reasoning, and TTS." },
    { icon: FileCheck, value: "100%", label: "Rule Compliance", desc: "Dynamic rule loading with full traceability and audit." },
    { icon: Globe, value: "6", label: "Languages", desc: "EN, ZH, JA, KO, DE, ES with native-quality voice synthesis." },
    { icon: VolumeX, value: "Auto", label: "Noise Filtering", desc: "Real-time background noise suppression on all voice channels." },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">Technical Edge</span>
            <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mt-3">Engineered for precision.</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <AnimatedSection key={adv.label} delay={i * 0.1}>
                <div className="text-center p-6 border border-border rounded-lg bg-card">
                  <Icon className="w-5 h-5 text-kendo mx-auto mb-3" />
                  <div className="text-2xl font-extralight tracking-tight mb-1">{adv.value}</div>
                  <div className="text-xs font-light mb-2">{adv.label}</div>
                  <p className="text-[11px] text-muted-foreground font-extralight">{adv.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
                Product
              </span>
              <h1 className="text-3xl md:text-4xl font-extralight tracking-tight mt-3 mb-4">
                The iKendo Lifecycle
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed font-extralight">
                From first word to mastery. Four movements that form a
                continuous discipline — each cycle sharper than the last.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lifecycle steps */}
      {lifecycleSteps.map((step, i) => {
        const isEven = i % 2 === 0;

        return (
          <section
            key={step.id}
            id={step.id}
            className={`py-20 ${isEven ? "bg-background" : "bg-secondary/50"}`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <AnimatedSection>
                {/* Step header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl font-extralight text-muted-foreground/30">
                    {step.step}
                  </span>
                  <div>
                    <h2 className="text-xl font-light tracking-tight">
                      {step.title}
                    </h2>
                    <p className="text-[11px] text-muted-foreground/60 italic">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                {/* Screenshot — full width */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-10"
                >
                  {step.screenshot}
                </motion.div>

                {/* Description + features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-extralight">
                      {step.description}
                    </p>
                    <p className="text-xs text-kendo/60 italic font-extralight">
                      {step.quote}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.features.map((feature) => {
                      const FIcon = feature.icon;
                      return (
                        <div key={feature.title} className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-md bg-kendo/8 flex items-center justify-center shrink-0 mt-0.5">
                            <FIcon className="w-3.5 h-3.5 text-kendo" />
                          </div>
                          <div>
                            <div className="text-xs font-light mb-0.5">{feature.title}</div>
                            <div className="text-[11px] text-muted-foreground leading-relaxed font-extralight">{feature.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>

              {i < lifecycleSteps.length - 1 && (
                <div className="flex justify-center mt-14">
                  <ArrowDown className="w-4 h-4 text-border" />
                </div>
              )}
            </div>
          </section>
        );
      })}

      <ArchitectureDiagram />
      <TechAdvantages />
      <CTASection />
    </>
  );
}
