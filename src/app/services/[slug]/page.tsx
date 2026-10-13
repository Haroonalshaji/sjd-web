import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  buildMetadata,
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";
import { MarketingPage } from "@/components/marketing/marketing-page";
import { getMarketingPage, getServicePages } from "@/data/marketing-pages";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-static";

export function generateStaticParams() {
  return getServicePages().map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getMarketingPage(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getMarketingPage(slug);
  if (!page || page.slug === "services") notFound();

  const hero = page.sections.find((section) => section.type === "hero");
  const faqs = page.sections
    .filter((section) => section.type === "faq")
    .flatMap((section) =>
      section.items.map((item) => ({
        question: item.title,
        answer: item.paragraphs.join(" "),
      }))
    );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: hero?.title || page.metaTitle, path: page.path },
          ]),
          serviceSchema({
            name: hero?.title || page.metaTitle,
            description: page.metaDescription,
            path: page.path,
          }),
          ...(faqs.length ? [faqSchema(faqs)] : []),
        ]}
      />
      <MarketingPage
        page={page}
        crumbs={[{ label: "Services", href: "/services" }, { label: hero?.title || "Service" }]}
      />
    </>
  );
}
