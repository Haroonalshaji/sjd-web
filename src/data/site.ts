export const siteConfig = {
  name: "Sajad",
  fullName: "Sajad Digital",
  title: "Digital Marketer",
  tagline: "Helping Businesses Grow Through Data-Driven Digital Marketing.",
  description:
    "Freelance digital marketer specializing in SEO, PPC, analytics, CRO, and performance marketing. Data-driven strategies that deliver measurable ROI.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sajad.digital",
  email: "hello@sajad.digital",
  phone: "+1 (555) 012-3456",
  location: "Available Worldwide · Remote First",
  calendlyUrl: "https://calendly.com/your-link",
  social: {
    linkedin: "https://linkedin.com/in/sajad-digital",
    twitter: "https://x.com/sajaddigital",
    instagram: "https://instagram.com/sajaddigital",
    youtube: "https://youtube.com/@sajaddigital",
  },
  stats: [
    { label: "Projects Completed", value: 120, suffix: "+" },
    { label: "Years Experience", value: 8, suffix: "+" },
    { label: "Campaigns Managed", value: 350, suffix: "+" },
    { label: "Average ROI", value: 4.2, suffix: "x", decimals: 1 },
  ],
  trustedCompanies: [
    "NovaTech",
    "Pulse Commerce",
    "BrightLocal",
    "Aether SaaS",
    "Orbit Retail",
    "Summit Labs",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
