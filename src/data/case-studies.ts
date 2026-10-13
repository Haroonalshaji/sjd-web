export type CaseStudy = {
  slug: string;
  title: string;
  category: "SEO" | "Google Ads" | "Website Design" | "Analytics" | "Performance" | "CRO";
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  tools: string[];
  problem: string;
  research: string;
  strategy: string;
  implementation: string;
  testimonial: { quote: string; author: string; role: string };
  metaTitle: string;
  metaDescription: string;
};

export const caseStudies: CaseStudy[] = [];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
