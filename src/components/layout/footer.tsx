import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/shared/logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Sajad" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

const footerServices = [
  { href: "/services/seo", label: "Search Engine Optimisation" },
  { href: "/services/content-marketing", label: "Content Marketing" },
  { href: "/services/google-ads", label: "Google Ads" },
  { href: "/services/meta-ads", label: "Meta Ads" },
  { href: "/services/website-development", label: "Website Development" },
  { href: "/services/landing-page-development", label: "Landing Page Development" },
  { href: "/services", label: "Digital Marketing Consulting" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="container-site py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Logo className="[&_img]:h-11 [&_img]:md:h-12" />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted transition hover:text-accent"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.fullName}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
