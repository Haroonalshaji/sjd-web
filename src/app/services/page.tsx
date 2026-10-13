import { buildMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import { MarketingPage } from "@/components/marketing/marketing-page";
import { getMarketingPage, getServicePages } from "@/data/marketing-pages";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const page = getMarketingPage("services");

export const metadata = buildMetadata({
  title: page?.metaTitle || "Digital Marketing Services | Sajad Digital Marketer",
  description:
    page?.metaDescription ||
    "Explore SEO, content, Google Ads, Meta Ads, website development and full-service digital marketing services from Sajad Digital Marketer.",
  path: "/services",
});

export default function ServicesPage() {
  if (!page) return null;
  const services = getServicePages();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Services", path: "/services" }]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Digital Marketing Services",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.metaTitle,
              url: `${siteConfig.url}${service.path}`,
            })),
          },
        ]}
      />
      <MarketingPage page={page} crumbs={[{ label: "Services" }]} />
    </>
  );
}
