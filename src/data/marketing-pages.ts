import pages from "@/data/marketing-content.json";

export type MarketingCta = { label: string; href: string };

export type MarketingItem = {
  title: string;
  paragraphs: string[];
  groups: { label: string; items: string[] }[];
  cta: MarketingCta | null;
  meta: string;
  step?: string;
};

export type MarketingSection = {
  type: string;
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  trust: string[];
  closing: string;
  primaryCta: MarketingCta | null;
  secondaryCta: MarketingCta | null;
  items: MarketingItem[];
};

export type MarketingPageData = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  sections: MarketingSection[];
};

export const marketingPages = pages as MarketingPageData[];

export function getMarketingPage(slug: string) {
  return marketingPages.find((page) => page.slug === slug);
}

export function getServicePages() {
  return marketingPages.filter((page) => page.slug !== "services");
}
