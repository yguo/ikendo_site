import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { KendoStrike } from "@/components/kendo-strike";

const sora = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/sora-latin.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/sora-latin-ext.woff2",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "iKendo — Enterprise Conversational Agent Platform",
  description:
    "Build enterprise-grade conversational agents in minutes. iKendo is a lightweight, all-in-one platform for training, testing, deploying, and analyzing voice and chat agents.",
  keywords: [
    "conversational AI",
    "voice agent",
    "enterprise chatbot",
    "AI agent platform",
    "customer service AI",
  ],
  openGraph: {
    title: "iKendo — Enterprise Conversational Agent Platform",
    description:
      "Build enterprise-grade conversational agents in minutes. Train, test, deploy, and analyze with precision.",
    type: "website",
    url: "https://ikendo.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-extralight">
        <KendoStrike />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
