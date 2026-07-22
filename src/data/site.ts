export const siteConfig = {
  name: "Sajad",
  fullName: "Sajad Digital",
  title: "Digital Marketing Consultant in India",
  tagline:
    "Helping Indian businesses grow through data-driven digital marketing.",
  description:
    "Freelance digital marketing consultant in India specializing in SEO, Google Ads, Meta Ads, analytics, CRO, and performance marketing for startups, SMEs, D2C, and local businesses. Transparent INR pricing and measurable ROI.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sajad.digital",
  email: "hello@sajad.digital",
  phone: "+91 98765 43210",
  location: "India · Remote across IST",
  city: "India",
  country: "IN",
  currency: "INR",
  currencySymbol: "₹",
  pricingNote: "All prices in INR. GST extra as applicable.",
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
    "NexCart",
    "EduSpark",
    "Finlyte",
    "MediLink",
    "Homeyard",
    "CraftKart",
  ],
  keywords: [
    "digital marketing consultant India",
    "SEO consultant India",
    "Google Ads agency India freelance",
    "performance marketing consultant India",
    "Meta Ads specialist India",
    "CRO consultant India",
    "local SEO services India",
    "freelance digital marketer India",
    "SEO services for startups India",
    "PPC management India",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Format amount as Indian Rupees (en-IN). */
export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
