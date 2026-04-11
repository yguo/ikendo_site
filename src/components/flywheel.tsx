"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import {
  Brain,
  FlaskConical,
  Rocket,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    id: "train",
    title: "Train / Optimize",
    icon: Brain,
    color: "#8B3A2F",
    shortDesc: "Describe your business in natural language.",
    detail:
      "Just 5 minutes of conversation with our onboarding assistant cold-starts your agent. Define your workflows, tone, compliance rules, and domain knowledge — all through natural dialogue. No code. No flowcharts.",
    features: [
      "Natural language business description",
      "5-minute cold start",
      "Dynamic rule injection",
      "Multi-language voice profile setup",
    ],
  },
  {
    id: "test",
    title: "Test / Simulate",
    icon: FlaskConical,
    color: "#A0522D",
    shortDesc: "Validate before you deploy.",
    detail:
      "Run fully simulated conversations that mirror real-world scenarios. Test edge cases, long-tail queries, and adversarial inputs. See exactly how your agent responds before a single customer hears it.",
    features: [
      "End-to-end conversation simulation",
      "Edge case & stress testing",
      "A/B scenario comparison",
      "Compliance pre-check",
    ],
  },
  {
    id: "deploy",
    title: "Deploy / Launch",
    icon: Rocket,
    color: "#6B7280",
    shortDesc: "Go live across every channel.",
    detail:
      "Deploy to phone, chat, email, or any custom channel with a single click. Monitor conversations in real-time. The agent handles interruptions, background noise, and multi-turn dialogues with sub-800ms latency.",
    features: [
      "One-click multi-channel deployment",
      "Real-time monitoring dashboard",
      "Sub-800ms response latency",
      "Automatic background noise filtering",
    ],
  },
  {
    id: "analyze",
    title: "Analyze / Insights",
    icon: BarChart3,
    color: "#374151",
    shortDesc: "Refine continuously with AI insights.",
    detail:
      "Every conversation generates structured insights. Identify patterns, discover gaps, and let AI-powered recommendations automatically optimize your agent. The flywheel turns — each cycle sharper than the last.",
    features: [
      "AI-powered conversation analytics",
      "Automated improvement suggestions",
      "Key information extraction metrics",
      "Rule compliance audit trail",
    ],
  },
];

export function Flywheel() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
              The iKendo Flywheel
            </span>
            <h2 className="text-2xl md:text-3xl font-extralight tracking-tight mt-3">
              Four movements. One continuous discipline.
            </h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto font-extralight">
              Like the kata of kendo, each step flows into the next — a cycle
              of refinement that never ends.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Flywheel visual */}
            <div className="relative flex items-center justify-center">
              <svg
                viewBox="0 0 400 400"
                className="w-full max-w-[360px]"
                fill="none"
              >
                {/* Outer circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="170"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                {/* Inner circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="80"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                {/* Rotation indicator */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="170"
                  stroke="#8B3A2F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="120 950"
                  fill="none"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "200px 200px" }}
                />
                {/* Center text */}
                <text
                  x="200"
                  y="195"
                  textAnchor="middle"
                  className="fill-foreground text-[11px] font-medium"
                >
                  iKendo
                </text>
                <text
                  x="200"
                  y="212"
                  textAnchor="middle"
                  className="fill-muted-foreground text-[9px]"
                >
                  Lifecycle
                </text>

                {/* Step nodes */}
                {steps.map((step, i) => {
                  const angle = (i * 90 - 90) * (Math.PI / 180);
                  const cx = 200 + 170 * Math.cos(angle);
                  const cy = 200 + 170 * Math.sin(angle);
                  const isActive = i === activeStep;

                  return (
                    <g
                      key={step.id}
                      className="cursor-pointer"
                      onClick={() => setActiveStep(i)}
                    >
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isActive ? 28 : 22}
                        fill={isActive ? step.color : "var(--card)"}
                        stroke={isActive ? step.color : "var(--border)"}
                        strokeWidth={isActive ? 2 : 1}
                        className="transition-all duration-300"
                      />
                      <text
                        x={cx}
                        y={cy + 1}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className={`text-[9px] font-medium ${
                          isActive ? "fill-white" : "fill-muted-foreground"
                        }`}
                      >
                        {(i + 1).toString()}
                      </text>
                      <text
                        x={cx}
                        y={cy + (i === 0 ? -38 : i === 2 ? 42 : 0)}
                        dx={i === 1 ? 38 : i === 3 ? -38 : 0}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className={`text-[9px] ${
                          isActive
                            ? "fill-foreground font-medium"
                            : "fill-muted-foreground"
                        }`}
                      >
                        {step.title.split(" / ")[0]}
                      </text>
                    </g>
                  );
                })}

                {/* Connecting arcs */}
                {steps.map((_, i) => {
                  const startAngle = (i * 90 - 70) * (Math.PI / 180);
                  const endAngle = (i * 90 + 70) * (Math.PI / 180) - (90 * Math.PI) / 180;
                  const x1 = 200 + 130 * Math.cos(startAngle);
                  const y1 = 200 + 130 * Math.sin(startAngle);
                  const x2 = 200 + 130 * Math.cos(endAngle);
                  const y2 = 200 + 130 * Math.sin(endAngle);

                  return (
                    <path
                      key={`arc-${i}`}
                      d={`M ${x1} ${y1} A 130 130 0 0 1 ${x2} ${y2}`}
                      stroke="var(--border)"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="4 4"
                      opacity="0.5"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Right: Detail panel */}
            <div className="flex flex-col justify-center min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-md flex items-center justify-center"
                      style={{ backgroundColor: active.color + "12" }}
                    >
                      <ActiveIcon
                        className="w-4.5 h-4.5"
                        style={{ color: active.color }}
                      />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
                        Step {activeStep + 1} of 4
                      </span>
                      <h3 className="text-base font-light tracking-tight">
                        {active.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-extralight">
                    {active.detail}
                  </p>

                  <ul className="space-y-2.5">
                    {active.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[13px] text-foreground font-extralight"
                      >
                        <div
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: active.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              {/* Step navigation dots */}
              <div className="flex gap-2 mt-8">
                {steps.map((step, i) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeStep ? "w-8" : "w-1.5"
                    }`}
                    style={{
                      backgroundColor:
                        i === activeStep ? step.color : "var(--border)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
