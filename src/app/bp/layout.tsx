import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iKendo BP — Investor Brief",
  description:
    "Investor-facing business plan for iKendo, covering enterprise voice agents, market strategy, moat, GTM, funding allocation, and milestones.",
};

export default function BpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
