import { buildMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  CtaBanner,
  Breadcrumbs,
  SectionHeading,
} from "@/components/shared/section";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Digital Marketing Services in India | INR Pricing",
  description:
    "SEO, Google Ads, Meta Ads, analytics, CRO, and web development for Indian businesses. Transparent starting prices in INR. GST extra as applicable.",
  path: "/services",
  keywords: [
    "digital marketing services India",
    "SEO services India price",
    "Google Ads management India",
  ],
});

function servicesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Digital Marketing Services in India",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${siteConfig.url}/services/${service.slug}`,
    })),
  };
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Services", path: "/services" }]),
          servicesItemListSchema(),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Digital marketing services for Indian businesses"
        description="Transparent INR pricing for SEO, paid media, analytics, CRO, and web. Scoped to your goals—whether you need organic compounding, paid acceleration, cleaner data, or conversion lifts."
      />

      <section className="section-pad">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <Reveal>
            <SectionHeading
              title="Choose your growth lever"
              description="Every card includes benefits, starting price in ₹, and a clear next step. Need a custom mix? We’ll package what matters. GST extra as applicable."
            />
          </Reveal>
          <p className="mt-4 text-sm text-muted">
            Starting prices shown in Indian Rupees (INR). Final quotes depend on
            scope, competition, and goals.
          </p>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
