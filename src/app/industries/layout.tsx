import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries — iKendo",
  description:
    "iKendo serves Finance, Insurance, Automotive, and SME industries with enterprise-grade conversational AI agents tailored to each domain.",
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
