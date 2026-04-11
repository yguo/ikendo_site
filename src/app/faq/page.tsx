"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does it take to set up an agent?",
    a: "About 5 minutes. You describe your business in natural language through a conversation with our onboarding assistant. No code, no flowcharts. iKendo generates your agent configuration — including conversation flows, business rules, and voice profiles — from that dialogue.",
  },
  {
    q: "What languages does iKendo support?",
    a: "iKendo currently supports English, Chinese (Mandarin), Japanese, Korean, German, and Spanish — with native-quality voice synthesis and understanding in each. Additional languages including French, Portuguese, Thai, and Vietnamese are on our roadmap.",
  },
  {
    q: "How does iKendo ensure 100% rule compliance?",
    a: "Unlike prompt-based approaches where rules can be ignored or overridden, iKendo uses dynamic rule loading at the architecture level. Rules are enforced structurally — not suggested. Every response is traceable to its source rules, creating a full audit trail.",
  },
  {
    q: "What channels can I deploy to?",
    a: "iKendo supports phone (inbound and outbound), web chat, email, and custom channels via API. You can deploy to multiple channels simultaneously with a single click. WhatsApp and LINE support are coming in Q3 2026.",
  },
  {
    q: "What is the response latency?",
    a: "Sub-800 milliseconds end-to-end — that includes automatic speech recognition, reasoning, and text-to-speech synthesis. In most production environments, our average latency is around 600ms, which feels completely natural in conversation.",
  },
  {
    q: "Can users interrupt the agent mid-sentence?",
    a: "Yes. iKendo's barge-in detection responds within 200 milliseconds. The agent gracefully yields or adapts when interrupted — just like a human would. This is critical for natural-feeling voice conversations.",
  },
  {
    q: "How does iKendo handle background noise?",
    a: "Our voice pipeline includes real-time noise suppression that filters background noise before it reaches the speech recognition engine. This dramatically improves accuracy in real-world conditions — cars, offices, train stations, busy streets.",
  },
  {
    q: "What industries does iKendo serve?",
    a: "We have deep expertise in finance, insurance, automotive (especially EV sales), and e-commerce / SME. Our platform is industry-agnostic, though — any business where conversations happen can benefit from iKendo.",
  },
  {
    q: "How does the continuous improvement flywheel work?",
    a: "Every conversation generates structured data. Our Analyze module surfaces patterns, gaps, and opportunities automatically. AI-powered recommendations feed back into training — so your agent improves with every cycle. The four stages — Train, Test, Deploy, Analyze — form a continuous loop.",
  },
  {
    q: "Is iKendo suitable for regulated industries?",
    a: "Absolutely. 100% rule compliance, full audit trails, and conversation-level traceability are core features — not add-ons. We serve major financial institutions and insurance companies in markets with strict regulatory requirements.",
  },
  {
    q: "What size companies use iKendo?",
    a: "Our core market is mid-size enterprises with 1,000 to 50,000 employees. We serve over 1,000 companies across North America, Europe, Japan, and Southeast Asia. Our platform scales from a single agent to enterprise-wide deployment.",
  },
  {
    q: "Can I customize the voice of my agent?",
    a: "Yes. iKendo offers custom voice cloning — create a unique voice profile for your brand in under 5 minutes. You can also choose from our library of pre-built voices across all supported languages.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm font-light tracking-tight pr-8 group-hover:text-kendo transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-[13px] text-muted-foreground font-extralight leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="pt-28 pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
                FAQ
              </span>
              <h1 className="text-3xl md:text-4xl font-extralight tracking-tight mt-3 mb-5">
                Frequently asked questions.
              </h1>
              <p className="text-sm text-muted-foreground font-extralight leading-relaxed">
                Everything you need to know about iKendo. Can&apos;t find what
                you&apos;re looking for?{" "}
                <a
                  href="/contact"
                  className="text-kendo hover:underline"
                >
                  Get in touch
                </a>
                .
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="border-t border-border">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
