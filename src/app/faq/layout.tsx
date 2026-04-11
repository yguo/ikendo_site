import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — iKendo",
  description: "Frequently asked questions about iKendo — setup, languages, compliance, channels, latency, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
