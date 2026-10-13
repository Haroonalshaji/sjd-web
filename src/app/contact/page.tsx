import Link from "next/link";
import { buildMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { ProjectEnquiryForm } from "@/components/contact/project-enquiry-form";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Contact Sajad | Digital Marketing Consultant",
  description:
    "Contact Sajad to discuss SEO, Google Ads, Meta Ads, content marketing, website development or a broader digital marketing project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <section className="hero-grid border-b border-border pt-28 pb-16 md:pt-32">
        <div className="container-site">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Contact Me
            </p>
            <h1 className="max-w-4xl font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              Let’s Discuss Your Digital Marketing Project
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Have a project in mind or need support with SEO, paid advertising,
              content or website development? Share your requirements and I will
              contact you to discuss the right approach for your business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <h2 className="font-heading text-3xl font-semibold tracking-tight">
                Get in Touch With Sajad
              </h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>
                  I help startups, growing companies and established brands
                  improve their digital presence through SEO, Google Ads, Meta
                  Ads, content marketing and website development.
                </p>
                <p>
                  Contact me directly to discuss your business, current marketing
                  challenges and project requirements.
                </p>
              </div>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="text-muted">Name</dt>
                  <dd className="font-medium">Sajad</dd>
                </div>
                <div>
                  <dt className="text-muted">Role</dt>
                  <dd className="font-medium">Digital Marketing Consultant</dd>
                </div>
                <div>
                  <dt className="text-muted">Availability</dt>
                  <dd className="font-medium">
                    Available for remote projects and online consultations
                  </dd>
                </div>
              </dl>
              <Button asChild className="mt-8" variant="secondary">
                <Link href="#enquiry">Chat With Sajad</Link>
              </Button>
            </Reveal>
            <Reveal delay={0.08}>
              <div id="enquiry" className="scroll-mt-24">
                <ProjectEnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
