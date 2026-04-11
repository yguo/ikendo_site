import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product — iKendo",
  description:
    "The iKendo Lifecycle: Train, Test, Deploy, Analyze. Four movements that form a continuous discipline for building enterprise conversation agents.",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
