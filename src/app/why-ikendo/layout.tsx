import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why iKendo — Enterprise Conversational Agent Platform",
  description: "What sets iKendo apart: voice-first architecture, sub-800ms latency, 100% rule compliance, and 5-minute cold start for enterprise conversation agents.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
