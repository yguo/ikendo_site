"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import {
  Brain,
  FlaskConical,
  Rocket,
  BarChart3,
  ArrowRight,
  BookOpen,
  Route,
  ScrollText,
  BookMarked,
  Wrench,
  Database,
  Users,
  MessageSquare,
  Sparkles,
  Phone,
  MessageCircle,
  Mail,
  FileText,
  Lightbulb,
  RefreshCw,
  Search,
  AlertTriangle,
  Settings,
} from "lucide-react";

const steps = [
  {
    id: "train",
    title: "Train / Optimize",
    icon: Brain,
    color: "#8B3A2F",
    inputs: [
      { icon: ScrollText, label: "SOPs" },
      { icon: Route, label: "Journey" },
      { icon: BookMarked, label: "Guideline" },
      { icon: BookOpen, label: "Glossary" },
      { icon: Wrench, label: "Tools" },
      { icon: Database, label: "Knowledge" },
    ],
    inputLabel: "Enterprise Ontology & Business Rules",
    output: "Qualified Voice Agent",
    outputIcon: Brain,
    detail:
      "Lightweight enterprise ontology modeling — import your SOPs, customer journeys, guidelines, glossary, tool integrations, and knowledge base. iKendo transforms these into a fully configured, rule-compliant voice agent ready for qualification testing.",
  },
  {
    id: "test",
    title: "Test / Simulate",
    icon: FlaskConical,
    color: "#A0522D",
    inputs: [
      { icon: Users, label: "Customer Persona" },
      { icon: MessageSquare, label: "Agent Response" },
    ],
    inputLabel: "Simulated Dialogues",
    output: "Optimized Signals",
    outputIcon: Sparkles,
    detail:
      "Run end-to-end simulated conversations with diverse customer personas. Every agent response is evaluated — accuracy, tone, rule compliance, edge-case handling. The output: optimization signals that flow directly back to training, refining the agent before any customer hears it.",
  },
  {
    id: "deploy",
    title: "Deploy / Launch",
    icon: Rocket,
    color: "#6B7280",
    inputs: [
      { icon: Brain, label: "Qualified Agent" },
    ],
    inputLabel: "Qualified Voice Agent",
    output: "Production Runtime Agent",
    outputIcon: Rocket,
    channels: [
      { icon: Phone, label: "Phone" },
      { icon: MessageCircle, label: "Chat" },
      { icon: Mail, label: "Email" },
    ],
    detail:
      "The qualified agent goes live across every channel — phone, chat, email, and custom integrations. Multi-channel runtime with sub-800ms latency, real-time noise filtering, and interrupt handling. Every conversation is captured as history dialogue for continuous analysis.",
  },
  {
    id: "analyze",
    title: "Analyze & Insights",
    icon: BarChart3,
    color: "#374151",
    inputs: [
      { icon: FileText, label: "History Dialogue" },
    ],
    inputLabel: "Conversation History",
    output: "Optimized Suggestions",
    outputIcon: Lightbulb,
    suggestions: [
      { icon: Search, label: "Knowledge Gap" },
      { icon: AlertTriangle, label: "Guideline Gap" },
      { icon: Settings, label: "Ops Improvement" },
    ],
    detail:
      "Every conversation becomes evidence. Diagnostic rules analyze history dialogue to surface knowledge gaps, guideline failures, and operational bottlenecks. AI-generated optimization suggestions feed directly back into training — the flywheel turns, each cycle sharper than the last.",
  },
];

type Step = typeof steps[number];

function FlowingDots({ color, delay = 0, duration = 3 }: { color: string; delay?: number; duration?: number }) {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full"
      style={{ backgroundColor: color }}
      animate={{
        offsetDistance: ["0%", "100%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

function StageNode({ step, index, isActive, onClick }: { step: Step; index: number; isActive: boolean; onClick: () => void }) {
  const Icon = step.icon;
  const OutputIcon = step.outputIcon;

  return (
    <motion.div
      className={`relative cursor-pointer group ${isActive ? "z-10" : "z-0"}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Main stage card */}
      <div
        className={`relative rounded-xl border-2 transition-all duration-300 ${
          isActive
            ? "bg-card shadow-lg"
            : "bg-card/80 hover:bg-card hover:shadow-md"
        }`}
        style={{
          borderColor: isActive ? step.color : "var(--border)",
        }}
      >
        {/* Step number badge */}
        <div
          className="absolute -top-3 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium text-white shadow-sm"
          style={{ backgroundColor: step.color }}
        >
          {index + 1}
        </div>

        <div className="p-4">
          {/* Title row */}
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center"
              style={{ backgroundColor: step.color + "15" }}
            >
              <Icon className="w-3.5 h-3.5" style={{ color: step.color }} />
            </div>
            <h4 className="text-[13px] font-light tracking-tight">{step.title}</h4>
          </div>

          {/* Input section */}
          <div className="mb-3">
            <div className="text-[8px] uppercase tracking-widest text-muted-foreground/40 mb-1.5">Input</div>
            <div className="flex flex-wrap gap-1">
              {step.inputs.map((input) => {
                const IIcon = input.icon;
                return (
                  <div key={input.label} className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-secondary/80 text-[9px] text-muted-foreground">
                    <IIcon className="w-2.5 h-2.5" />
                    {input.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Output section */}
          <div>
            <div className="text-[8px] uppercase tracking-widest text-muted-foreground/40 mb-1.5">Output</div>
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-light"
              style={{ backgroundColor: step.color + "10", color: step.color }}
            >
              <OutputIcon className="w-3 h-3" />
              {step.output}
            </div>
          </div>

          {/* Deploy channels */}
          {"channels" in step && step.channels && (
            <div className="mt-2 flex gap-1">
              {step.channels.map((ch) => {
                const CIcon = ch.icon;
                return (
                  <div key={ch.label} className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-secondary/50 text-[9px] text-muted-foreground/60">
                    <CIcon className="w-2.5 h-2.5" />
                    {ch.label}
                  </div>
                );
              })}
            </div>
          )}

          {/* Insights suggestions */}
          {"suggestions" in step && step.suggestions && (
            <div className="mt-2 flex flex-col gap-1">
              {step.suggestions.map((s) => {
                const SIcon = s.icon;
                return (
                  <div key={s.label} className="flex items-center gap-1.5 text-[9px] text-muted-foreground/60">
                    <SIcon className="w-2.5 h-2.5" />
                    {s.label}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Flywheel() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
              The iKendo Flywheel
            </span>
            <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mt-3">
              Four movements. One continuous discipline.
            </h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-lg mx-auto font-extralight">
              Every signal flows. Every cycle improves. The flywheel captures optimization signals
              from testing and production, feeding them back into training — continuously sharpening your agent.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {/* Flywheel Diagram — full width */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center hub */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="relative">
                <motion.div
                  className="w-20 h-20 rounded-full border-2 border-kendo/20 flex items-center justify-center bg-background shadow-md"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-14 h-14 rounded-full border border-border flex flex-col items-center justify-center bg-card">
                    <RefreshCw className="w-4 h-4 text-kendo mb-0.5" />
                    <span className="text-[8px] font-medium text-foreground">iKendo</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Grid layout for 4 stages */}
            <div className="grid grid-cols-2 gap-x-32 gap-y-8 relative">
              {/* Row 1: Train → Test */}
              <StageNode step={steps[0]} index={0} isActive={activeStep === 0} onClick={() => setActiveStep(0)} />
              <StageNode step={steps[1]} index={1} isActive={activeStep === 1} onClick={() => setActiveStep(1)} />

              {/* Signal Flow Arrows — SVG overlay */}
              <div className="col-span-2 relative h-12">
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                  {/* Top arrow: Train → Test (Qualified Voice Agent) */}
                  <defs>
                    <marker id="arrowKendo" viewBox="0 0 10 7" refX="9" refY="3.5" markerWidth="8" markerHeight="6" orient="auto">
                      <path d="M 0 0 L 10 3.5 L 0 7 Z" fill="#8B3A2F" />
                    </marker>
                    <marker id="arrowGray" viewBox="0 0 10 7" refX="9" refY="3.5" markerWidth="8" markerHeight="6" orient="auto">
                      <path d="M 0 0 L 10 3.5 L 0 7 Z" fill="#6B7280" />
                    </marker>
                    <marker id="arrowOrange" viewBox="0 0 10 7" refX="9" refY="3.5" markerWidth="8" markerHeight="6" orient="auto">
                      <path d="M 0 0 L 10 3.5 L 0 7 Z" fill="#A0522D" />
                    </marker>
                  </defs>
                </svg>

                {/* Signal labels between rows */}
                <div className="absolute inset-0 flex items-center justify-center gap-16">
                  {/* Left: Deploy output → Insights input */}
                  <motion.div
                    className="flex flex-col items-center gap-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="text-[9px] text-muted-foreground/50 flex items-center gap-1">
                      <span>↓</span> History Dialogue
                    </div>
                  </motion.div>

                  {/* Center: The flywheel rotation indicator */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="text-kendo/30"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </motion.div>

                  {/* Right: Test output → back to Train */}
                  <motion.div
                    className="flex flex-col items-center gap-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    <div className="text-[9px] text-muted-foreground/50 flex items-center gap-1">
                      <span>↑</span> Qualified Agent
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Row 2: Insights ← Deploy (reversed visual order to create circular flow) */}
              <StageNode step={steps[3]} index={3} isActive={activeStep === 3} onClick={() => setActiveStep(3)} />
              <StageNode step={steps[2]} index={2} isActive={activeStep === 2} onClick={() => setActiveStep(2)} />
            </div>

            {/* Flow arrows — positioned absolutely */}
            {/* Top: Train → Test */}
            <div className="absolute top-[85px] left-[calc(50%-100px)] w-[200px] flex flex-col items-center pointer-events-none">
              <motion.div
                className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#8B3A2F]/8 text-[9px] text-[#8B3A2F] whitespace-nowrap"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Qualified Agent <ArrowRight className="w-3 h-3" />
              </motion.div>
            </div>

            {/* Right: Test → Deploy (Optimized Signals back to Train + qualified agent down) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none -mr-2">
              <motion.div
                className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#A0522D]/8 text-[9px] text-[#A0522D] whitespace-nowrap rotate-90"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Qualified Agent <ArrowRight className="w-3 h-3" />
              </motion.div>
            </div>

            {/* Bottom: Deploy → Insights (History Dialogue) */}
            <div className="absolute bottom-[85px] left-[calc(50%-100px)] w-[200px] flex flex-col items-center pointer-events-none">
              <motion.div
                className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#6B7280]/10 text-[9px] text-[#6B7280] whitespace-nowrap"
                animate={{ x: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-3 h-3 rotate-180" /> History Dialogue
              </motion.div>
            </div>

            {/* Left: Insights → Train (Optimized Suggestions — the main feedback!) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none -ml-2">
              <motion.div
                className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#8B3A2F]/10 text-[9px] text-[#8B3A2F] whitespace-nowrap -rotate-90 font-normal"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-3 h-3 rotate-180" /> Optimized Suggestions
              </motion.div>
            </div>

            {/* Inner feedback loop: Test → Train (Optimized Signals) */}
            <div className="absolute top-[40px] left-[calc(50%-50px)] w-[100px] flex flex-col items-center pointer-events-none">
              <motion.div
                className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#A0522D]/8 text-[8px] text-[#A0522D] whitespace-nowrap"
                animate={{ x: [0, -3, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <ArrowRight className="w-2.5 h-2.5 rotate-180" /> Optimized Signals
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Detail panel below */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-3xl mx-auto mt-16 border border-border rounded-xl bg-card/50 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: active.color + "12" }}
                  >
                    {(() => {
                      const ActiveIcon = active.icon;
                      return <ActiveIcon className="w-5 h-5" style={{ color: active.color }} />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                      Step {activeStep + 1} of 4
                    </span>
                    <h3 className="text-lg font-light tracking-tight">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed font-extralight mb-6">
                  {active.detail}
                </p>

                {/* Input → Output visual */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                  <div className="flex-1">
                    <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 mb-2">Input</div>
                    <div className="flex flex-wrap gap-1.5">
                      {active.inputs.map((input) => {
                        const IIcon = input.icon;
                        return (
                          <span key={input.label} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-card border border-border text-[10px] text-foreground font-extralight">
                            <IIcon className="w-3 h-3 text-muted-foreground/60" />
                            {input.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col items-center gap-1">
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" style={{ color: active.color }} />
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 mb-2">Output</div>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px] font-light"
                      style={{ backgroundColor: active.color + "12", color: active.color }}
                    >
                      {(() => {
                        const OIcon = active.outputIcon;
                        return <OIcon className="w-3.5 h-3.5" />;
                      })()}
                      {active.output}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Step navigation */}
            <div className="flex gap-2 mt-8 justify-center">
              {steps.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeStep ? "w-10" : "w-1.5"
                  }`}
                  style={{
                    backgroundColor:
                      i === activeStep ? step.color : "var(--border)",
                  }}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
