import type { LucideIcon } from "lucide-react";
import {
  Search,
  Megaphone,
  Share2,
  BarChart3,
  Palette,
  Code2,
  Settings2,
  MapPin,
  PenLine,
  Rocket,
  Gauge,
  Zap,
  ClipboardCheck,
  KeyRound,
  LayoutTemplate,
} from "lucide-react";

export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  benefits: string[];
  process: { title: string; description: string }[];
  tools: string[];
  industries: string[];
  faqs: ServiceFaq[];
  related: string[];
  pricing?: string;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO",
    description:
      "Rank higher, attract qualified organic traffic, and compound long-term growth with technical and content SEO.",
    longDescription:
      "I build SEO systems that connect search intent with conversion. From technical foundations to content authority, every recommendation is tied to revenue outcomes—not vanity rankings.",
    icon: Search,
    benefits: [
      "Sustainable organic traffic growth",
      "Higher rankings for commercial keywords",
      "Improved crawlability and indexation",
      "Content that converts, not just ranks",
      "Transparent monthly reporting",
    ],
    process: [
      {
        title: "Audit & Opportunity Map",
        description:
          "Full technical, content, and competitor audit to find the highest-ROI opportunities.",
      },
      {
        title: "Foundation Fixes",
        description:
          "Resolve crawl, index, speed, and on-page issues that block growth.",
      },
      {
        title: "Authority Content",
        description:
          "Build topical clusters and conversion-focused pages that win SERPs.",
      },
      {
        title: "Measure & Scale",
        description:
          "Track rankings, traffic quality, and conversions—then double down on winners.",
      },
    ],
    tools: ["Ahrefs", "Semrush", "Screaming Frog", "Google Search Console", "Looker Studio"],
    industries: ["SaaS", "E-commerce", "Local Services", "Agencies", "B2B"],
    faqs: [
      {
        question: "How long until SEO results show?",
        answer:
          "Most clients see meaningful movement in 3–6 months. Competitive niches take longer; quick wins often appear earlier from technical and on-page fixes.",
      },
      {
        question: "Do you guarantee #1 rankings?",
        answer:
          "No ethical SEO can guarantee rankings. I guarantee a clear strategy, disciplined execution, and transparent reporting tied to business KPIs.",
      },
      {
        question: "Is SEO still worth it vs paid ads?",
        answer:
          "Yes. SEO compounds. Paid ads stop when spend stops. The strongest growth engines use both—SEO for durable demand, ads for speed.",
      },
    ],
    related: ["technical-seo", "local-seo", "content-marketing", "seo-audit"],
    pricing: "From $1,500/mo",
    metaTitle: "SEO Services | Organic Growth Strategy | Sajad Digital",
    metaDescription:
      "Professional SEO services for startups, SaaS, and e-commerce. Technical SEO, content strategy, and measurable organic growth from Sajad Digital.",
  },
  {
    slug: "google-ads",
    title: "Google Ads (PPC)",
    shortTitle: "Google Ads",
    description:
      "High-intent paid search campaigns engineered for ROAS, not just clicks.",
    longDescription:
      "I manage Google Ads accounts with ruthless focus on profitable keywords, clean structure, and conversion tracking—so every dollar has a job.",
    icon: Megaphone,
    benefits: [
      "Faster pipeline from high-intent searchers",
      "Lower CPA through structured testing",
      "Full conversion tracking setup",
      "Search, Performance Max & remarketing",
      "Weekly optimization cadence",
    ],
    process: [
      {
        title: "Account Architecture",
        description: "Build campaigns around intent, margins, and funnel stage.",
      },
      {
        title: "Tracking & Attribution",
        description: "Wire GA4, GTM, and enhanced conversions before scaling spend.",
      },
      {
        title: "Launch & Learn",
        description: "Controlled launch with clear test hypotheses and budgets.",
      },
      {
        title: "Scale Winners",
        description: "Cut waste, expand profitable queries, and protect ROAS.",
      },
    ],
    tools: ["Google Ads", "Google Analytics", "Tag Manager", "Looker Studio", "Hotjar"],
    industries: ["E-commerce", "SaaS", "Lead Gen", "Local Businesses"],
    faqs: [
      {
        question: "What's a realistic starting budget?",
        answer:
          "Depends on niche CPC and goals. Many lead-gen accounts start effectively at $1,500–$3,000/mo in ad spend, plus management.",
      },
      {
        question: "Can you take over an underperforming account?",
        answer:
          "Yes. I audit structure, negatives, landing pages, and tracking first—then rebuild what is holding performance back.",
      },
    ],
    related: ["performance-marketing", "landing-page-optimization", "conversion-rate-optimization"],
    pricing: "From $1,200/mo + ad spend",
    metaTitle: "Google Ads Management | PPC Consultant | Sajad Digital",
    metaDescription:
      "Google Ads PPC management focused on ROAS and qualified leads. Search, remarketing, and conversion tracking by Sajad Digital.",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    description:
      "Paid and organic social strategies that build brand demand and drive conversions.",
    longDescription:
      "From Meta Ads to content systems, I turn social platforms into measurable growth channels—not vanity metrics.",
    icon: Share2,
    benefits: [
      "Audience growth with conversion intent",
      "Creative testing frameworks",
      "Meta & LinkedIn campaign management",
      "Brand consistency across channels",
      "Community and content calendars",
    ],
    process: [
      {
        title: "Audience & Offer Fit",
        description: "Define ICPs, hooks, and offers that match platform behavior.",
      },
      {
        title: "Creative System",
        description: "Build a testing pipeline for ads and organic content.",
      },
      {
        title: "Distribution",
        description: "Launch paid + organic with clear attribution.",
      },
      {
        title: "Iterate",
        description: "Scale creatives and audiences that convert.",
      },
    ],
    tools: ["Meta Ads Manager", "HubSpot", "Canva", "Hotjar", "Looker Studio"],
    industries: ["E-commerce", "Consumer Brands", "SaaS", "Local Businesses"],
    faqs: [
      {
        question: "Organic or paid social?",
        answer:
          "Both. Organic builds trust and assets; paid accelerates reach and testing. Strategy depends on goals and timeline.",
      },
    ],
    related: ["performance-marketing", "content-marketing", "conversion-rate-optimization"],
    pricing: "From $1,000/mo",
    metaTitle: "Social Media Marketing Services | Sajad Digital",
    metaDescription:
      "Social media marketing and Meta Ads strategies that grow audiences and drive conversions for brands and SaaS companies.",
  },
  {
    slug: "google-analytics",
    title: "Google Analytics & Measurement",
    shortTitle: "Analytics",
    description:
      "Clean GA4 setups, event tracking, and dashboards that turn data into decisions.",
    longDescription:
      "If measurement is broken, marketing is guessing. I implement GA4, GTM, and Looker Studio so you know what drives revenue.",
    icon: BarChart3,
    benefits: [
      "Accurate conversion tracking",
      "Custom event & funnel reporting",
      "Looker Studio dashboards",
      "Cross-channel attribution clarity",
      "Team-ready documentation",
    ],
    process: [
      {
        title: "Measurement Plan",
        description: "Define KPIs, events, and conversion definitions.",
      },
      {
        title: "Implementation",
        description: "Configure GA4, GTM, and enhanced conversions.",
      },
      {
        title: "Validation",
        description: "Debug events and reconcile with CRM / ad platforms.",
      },
      {
        title: "Dashboards",
        description: "Ship Looker Studio reports leadership actually uses.",
      },
    ],
    tools: ["Google Analytics", "Tag Manager", "Looker Studio", "Google Ads", "Hotjar"],
    industries: ["SaaS", "E-commerce", "Agencies", "B2B"],
    faqs: [
      {
        question: "Do you migrate from Universal Analytics leftovers?",
        answer:
          "Yes. I clean legacy tags, rebuild GA4 properly, and document the new measurement model.",
      },
    ],
    related: ["seo", "google-ads", "conversion-rate-optimization"],
    pricing: "From $800 one-time / $400/mo retainer",
    metaTitle: "Google Analytics Setup & Dashboards | Sajad Digital",
    metaDescription:
      "GA4, Tag Manager, and Looker Studio implementation for accurate marketing measurement and ROI reporting.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    description:
      "Conversion-focused interfaces that feel premium and guide users to action.",
    longDescription:
      "Design that looks good and sells. I craft landing pages and product experiences grounded in user research and CRO principles.",
    icon: Palette,
    benefits: [
      "Higher conversion rates",
      "Clear information hierarchy",
      "Mobile-first experiences",
      "Design systems that scale",
      "Figma deliverables ready for build",
    ],
    process: [
      {
        title: "Research",
        description: "Audit current UX, competitors, and user friction points.",
      },
      {
        title: "Wireframes",
        description: "Structure flows around primary conversion goals.",
      },
      {
        title: "Visual Design",
        description: "Premium UI aligned with brand and accessibility.",
      },
      {
        title: "Handoff",
        description: "Developer-ready Figma with specs and states.",
      },
    ],
    tools: ["Figma", "Hotjar", "PageSpeed Insights", "Notion"],
    industries: ["SaaS", "Startups", "Agencies", "E-commerce"],
    faqs: [
      {
        question: "Do you design and develop?",
        answer:
          "Yes. Design-only or full design + Next.js/WordPress build—your choice.",
      },
    ],
    related: ["website-development", "landing-page-optimization", "conversion-rate-optimization"],
    pricing: "From $2,500/project",
    metaTitle: "UI/UX Design for Conversion | Sajad Digital",
    metaDescription:
      "Premium UI/UX design for landing pages and digital products—built for clarity, trust, and conversions.",
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Web Development",
    description:
      "Fast, accessible, SEO-ready websites on Next.js and WordPress.",
    longDescription:
      "I build marketing sites that load fast, rank well, and convert—using modern stacks with clean code and Core Web Vitals in mind.",
    icon: Code2,
    benefits: [
      "Lighthouse-optimized performance",
      "SEO-friendly architecture",
      "Responsive across all devices",
      "CMS or headless flexibility",
      "Secure and maintainable code",
    ],
    process: [
      {
        title: "Scope & Architecture",
        description: "Define pages, CMS needs, and technical requirements.",
      },
      {
        title: "Build",
        description: "Develop with Next.js or WordPress using best practices.",
      },
      {
        title: "Optimize",
        description: "Performance, accessibility, and SEO pass before launch.",
      },
      {
        title: "Launch & Handoff",
        description: "Deploy, train, and document for your team.",
      },
    ],
    tools: ["Next.js", "WordPress", "Vercel", "Figma", "PageSpeed Insights"],
    industries: ["Agencies", "SaaS", "Local Businesses", "Consultants"],
    faqs: [
      {
        question: "Next.js or WordPress?",
        answer:
          "Next.js for performance and custom marketing sites. WordPress when editorial teams need familiar CMS workflows. I recommend based on goals.",
      },
    ],
    related: ["website-speed-optimization", "ui-ux-design", "seo", "technical-seo"],
    pricing: "From $3,500/project",
    metaTitle: "Website Development | Next.js & WordPress | Sajad Digital",
    metaDescription:
      "High-performance website development with Next.js and WordPress. Fast, accessible, and SEO-optimized builds.",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    shortTitle: "Technical SEO",
    description:
      "Fix crawl, index, speed, and structured data issues that silently kill organic growth.",
    longDescription:
      "Technical SEO is the foundation. I diagnose and resolve the infrastructure problems that keep great content invisible.",
    icon: Settings2,
    benefits: [
      "Better crawl efficiency",
      "Cleaner indexation",
      "Core Web Vitals improvements",
      "Schema markup implementation",
      "Log-file informed priorities",
    ],
    process: [
      {
        title: "Deep Crawl",
        description: "Screaming Frog + Search Console analysis.",
      },
      {
        title: "Prioritized Backlog",
        description: "Rank issues by traffic and revenue impact.",
      },
      {
        title: "Implementation",
        description: "Ship fixes with engineering or CMS teams.",
      },
      {
        title: "Monitor",
        description: "Validate index coverage and CWV trends.",
      },
    ],
    tools: ["Screaming Frog", "Google Search Console", "PageSpeed Insights", "Ahrefs"],
    industries: ["Enterprise Sites", "E-commerce", "SaaS", "Publishers"],
    faqs: [
      {
        question: "Can you work with our developers?",
        answer:
          "Yes. I write clear tickets, acceptance criteria, and validate implementations.",
      },
    ],
    related: ["seo", "website-speed-optimization", "seo-audit"],
    pricing: "From $1,200/project",
    metaTitle: "Technical SEO Services | Sajad Digital",
    metaDescription:
      "Technical SEO audits and implementation—crawlability, Core Web Vitals, schema, and indexation fixes.",
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortTitle: "Local SEO",
    description:
      "Dominate local pack and map results for service-area and multi-location brands.",
    longDescription:
      "I optimize Google Business Profiles, local citations, and location pages so nearby customers find you first.",
    icon: MapPin,
    benefits: [
      "Higher Google Business Profile visibility",
      "More calls, directions, and bookings",
      "Location page SEO",
      "Review strategy guidance",
      "Local competitor gap analysis",
    ],
    process: [
      {
        title: "Local Audit",
        description: "GBP, citations, NAP consistency, and map pack review.",
      },
      {
        title: "Profile Optimization",
        description: "Categories, services, photos, and posts that convert.",
      },
      {
        title: "On-Site Local SEO",
        description: "Location pages, schema, and internal linking.",
      },
      {
        title: "Authority & Reviews",
        description: "Citation cleanup and review acquisition systems.",
      },
    ],
    tools: ["Google Business Profile", "Semrush", "BrightLocal", "Looker Studio"],
    industries: ["Local Services", "Healthcare", "Hospitality", "Retail"],
    faqs: [
      {
        question: "Multi-location support?",
        answer:
          "Yes. I build scalable processes for dozens of locations without duplicate content traps.",
      },
    ],
    related: ["seo", "google-ads", "content-marketing"],
    pricing: "From $900/mo",
    metaTitle: "Local SEO Services | Google Business Optimization | Sajad Digital",
    metaDescription:
      "Local SEO that wins the map pack—Google Business Profile, citations, and location pages that drive calls and visits.",
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content Marketing",
    description:
      "Editorial systems that build authority, demand, and pipeline.",
    longDescription:
      "Content that ranks and converts. I plan clusters, briefs, and distribution so every piece supports commercial goals.",
    icon: PenLine,
    benefits: [
      "Topical authority growth",
      "SEO-aligned content briefs",
      "Thought leadership positioning",
      "Repurposing across channels",
      "Performance-based prioritization",
    ],
    process: [
      {
        title: "Strategy",
        description: "Keyword + ICP mapping into a content roadmap.",
      },
      {
        title: "Production System",
        description: "Briefs, writers, editing, and brand voice guidelines.",
      },
      {
        title: "Publish & Promote",
        description: "On-site SEO plus distribution to amplify reach.",
      },
      {
        title: "Refresh",
        description: "Update winners and prune underperformers.",
      },
    ],
    tools: ["Ahrefs", "Semrush", "Surfer", "HubSpot", "Google Analytics"],
    industries: ["SaaS", "B2B", "Agencies", "Education"],
    faqs: [
      {
        question: "Do you write the content?",
        answer:
          "I can write, brief freelancers, or train your team—whichever fits your bandwidth.",
      },
    ],
    related: ["seo", "social-media-marketing", "keyword-research"],
    pricing: "From $1,200/mo",
    metaTitle: "Content Marketing Strategy | Sajad Digital",
    metaDescription:
      "Content marketing that builds search authority and pipeline—strategy, briefs, and performance systems.",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortTitle: "Performance Marketing",
    description:
      "Full-funnel paid media optimized for CAC, LTV, and scalable growth.",
    longDescription:
      "I connect paid channels into one performance engine—search, social, and remarketing—with shared measurement and creative testing.",
    icon: Rocket,
    benefits: [
      "Cross-channel media strategy",
      "CAC and ROAS accountability",
      "Creative + landing page alignment",
      "Budget pacing and forecasting",
      "Executive-ready reporting",
    ],
    process: [
      {
        title: "Funnel Map",
        description: "Align offers and channels to awareness → purchase.",
      },
      {
        title: "Channel Mix",
        description: "Allocate budget by efficiency and growth potential.",
      },
      {
        title: "Test Roadmap",
        description: "Structured experiments across ads and landing pages.",
      },
      {
        title: "Scale",
        description: "Increase spend only where unit economics hold.",
      },
    ],
    tools: ["Google Ads", "Meta Ads Manager", "HubSpot", "Looker Studio", "Hotjar"],
    industries: ["E-commerce", "SaaS", "DTC", "Lead Generation"],
    faqs: [
      {
        question: "Which channels do you manage?",
        answer:
          "Primarily Google and Meta, with strategic support for LinkedIn and remarketing ecosystems.",
      },
    ],
    related: ["google-ads", "social-media-marketing", "conversion-rate-optimization"],
    pricing: "From $2,000/mo + ad spend",
    metaTitle: "Performance Marketing Consultant | Sajad Digital",
    metaDescription:
      "Performance marketing across Google and Meta—optimized for CAC, ROAS, and scalable customer acquisition.",
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    shortTitle: "CRO",
    description:
      "Turn more visitors into leads and customers with evidence-based testing.",
    longDescription:
      "I find friction, hypothesize improvements, and run experiments that lift conversion rates without buying more traffic.",
    icon: Gauge,
    benefits: [
      "Higher conversion rates",
      "Better landing page performance",
      "Reduced cost per acquisition",
      "Data-backed UX decisions",
      "Continuous experimentation culture",
    ],
    process: [
      {
        title: "Research",
        description: "Analytics, heatmaps, session recordings, and funnel drop-offs.",
      },
      {
        title: "Hypotheses",
        description: "Prioritize tests by impact × confidence × effort.",
      },
      {
        title: "Experiment",
        description: "A/B tests or iterative UX releases with clear success metrics.",
      },
      {
        title: "Implement Winners",
        description: "Ship proven changes and document learnings.",
      },
    ],
    tools: ["Hotjar", "Google Analytics", "Looker Studio", "Figma", "PageSpeed Insights"],
    industries: ["SaaS", "E-commerce", "Lead Gen", "Agencies"],
    faqs: [
      {
        question: "How much traffic do I need for A/B tests?",
        answer:
          "Meaningful tests need sufficient volume. Low-traffic sites get iterative CRO and qualitative research instead of underpowered tests.",
      },
    ],
    related: ["landing-page-optimization", "ui-ux-design", "google-analytics"],
    pricing: "From $1,500/mo",
    metaTitle: "CRO Services | Conversion Rate Optimization | Sajad Digital",
    metaDescription:
      "Conversion rate optimization with research, testing, and UX improvements that lower CAC and lift revenue.",
  },
  {
    slug: "website-speed-optimization",
    title: "Website Speed Optimization",
    shortTitle: "Speed Optimization",
    description:
      "Core Web Vitals improvements that boost UX, SEO, and conversion rates.",
    longDescription:
      "Slow sites lose customers. I diagnose performance bottlenecks and ship fixes that move LCP, INP, and CLS into the green.",
    icon: Zap,
    benefits: [
      "Faster load times",
      "Better Core Web Vitals",
      "SEO ranking support",
      "Higher conversion rates",
      "Clear before/after reports",
    ],
    process: [
      {
        title: "Benchmark",
        description: "Lab + field data from PageSpeed, CrUX, and real devices.",
      },
      {
        title: "Bottleneck Analysis",
        description: "Images, JS, fonts, server, and third-party scripts.",
      },
      {
        title: "Optimization Sprint",
        description: "Implement highest-impact fixes first.",
      },
      {
        title: "Validate",
        description: "Re-test and monitor CWV for regression.",
      },
    ],
    tools: ["PageSpeed Insights", "Lighthouse", "WebPageTest", "Next.js", "WordPress"],
    industries: ["E-commerce", "Publishers", "SaaS", "Agencies"],
    faqs: [
      {
        question: "How fast can improvements ship?",
        answer:
          "Many sites see major gains in 1–2 weeks. Complex apps may need staged engineering work.",
      },
    ],
    related: ["technical-seo", "website-development", "seo"],
    pricing: "From $900/project",
    metaTitle: "Website Speed Optimization | Core Web Vitals | Sajad Digital",
    metaDescription:
      "Website speed and Core Web Vitals optimization for better SEO, UX, and conversions.",
  },
  {
    slug: "seo-audit",
    title: "SEO Audit",
    shortTitle: "SEO Audit",
    description:
      "A prioritized, actionable audit covering technical, content, and authority gaps.",
    longDescription:
      "Get a clear roadmap—not a 100-page PDF nobody reads. My audits rank issues by business impact so you know exactly what to fix next.",
    icon: ClipboardCheck,
    benefits: [
      "Complete technical + content review",
      "Competitor gap analysis",
      "Prioritized action plan",
      "Quick-win identification",
      "Optional implementation support",
    ],
    process: [
      {
        title: "Crawl & Data Pull",
        description: "Collect Search Console, analytics, and crawl data.",
      },
      {
        title: "Analysis",
        description: "Technical, on-page, content, and backlink review.",
      },
      {
        title: "Roadmap Delivery",
        description: "Impact-ranked recommendations with owners and effort.",
      },
      {
        title: "Walkthrough",
        description: "Live session to align your team on next steps.",
      },
    ],
    tools: ["Ahrefs", "Semrush", "Screaming Frog", "Google Search Console"],
    industries: ["All industries"],
    faqs: [
      {
        question: "What's included in the deliverable?",
        answer:
          "Executive summary, prioritized backlog, evidence screenshots, and a 60-minute walkthrough call.",
      },
    ],
    related: ["seo", "technical-seo", "keyword-research"],
    pricing: "From $750 one-time",
    metaTitle: "SEO Audit Services | Actionable Roadmap | Sajad Digital",
    metaDescription:
      "Comprehensive SEO audits with prioritized recommendations for technical, content, and authority growth.",
  },
  {
    slug: "keyword-research",
    title: "Keyword Research",
    shortTitle: "Keyword Research",
    description:
      "Intent-mapped keyword strategies that fuel SEO, content, and PPC.",
    longDescription:
      "I uncover the terms your buyers actually search—clustered by intent and commercial value—so content and campaigns target revenue, not volume alone.",
    icon: KeyRound,
    benefits: [
      "Intent-based keyword clusters",
      "Content & PPC alignment",
      "Competitor keyword gaps",
      "Prioritized opportunity scores",
      "Shared living keyword database",
    ],
    process: [
      {
        title: "Seed & Expand",
        description: "Pull seeds from offers, customers, and competitors.",
      },
      {
        title: "Cluster",
        description: "Group by intent, topic, and funnel stage.",
      },
      {
        title: "Prioritize",
        description: "Score by volume, difficulty, and business value.",
      },
      {
        title: "Activate",
        description: "Map keywords to pages, briefs, and ad groups.",
      },
    ],
    tools: ["Ahrefs", "Semrush", "Google Keyword Planner", "Search Console"],
    industries: ["SaaS", "E-commerce", "Local", "B2B"],
    faqs: [
      {
        question: "Is this useful for PPC too?",
        answer:
          "Absolutely. Shared keyword intelligence improves both organic and paid efficiency.",
      },
    ],
    related: ["seo", "content-marketing", "google-ads"],
    pricing: "From $500 one-time",
    metaTitle: "Keyword Research Services | Sajad Digital",
    metaDescription:
      "Professional keyword research mapped to search intent and commercial value for SEO and PPC teams.",
  },
  {
    slug: "landing-page-optimization",
    title: "Landing Page Optimization",
    shortTitle: "Landing Pages",
    description:
      "High-converting landing pages aligned with ads, offers, and user intent.",
    longDescription:
      "I design and refine landing pages that match ad messaging, reduce friction, and lift conversion rates across campaigns.",
    icon: LayoutTemplate,
    benefits: [
      "Message-match with paid traffic",
      "Clear CTAs and social proof",
      "Faster page loads",
      "A/B-ready page structures",
      "Higher Quality Scores & lower CPC",
    ],
    process: [
      {
        title: "Offer & Audience Brief",
        description: "Clarify promise, proof, and primary action.",
      },
      {
        title: "Page Build / Redesign",
        description: "Structure copy and UI for conversion flow.",
      },
      {
        title: "Tracking",
        description: "Wire events and form analytics.",
      },
      {
        title: "Test & Improve",
        description: "Iterate based on CRO insights.",
      },
    ],
    tools: ["Figma", "Next.js", "Hotjar", "Google Ads", "Google Analytics"],
    industries: ["SaaS", "Lead Gen", "E-commerce", "Agencies"],
    faqs: [
      {
        question: "Do you write the copy?",
        answer:
          "Yes—conversion copy is included or co-created with your team.",
      },
    ],
    related: ["conversion-rate-optimization", "google-ads", "ui-ux-design"],
    pricing: "From $1,200/page",
    metaTitle: "Landing Page Optimization | Sajad Digital",
    metaDescription:
      "Landing page design and optimization that improves conversion rates for paid and organic traffic.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}
