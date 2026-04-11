import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap — iKendo",
  description: "See what's next for iKendo. Our product roadmap shaped by the needs of 1,000+ enterprise clients across four continents.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
