import { buildMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  CtaBanner,
  Breadcrumbs,
  SectionHeading,
} from "@/components/shared/section";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { CaseStudyCard } from "@/components/portfolio/case-study-card";
import { caseStudies } from "@/data/case-studies";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Portfolio & Case Studies | Digital Marketing India",
  description:
    "SEO, Google Ads, website design, analytics, and CRO case studies with measurable results for growth-focused Indian businesses.",
  path: "/portfolio",
  keywords: ["digital marketing case studies India", "SEO portfolio India"],
});

const categories = [
  "SEO",
  "Google Ads",
  "Website Design",
  "Analytics",
  "Performance",
  "CRO",
] as const;

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }])}
      />
      <PageHero
        eyebrow="Portfolio"
        title="Work that moved the numbers"
        description="Selected projects across organic, paid, analytics, design, and conversion—each with challenge, solution, and results."
      />

      <section className="section-pad">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Portfolio" }]} />
          <Reveal>
            <SectionHeading
              title="Case studies by channel"
              description="Filter mentally by what you need—every item documents the full arc from problem to proof."
            />
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {cat}
              </span>
            ))}
          </div>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug}>
                <CaseStudyCard study={study} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
