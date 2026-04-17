import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in — iKendo BP",
  description: "Restricted investor brief access.",
};

export default function BpLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
