import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { Flywheel } from "@/components/flywheel";
import { FeatureGrid } from "@/components/feature-card";
import { IndustryStrip } from "@/components/industry-card";
import { Testimonials } from "@/components/testimonial";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Flywheel />
      <FeatureGrid />
      <IndustryStrip />
      <Testimonials />
      <CTASection />
    </>
  );
}
