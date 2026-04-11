import Link from "next/link";
import { LogoFull } from "./logo";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Product: [
    { label: "Product", href: "/product" },
    { label: "Why iKendo", href: "/why-ikendo" },
    { label: "Industries", href: "/industries" },
    { label: "Roadmap", href: "/roadmap" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  Lifecycle: [
    { label: "Train & Optimize", href: "/product#train" },
    { label: "Test & Simulate", href: "/product#test" },
    { label: "Deploy & Launch", href: "/product#deploy" },
    { label: "Analyze & Insights", href: "/product#analyze" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <LogoFull />
            <p className="text-xs text-muted-foreground/60 mt-4 leading-relaxed max-w-[220px] font-extralight">
              Built with the discipline of kendo.
              <br />
              Every strike deliberate, every response precise.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-normal uppercase tracking-[0.2em] text-muted-foreground/50 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-extralight"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground/50 font-extralight">
          <span>&copy; {new Date().getFullYear()} iKendo. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
