import { buildMetadata } from "@/lib/seo";
import { PageHero, Breadcrumbs } from "@/components/shared/section";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.fullName} website and consulting engagements.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Terms governing use of this website and engagement with Sajad Digital."
      />
      <section className="section-pad">
        <div className="container-site space-y-8 text-muted">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />
          <p className="text-sm">Last updated: July 22, 2026</p>
          <div className="space-y-4 leading-relaxed">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Website use
            </h2>
            <p>
              Content on this site is for general information. Results described in
              case studies are specific to those engagements and not guarantees of
              future performance.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Consulting engagements
            </h2>
            <p>
              Project scope, fees, timelines, and deliverables are defined in a
              separate proposal or agreement. Work begins after written acceptance
              and required access is provided.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Intellectual property
            </h2>
            <p>
              Site design and original content belong to {siteConfig.fullName}.
              Client deliverables ownership is specified in the engagement
              agreement.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Contact
            </h2>
            <p>
              Questions:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
