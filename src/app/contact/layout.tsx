import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — iKendo",
  description: "Get in touch with the iKendo team. Offices in San Francisco, London, Tokyo, and Singapore.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
