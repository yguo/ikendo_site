"use client";

import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { CheckCircle2, Circle, Clock } from "lucide-react";

type Status = "done" | "current" | "upcoming";

const roadmapItems: {
  quarter: string;
  status: Status;
  title: string;
  items: string[];
}[] = [
  {
    quarter: "Q1 2026",
    status: "done",
    title: "Foundation",
    items: [
      "Multi-language voice engine (EN, ZH, JA, KO, DE, ES)",
      "5-minute cold start onboarding flow",
      "Dynamic rule loading engine",
      "Simulation & testing framework",
      "Real-time monitoring dashboard",
    ],
  },
  {
    quarter: "Q2 2026",
    status: "current",
    title: "Enterprise Scale",
    items: [
      "Advanced analytics & conversation insights",
      "Custom voice cloning (production-grade)",
      "Salesforce & HubSpot CRM integrations",
      "SOC 2 Type II certification",
      "Team collaboration & role-based access",
    ],
  },
  {
    quarter: "Q3 2026",
    status: "upcoming",
    title: "Intelligence",
    items: [
      "AI-powered auto-optimization from conversation data",
      "Sentiment analysis & emotional intelligence",
      "Multi-agent orchestration",
      "Knowledge base auto-sync",
      "WhatsApp & LINE channel support",
    ],
  },
  {
    quarter: "Q4 2026",
    status: "upcoming",
    title: "Platform",
    items: [
      "Developer API & SDK (Python, Node.js)",
      "Marketplace for pre-built agent templates",
      "On-premise deployment option",
      "Advanced compliance reporting suite",
      "Additional languages (FR, PT, TH, VI)",
    ],
  },
];

function StatusIcon({ status }: { status: Status }) {
  if (status === "done")
    return <CheckCircle2 className="w-4.5 h-4.5 text-kendo" />;
  if (status === "current")
    return <Clock className="w-4.5 h-4.5 text-kendo animate-pulse" />;
  return <Circle className="w-4.5 h-4.5 text-muted-foreground/30" />;
}

function statusLabel(status: Status) {
  if (status === "done") return "Shipped";
  if (status === "current") return "In Progress";
  return "Planned";
}

export default function RoadmapPage() {
  return (
    <>
      <section className="pt-28 pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
                Roadmap
              </span>
              <h1 className="text-3xl md:text-4xl font-extralight tracking-tight mt-3 mb-5">
                Where the blade is headed.
              </h1>
              <p className="text-sm text-muted-foreground font-extralight leading-relaxed">
                Transparency in our direction. Every feature is shaped by the
                needs of our 1,000+ enterprise clients.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-[1px] bg-border" />

            <div className="space-y-16">
              {roadmapItems.map((item, i) => (
                <AnimatedSection key={item.quarter} delay={i * 0.1}>
                  <div className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0.5 bg-background p-1">
                      <StatusIcon status={item.status} />
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-lg font-extralight tracking-tight">
                        {item.quarter}
                      </span>
                      <span className="text-[11px] text-kendo font-normal">
                        — {item.title}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${
                          item.status === "done"
                            ? "bg-kendo/10 text-kendo"
                            : item.status === "current"
                            ? "bg-kendo/10 text-kendo"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {statusLabel(item.status)}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {item.items.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-[13px] font-extralight text-foreground"
                        >
                          <div
                            className={`w-1 h-1 rounded-full mt-2 shrink-0 ${
                              item.status === "done"
                                ? "bg-kendo"
                                : item.status === "current"
                                ? "bg-kendo/60"
                                : "bg-muted-foreground/30"
                            }`}
                          />
                          <span
                            className={
                              item.status === "upcoming"
                                ? "text-muted-foreground"
                                : ""
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
