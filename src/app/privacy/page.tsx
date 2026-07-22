import { buildMetadata } from "@/lib/seo";
import { PageHero, Breadcrumbs } from "@/components/shared/section";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.fullName}. How we collect, use, and protect your information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How your information is handled when you use this website or contact us."
      />
      <section className="section-pad">
        <div className="container-site space-y-8 text-muted">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <p className="text-sm">Last updated: July 22, 2026</p>
          <div className="space-y-4 leading-relaxed">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Information we collect
            </h2>
            <p>
              When you submit a contact or newsletter form, we collect the details
              you provide (such as name, email, phone, company, budget, and project
              information) to respond to your inquiry.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              How we use information
            </h2>
            <p>
              We use submitted information to reply to requests, schedule
              consultations, and improve our services. We do not sell personal
              data.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Analytics
            </h2>
            <p>
              This site may use privacy-conscious analytics to understand traffic
              and improve performance. Configure your preferred analytics provider
              before production launch.
            </p>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Contact
            </h2>
            <p>
              Questions about this policy:{" "}
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
