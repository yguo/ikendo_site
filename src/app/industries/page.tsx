"use client";

import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import {
  Landmark,
  ShieldCheck,
  Car,
  Store,
  CheckCircle2,
  Quote,
} from "lucide-react";

const industries = [
  {
    id: "finance",
    icon: Landmark,
    title: "Finance & Banking",
    subtitle: "Precision where trust is currency",
    description:
      "Financial conversations demand exactness. A misquoted rate, a missed disclosure, or an ambiguous answer erodes trust instantly. iKendo agents are built for the rigor of financial services — every response traceable, every rule enforced, every interaction auditable.",
    useCases: [
      "Account balance and transaction inquiries",
      "Loan pre-qualification and rate quoting",
      "Risk disclosure and compliance statements",
      "Fraud alert verification and account security",
      "New account onboarding and KYC workflows",
      "Payment scheduling and reminders",
    ],
    quote:
      "We reduced our compliance review burden by 60% after deploying iKendo. Every response is traceable to its source policy.",
    quoteAuthor: "Chief Risk Officer — Digital Banking Platform, Singapore",
    stats: [
      { value: "99.8%", label: "Disclosure Accuracy" },
      { value: "45s", label: "Avg Resolution Time" },
      { value: "100%", label: "Audit Compliance" },
    ],
  },
  {
    id: "insurance",
    icon: ShieldCheck,
    title: "Insurance",
    subtitle: "Claims, policies, and the human touch",
    description:
      "Insurance conversations are emotional. A policyholder filing a claim after an accident needs empathy and efficiency in equal measure. iKendo agents navigate complex policy trees while maintaining the warmth and patience that these moments require.",
    useCases: [
      "First notice of loss (FNOL) intake",
      "Policy coverage inquiries and comparisons",
      "Claims status tracking and updates",
      "Renewal reminders and outbound campaigns",
      "Pre-authorization and document collection",
      "Premium calculation and payment processing",
    ],
    quote:
      "Our FNOL completion rate went from 67% to 94% in the first month. The agent handles even the most distressed callers with remarkable composure.",
    quoteAuthor: "VP of Claims Operations — Insurance Group, Japan",
    stats: [
      { value: "94%", label: "FNOL Completion" },
      { value: "3min", label: "Avg Claim Intake" },
      { value: "24/7", label: "Availability" },
    ],
  },
  {
    id: "automotive",
    icon: Car,
    title: "Automotive & EV",
    subtitle: "From showroom to driveway, digitally",
    description:
      "The modern car buyer starts their journey online and expects immediate, knowledgeable responses. iKendo agents handle everything from specification inquiries and test drive scheduling to financing discussions and follow-up calls — with the product knowledge of your best salesperson.",
    useCases: [
      "Vehicle specification and comparison inquiries",
      "Test drive scheduling and confirmation",
      "Financing pre-qualification and rate discussion",
      "Inventory availability and wait time updates",
      "Post-purchase follow-up and service scheduling",
      "Outbound lead nurturing and re-engagement",
    ],
    quote:
      "iKendo handles 40% of our inbound inquiries end-to-end. The test drive conversion rate from AI-handled calls actually exceeds our human team.",
    quoteAuthor: "Head of Digital Sales — EV Manufacturer, Europe",
    stats: [
      { value: "40%", label: "Full Automation" },
      { value: "2.3x", label: "Lead Response Speed" },
      { value: "28%", label: "Test Drive Conversion Lift" },
    ],
  },
  {
    id: "sme",
    icon: Store,
    title: "SME & E-commerce",
    subtitle: "Enterprise capability at SME scale",
    description:
      "Small and mid-sized businesses need the customer experience of a Fortune 500 company without the Fortune 500 budget. iKendo gives growing businesses AI-powered support, sales, and outreach capabilities that scale with them — deploy in an afternoon, see results by morning.",
    useCases: [
      "Customer support and FAQ handling",
      "Order tracking and delivery status updates",
      "Product recommendation and upselling",
      "Return and refund processing",
      "Outbound sales and appointment setting",
      "After-sales follow-up and satisfaction surveys",
    ],
    quote:
      "We're a 200-person company competing with giants. iKendo gives us 24/7 multilingual support that our customers can't distinguish from a dedicated team.",
    quoteAuthor: "CEO — E-commerce Platform, Southeast Asia",
    stats: [
      { value: "5min", label: "Setup Time" },
      { value: "73%", label: "Automation Rate" },
      { value: "6", label: "Languages" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kendo font-medium">
                Industries
              </span>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight mt-3 mb-4">
                Where conversations shape business.
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From regulated financial services to fast-moving e-commerce,
                iKendo adapts to the discipline each domain demands.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industry sections */}
      {industries.map((industry, i) => {
        const Icon = industry.icon;
        return (
          <section
            key={industry.id}
            id={industry.id}
            className={`py-20 ${i % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                  {/* Left: Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-kendo/8 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-kendo" />
                      </div>
                      <div>
                        <h2 className="text-xl font-medium tracking-tight">
                          {industry.title}
                        </h2>
                        <p className="text-[11px] text-muted-foreground italic">
                          {industry.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                      {industry.description}
                    </p>

                    {/* Use cases */}
                    <div className="space-y-2.5 mb-8">
                      {industry.useCases.map((useCase) => (
                        <div
                          key={useCase}
                          className="flex items-start gap-2.5 text-xs text-foreground"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-kendo shrink-0 mt-0.5" />
                          {useCase}
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {industry.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="text-center p-3 bg-card border border-border rounded-lg"
                        >
                          <div className="text-lg font-light text-kendo">
                            {stat.value}
                          </div>
                          <div className="text-[10px] text-muted-foreground mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Quote */}
                  <div className="flex items-center">
                    <div className="bg-card border border-border rounded-lg p-8 h-fit">
                      <Quote className="w-5 h-5 text-kendo/30 mb-4" />
                      <p className="text-sm text-foreground leading-relaxed mb-6 italic">
                        &ldquo;{industry.quote}&rdquo;
                      </p>
                      <div className="border-t border-border pt-4">
                        <div className="text-xs text-muted-foreground">
                          {industry.quoteAuthor}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
