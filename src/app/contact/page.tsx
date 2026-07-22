import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import { buildMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  Breadcrumbs,
  SectionHeading,
} from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Contact — Book a Free Consultation",
  description:
    "Contact Sajad Digital for SEO, PPC, analytics, and growth consulting. Book a free consultation or send project details.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])}
      />
      <PageHero
        eyebrow="Contact"
        title="Let’s map your next growth move"
        description="Share a bit about your goals. I’ll reply within one business day with next steps—or book time directly."
      />

      <section className="section-pad">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Project inquiry"
                title="Tell me about the work"
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.08}>
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-semibold">
                    Direct contact
                  </h3>
                  <ul className="mt-5 space-y-4 text-sm text-muted">
                    <li className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-accent"
                      >
                        {siteConfig.email}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
                      <a
                        href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                        className="hover:text-accent"
                      >
                        {siteConfig.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
                      <span>{siteConfig.location}</span>
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {Object.entries(siteConfig.social).map(([name, url]) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm capitalize text-muted hover:text-accent"
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-accent" aria-hidden />
                    <h3 className="font-heading text-lg font-semibold">
                      Book on Calendly
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-muted">
                    Prefer to schedule directly? Use the calendar embed placeholder
                    below—replace with your Calendly link.
                  </p>
                  <div className="mt-5 flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-border bg-background-secondary p-6 text-center">
                    <div>
                      <p className="text-sm text-muted">
                        Calendly embed placeholder
                      </p>
                      <Button asChild className="mt-4" variant="secondary">
                        <Link
                          href={siteConfig.calendlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open scheduling link
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-heading text-lg font-semibold">
                    Location
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Remote-first. Serving clients worldwide.
                  </p>
                  <div className="mt-5 flex min-h-[180px] items-center justify-center rounded-xl border border-dashed border-border bg-background-secondary text-sm text-muted">
                    Google Maps placeholder
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
