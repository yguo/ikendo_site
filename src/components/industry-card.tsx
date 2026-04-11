"use client";

import { AnimatedSection } from "./animated-section";
import { Landmark, ShieldCheck, Car, Store } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: Landmark,
    title: "Finance",
    anchor: "finance",
    description:
      "Compliance-aware agents for account inquiries, risk disclosure, and onboarding workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    anchor: "insurance",
    description:
      "Claims processing, policy questions, and automated renewal outreach — with regulatory precision.",
  },
  {
    icon: Car,
    title: "Automotive & EV",
    anchor: "automotive",
    description:
      "Test drive scheduling, specification inquiries, and intelligent follow-up calls for modern dealerships.",
  },
  {
    icon: Store,
    title: "SME & E-commerce",
    anchor: "sme",
    description:
      "Customer support, order tracking, and outbound sales — enterprise capability at SME scale.",
  },
];

export function IndustryStrip() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
              Industries
            </span>
            <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mt-3">
              Where conversation meets commerce.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <AnimatedSection key={industry.title} delay={i * 0.1}>
                <Link href={`/industries#${industry.anchor}`}>
                  <div className="group border border-border rounded-lg p-6 hover:border-kendo/30 transition-all duration-300 h-full bg-card">
                    <Icon className="w-5 h-5 text-kendo mb-4" />
                    <h3 className="text-sm font-light tracking-tight mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed font-extralight">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
