import { buildMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import { PageHero, CtaBanner, Breadcrumbs, SectionHeading } from "@/components/shared/section";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/data/services";

export const metadata = buildMetadata({
  title: "Digital Marketing Services",
  description:
    "Explore SEO, Google Ads, social media, analytics, CRO, web development, and more. Premium digital marketing services for growth-focused businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Services", path: "/services" }])}
      />
      <PageHero
        eyebrow="Services"
        title="Services built for measurable growth"
        description="Each engagement is scoped to your goals—whether you need organic compounding, paid acceleration, cleaner data, or conversion lifts."
      />

      <section className="section-pad">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <Reveal>
            <SectionHeading
              title="Choose your growth lever"
              description="Every card includes benefits and a clear next step. Need a custom mix? We’ll package what matters."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} featured />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
