"use client";

import {
  ChangeEvent,
  FormEvent,
  useMemo,
  useState,
} from "react";
import Script from "next/script";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const offices = [
  {
    key: "global",
    region: "Global Inbox",
    city: "Singapore, SG",
    email: "ikendo@moreinsight.ai",
  },
  {
    key: "north-america",
    region: "North America",
    city: "San Francisco, CA",
    email: "amber@mastertalk.ai",
  },
  {
    key: "europe",
    region: "Europe",
    city: "London, UK",
    email: "kelly@mastertalk.ai",
  },
  {
    key: "japan",
    region: "Japan",
    city: "Tokyo, JP",
    email: "eric@mastertalk.ai",
  },
  {
    key: "singapore",
    region: "Singapore",
    city: "Singapore, SG",
    email: "ikendo@moreinsight.ai",
  },
];

const defaultForm = {
  firstName: "",
  lastName: "",
  workEmail: "",
  company: "",
  region: "global",
  message: "",
};

const recaptchaSiteKey =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

const CONTACT_ERROR_HINTS: Record<string, string> = {
  sheets_permission_denied:
    "In Google Sheets: Share → add the service account below as Editor (same project as your API key). In GCP: enable “Google Sheets API”.",
  sheets_not_found: "Check GOOGLE_SHEET_ID matches the spreadsheet URL.",
  sheets_invalid_range:
    "Set GOOGLE_SHEET_RANGE to an existing tab, e.g. Sheet1!A1 (tab name must match exactly).",
  google_auth_failed:
    "GOOGLE_PRIVATE_KEY is malformed in Vercel (use \\n for newlines in one line) or email does not match the key.",
  missing_google_env: "Server is missing Google Sheets environment variables.",
  unknown: "Please try again later.",
};

export default function ContactPage() {
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState("");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const selectedOffice = useMemo(
    () => offices.find((office) => office.key === form.region) ?? offices[0],
    [form.region]
  );

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!recaptchaSiteKey) {
      setStatus(
        "This form is not configured (missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY)."
      );
      return;
    }

    if (!recaptchaLoaded) {
      setStatus("Security check is still loading — try again in a moment.");
      return;
    }

    setStatus("Sending…");

    try {
      await new Promise<void>((resolve, reject) => {
        const g = window.grecaptcha;
        if (!g) {
          reject(new Error("reCAPTCHA not loaded"));
          return;
        }
        g.ready(() => resolve());
      });

      const token = await window.grecaptcha!.execute(recaptchaSiteKey, {
        action: "contact",
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recaptchaToken: token,
          firstName: form.firstName,
          lastName: form.lastName,
          workEmail: form.workEmail,
          company: form.company,
          region: form.region,
          regionLabel: selectedOffice.region,
          message: form.message,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        cause?: string;
        debug?: string;
        shareWithEmail?: string;
      };
      if (!res.ok) {
        const hint = data.cause ? CONTACT_ERROR_HINTS[data.cause] : "";
        const shareLine = data.shareWithEmail
          ? `Service account to add as Editor: ${data.shareWithEmail}`
          : "";
        setStatus(
          [data.error, hint, shareLine, data.debug].filter(Boolean).join(" — ") ||
            "Something went wrong. Please try again."
        );
        return;
      }

      setStatus("Thank you — your message was received.");
      setForm(defaultForm);
    } catch {
      setStatus(
        "Could not send right now. Check your connection or try again shortly."
      );
    }
  }

  return (
    <>
      {recaptchaSiteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
          onLoad={() => setRecaptchaLoaded(true)}
        />
      ) : null}

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
            <AnimatedSection>
              <div>
                <h2 className="text-xl font-extralight tracking-tight mb-6">
                  Send us a message.
                </h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
                        First Name
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full border border-border rounded-md px-3 py-2 text-sm bg-card font-extralight focus:outline-none focus:border-kendo/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
                        Last Name
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full border border-border rounded-md px-3 py-2 text-sm bg-card font-extralight focus:outline-none focus:border-kendo/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
                      Work Email
                    </label>
                    <input
                      name="workEmail"
                      type="email"
                      value={form.workEmail}
                      onChange={handleChange}
                      required
                      className="w-full border border-border rounded-md px-3 py-2 text-sm bg-card font-extralight focus:outline-none focus:border-kendo/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
                      Company
                    </label>
                    <input
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full border border-border rounded-md px-3 py-2 text-sm bg-card font-extralight focus:outline-none focus:border-kendo/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
                      Region
                    </label>
                    <select
                      name="region"
                      value={form.region}
                      onChange={handleChange}
                      className="w-full border border-border rounded-md px-3 py-2 text-sm bg-card font-extralight focus:outline-none focus:border-kendo/40 transition-colors"
                    >
                      {offices.map((office) => (
                        <option key={office.key} value={office.key}>
                          {office.region}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-muted-foreground mb-1.5 block tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="w-full border border-border rounded-md px-3 py-2 text-sm bg-card font-extralight focus:outline-none focus:border-kendo/40 transition-colors resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] text-muted-foreground font-extralight">
                      Submissions are protected by reCAPTCHA and recorded for
                      the team (including your network address for abuse
                      prevention). For regional routing, you can still reach{" "}
                      <span className="text-foreground">
                        {selectedOffice.email}
                      </span>
                      .
                    </p>
                    {status ? (
                      <p className="text-[11px] text-kendo font-extralight">
                        {status}
                      </p>
                    ) : null}
                    <p className="text-[10px] text-muted-foreground/70 font-extralight leading-relaxed">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        className="underline hover:text-kendo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://policies.google.com/terms"
                        className="underline hover:text-kendo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Terms of Service
                      </a>{" "}
                      apply.
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="bg-kendo hover:bg-kendo-light text-white text-xs px-6 h-9 font-normal tracking-wide"
                  >
                    Send Message
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <h2 className="text-xl font-extralight tracking-tight mb-6">
                  Our offices.
                </h2>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div
                      key={office.key}
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
                    type="button"
                    variant="outline"
                    onClick={() => {
                      window.location.href =
                        "mailto:ikendo@moreinsight.ai?subject=Schedule%20Demo";
                    }}
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
