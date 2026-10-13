import Link from "next/link";
import { buildMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Case Studies | Sajad Digital Marketer",
  description:
    "Selected marketing work from Sajad Digital Marketer. Project stories are published when the details and results can be shared.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Case Studies", path: "/portfolio" }])}
      />
      <section className="hero-grid border-b border-border pt-28 pb-16 md:pt-32">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Case Studies" }]} />
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Selected Marketing Work
            </p>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              Case studies are added when the results can be shared
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Each project starts with a different problem. Stories go on this
              page after the work and the results are approved for publication.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
