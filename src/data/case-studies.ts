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

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-organic-growth",
    title: "SaaS Organic Pipeline +186% in 9 Months",
    category: "SEO",
    client: "Aether SaaS",
    industry: "B2B SaaS",
    summary:
      "Rebuilt topical authority and technical foundations to turn organic search into a primary acquisition channel.",
    challenge:
      "Flat organic traffic, thin content, and technical debt limited visibility for high-intent product keywords.",
    solution:
      "Technical SEO sprint, intent-mapped content clusters, and internal linking redesign aligned to the product funnel.",
    results: [
      "Organic demo requests up 186%",
      "Non-brand clicks +142%",
      "Average position improved across 48 commercial terms",
    ],
    metrics: [
      { label: "Organic demos", value: "+186%" },
      { label: "Non-brand clicks", value: "+142%" },
      { label: "Pages in top 10", value: "67" },
    ],
    tools: ["Ahrefs", "Search Console", "Screaming Frog", "Looker Studio"],
    problem:
      "Aether relied heavily on paid acquisition. Organic contributed under 12% of pipeline and content lacked commercial intent coverage.",
    research:
      "Keyword gap analysis vs three competitors, crawl diagnostics, and conversion path review in GA4 revealed index bloat and missing comparison/intent pages.",
    strategy:
      "90-day technical cleanup, then a cluster model around problem → solution → comparison → integration keywords mapped to demo CTAs.",
    implementation:
      "Fixed crawl waste, shipped 24 cluster pages, rebuilt hub templates, and instituted monthly content refresh based on GSC queries.",
    testimonial: {
      quote:
        "Sajad turned SEO from a side project into our most efficient acquisition channel. Reporting was clear and the roadmap actually got executed.",
      author: "Maya Chen",
      role: "VP Growth, Aether SaaS",
    },
    metaTitle: "SaaS SEO Case Study | +186% Organic Pipeline | Sajad Digital",
    metaDescription:
      "How Sajad Digital grew a B2B SaaS organic demo pipeline by 186% with technical SEO and content clusters.",
  },
  {
    slug: "ecommerce-roas-turnaround",
    title: "E-commerce Google Ads ROAS 1.4x → 4.1x",
    category: "Google Ads",
    client: "Pulse Commerce",
    industry: "E-commerce",
    summary:
      "Restructured search and Shopping campaigns with clean tracking and ruthless negative keyword hygiene.",
    challenge:
      "Rising CPCs and messy campaign structure drove inefficient spend and unreliable attribution.",
    solution:
      "Rebuilt account architecture, fixed enhanced conversions, and aligned landing pages to ad groups.",
    results: [
      "ROAS improved from 1.4x to 4.1x",
      "CPA down 38%",
      "Wasted spend cut by an estimated 27%",
    ],
    metrics: [
      { label: "ROAS", value: "4.1x" },
      { label: "CPA", value: "-38%" },
      { label: "Conv. rate", value: "+52%" },
    ],
    tools: ["Google Ads", "GA4", "GTM", "Hotjar"],
    problem:
      "Broad match sprawl and broken purchase events meant Pulse optimized for the wrong signals.",
    research:
      "Query reports, landing page heatmaps, and GTM debug sessions uncovered wasted spend on non-buying intent and duplicate conversions.",
    strategy:
      "Intent-tiered campaigns, Shopping feed hygiene, and a landing page message-match program before scaling budgets.",
    implementation:
      "Migrated to a clean SKAG/theme structure where useful, launched negatives library, and A/B tested PDP trust modules.",
    testimonial: {
      quote:
        "Within one quarter our paid channel went from stressful to predictable. We finally trust the numbers.",
      author: "Jordan Blake",
      role: "Founder, Pulse Commerce",
    },
    metaTitle: "Google Ads Case Study | ROAS 4.1x | Sajad Digital",
    metaDescription:
      "E-commerce Google Ads turnaround: ROAS from 1.4x to 4.1x with restructuring and conversion tracking fixes.",
  },
  {
    slug: "agency-site-redesign",
    title: "Agency Website Redesign: +64% Consultation Bookings",
    category: "Website Design",
    client: "Summit Labs",
    industry: "Agency",
    summary:
      "Premium redesign focused on clarity, proof, and speed—built on Next.js.",
    challenge:
      "Outdated site with weak positioning and slow load times underperformed against competitors.",
    solution:
      "New information architecture, case-study-led storytelling, and Core Web Vitals optimization.",
    results: [
      "Consultation bookings +64%",
      "LCP under 2.0s on mobile",
      "Bounce rate -22%",
    ],
    metrics: [
      { label: "Bookings", value: "+64%" },
      { label: "Mobile LCP", value: "1.8s" },
      { label: "Bounce rate", value: "-22%" },
    ],
    tools: ["Figma", "Next.js", "PageSpeed Insights", "GA4"],
    problem:
      "Summit Labs looked commodity. Prospects bounced before understanding differentiation.",
    research:
      "Session recordings and stakeholder interviews showed confusion in service navigation and weak proof placement.",
    strategy:
      "Lead with outcomes, surface case studies earlier, and reduce friction to book a call.",
    implementation:
      "Designed and developed a dark premium marketing site with schema, blog, and Calendly-integrated contact flows.",
    testimonial: {
      quote:
        "The new site finally feels like the caliber of work we deliver. Inquiries are higher quality too.",
      author: "Priya Nair",
      role: "Managing Partner, Summit Labs",
    },
    metaTitle: "Website Redesign Case Study | +64% Bookings | Sajad Digital",
    metaDescription:
      "Agency website redesign on Next.js that increased consultation bookings by 64% with better UX and speed.",
  },
  {
    slug: "analytics-rebuild",
    title: "GA4 Rebuild Unlocked True Channel ROI",
    category: "Analytics",
    client: "Orbit Retail",
    industry: "Retail",
    summary:
      "Rebuilt measurement from scratch so leadership could allocate budget with confidence.",
    challenge:
      "Duplicate events, missing ecommerce parameters, and conflicting dashboards caused distrust in data.",
    solution:
      "Measurement plan, GTM rebuild, enhanced conversions, and executive Looker Studio suite.",
    results: [
      "100% purchase event accuracy vs Shopify",
      "Unified weekly growth dashboard",
      "Cut two redundant reporting tools",
    ],
    metrics: [
      { label: "Data accuracy", value: "~100%" },
      { label: "Report time", value: "-70%" },
      { label: "Channels tracked", value: "12" },
    ],
    tools: ["GA4", "GTM", "Looker Studio", "Shopify"],
    problem:
      "Marketing decisions were gut-based because analytics disagreed with revenue systems.",
    research:
      "Tag audit found multiple containers firing duplicate purchase events and broken item parameters.",
    strategy:
      "Single source of truth: documented event dictionary, server-side where needed, and role-based dashboards.",
    implementation:
      "Rebuilt GTM, validated in DebugView, connected BigQuery export path, and trained the growth team.",
    testimonial: {
      quote:
        "We stopped arguing about whose numbers were right and started optimizing. Huge unlock.",
      author: "Chris Ortega",
      role: "CMO, Orbit Retail",
    },
    metaTitle: "GA4 Analytics Case Study | Sajad Digital",
    metaDescription:
      "How a full GA4 and GTM rebuild gave Orbit Retail accurate channel ROI and faster reporting.",
  },
  {
    slug: "local-lead-gen",
    title: "Local SEO: +210% Qualified Calls",
    category: "SEO",
    client: "BrightLocal Services",
    industry: "Home Services",
    summary:
      "Map pack dominance across three service areas with GBP and location page systems.",
    challenge:
      "Competing national brands outranked a strong local operator in high-intent service searches.",
    solution:
      "GBP optimization, citation cleanup, service-area pages, and review velocity program.",
    results: [
      "Qualified calls +210%",
      "Map pack presence in 18 priority terms",
      "Direction requests +95%",
    ],
    metrics: [
      { label: "Calls", value: "+210%" },
      { label: "Map terms", value: "18" },
      { label: "Directions", value: "+95%" },
    ],
    tools: ["GBP", "BrightLocal", "Semrush", "Call tracking"],
    problem:
      "Inconsistent NAP and thin location pages made Google favor larger competitors.",
    research:
      "Local pack tracking and citation audit revealed duplicates and category mismatches.",
    strategy:
      "Own the map pack with complete profiles, photo cadence, and hyper-local landing pages.",
    implementation:
      "Optimized three GBPs, launched location templates with local schema, and standardized review asks.",
    testimonial: {
      quote:
        "Our phones busier than ever—and the leads are local and ready to book.",
      author: "Denise Howard",
      role: "Owner, BrightLocal Services",
    },
    metaTitle: "Local SEO Case Study | +210% Calls | Sajad Digital",
    metaDescription:
      "Local SEO case study: +210% qualified calls through Google Business Profile and location page strategy.",
  },
  {
    slug: "cro-checkout-lift",
    title: "CRO Sprint Lifted Checkout Conversion +31%",
    category: "CRO",
    client: "NovaTech Store",
    industry: "DTC",
    summary:
      "Research-led UX changes and tests reduced friction across PDP and checkout.",
    challenge:
      "Strong traffic but leaky funnel; mobile checkout abandonment especially high.",
    solution:
      "Heatmap analysis, trust module tests, and checkout simplification.",
    results: [
      "Checkout conversion +31%",
      "Mobile revenue +24%",
      "Support tickets on checkout -18%",
    ],
    metrics: [
      { label: "Checkout CVR", value: "+31%" },
      { label: "Mobile revenue", value: "+24%" },
      { label: "AOV", value: "+9%" },
    ],
    tools: ["Hotjar", "GA4", "Shopify", "Looker Studio"],
    problem:
      "Paid media scaled traffic into a checkout experience that wasn't ready.",
    research:
      "Recordings showed form anxiety, surprise shipping costs, and weak reassurance near pay.",
    strategy:
      "Prioritize mobile friction fixes and proof placement before running multivariate creative tests.",
    implementation:
      "Shipped express pay prominence, shipping calculator earlier, and trust badges with policy clarity—then validated via A/B test.",
    testimonial: {
      quote:
        "Same ad spend, meaningfully more orders. CRO paid for itself immediately.",
      author: "Sam Okonkwo",
      role: "Head of Growth, NovaTech",
    },
    metaTitle: "CRO Case Study | +31% Checkout Conversion | Sajad Digital",
    metaDescription:
      "Conversion rate optimization sprint that improved checkout conversion by 31% for a DTC brand.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
