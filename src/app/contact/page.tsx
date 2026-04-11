"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const offices = [
  {
    region: "North America",
    city: "San Francisco, CA",
    email: "na@ikendo.ai",
  },
  {
    region: "Europe",
    city: "London, UK",
    email: "eu@ikendo.ai",
  },
  {
    region: "Japan",
    city: "Tokyo, JP",
    email: "jp@ikendo.ai",
  },
  {
    region: "Southeast Asia",
    city: "Singapore, SG",
    email: "sea@ikendo.ai",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.3em] text-kendo font-normal">
                Contact
              </span>
              <h1 className="text-3xl md:text-4xl font-extralight tracking-tight mt-3 mb-5">
                Let&apos;s begin the conversation.
              </h1>
              <p className="text-sm text-muted-foreground font-extralight leading-relaxed">
                Whether you&apos;re ready to deploy or just exploring —
                we&apos;d love to hear from you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <AnimatedSection>
              <div>
                <h2 className="text-xl font-extralight tracking-tight mb-6">
                  Send us a message.
                </h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-border rounded-md px-3 py-2 text-sm bg-card font-extralight focus:outline-none focus:border-kendo/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-border rounded-md px-3 py-2 text-sm bg-card font-extralight focus:outline-none focus:border-kendo/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
                      Work Email
                    </label>
                    <input
                      type="email"
                      className="w-full border border-border rounded-md px-3 py-2 text-sm bg-card font-extralight focus:outline-none focus:border-kendo/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full border border-border rounded-md px-3 py-2 text-sm bg-card font-extralight focus:outline-none focus:border-kendo/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border border-border rounded-md px-3 py-2 text-sm bg-card font-extralight focus:outline-none focus:border-kendo/40 transition-colors resize-none"
                    />
                  </div>
                  <Button className="bg-kendo hover:bg-kendo-light text-white text-xs px-6 h-9 font-normal tracking-wide">
                    Send Message
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Office locations */}
            <AnimatedSection delay={0.15}>
              <div>
                <h2 className="text-xl font-extralight tracking-tight mb-6">
                  Our offices.
                </h2>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div
                      key={office.region}
                      className="border border-border rounded-lg p-5 bg-card"
                    >
                      <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-2">
                        {office.region}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-light mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-kendo" />
                        {office.city}
                      </div>
                      <div className="flex items-center gap-2 text-[13px] text-muted-foreground font-extralight">
                        <Mail className="w-3.5 h-3.5 text-muted-foreground/50" />
                        <a
                          href={`mailto:${office.email}`}
                          className="hover:text-kendo transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 border border-kendo/20 rounded-lg bg-kendo/5">
                  <p className="text-sm font-light mb-1">
                    Prefer a live conversation?
                  </p>
                  <p className="text-[13px] text-muted-foreground font-extralight">
                    Schedule a 15-minute demo and see iKendo in action with
                    your own use case.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-kendo/30 text-kendo hover:bg-kendo/10 text-xs h-8 font-normal"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
