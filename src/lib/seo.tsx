import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const defaultOgImage = `${siteConfig.url}/og.svg`;

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "",
  image = defaultOgImage,
  noIndex = false,
  keywords = [],
}: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.fullName}`;

  const mergedKeywords = [...new Set([...siteConfig.keywords, ...keywords])];

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords: mergedKeywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "x-default": url,
      },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.fullName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_IN",
      type: "website",
      countryName: "India",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    category: "Digital Marketing",
    other: {
      "geo.region": "IN",
      "geo.placename": "India",
      language: "en-IN",
      "content-language": "en-IN",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: defaultOgImage,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: Object.values(siteConfig.social),
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Bank Transfer, UPI, Invoice",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "AdministrativeArea",
        name: "India",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "India",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: "Digital Marketing Consultant",
      url: `${siteConfig.url}/about`,
    },
    knowsAbout: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Performance Marketing",
      "Conversion Rate Optimization",
      "Google Analytics",
      "Local SEO India",
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.png`,
    jobTitle: "Digital Marketing Consultant",
    worksFor: {
      "@id": `${siteConfig.url}/#organization`,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: Object.values(siteConfig.social),
    knowsLanguage: ["en", "hi"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.fullName,
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  priceFrom?: number;
  pricing?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${siteConfig.url}${input.path}`,
    serviceType: input.name,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteConfig.url}/contact`,
      availableLanguage: ["English", "Hindi"],
    },
    ...(input.priceFrom
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: input.priceFrom,
            priceValidUntil: "2027-12-31",
            availability: "https://schema.org/InStock",
            url: `${siteConfig.url}${input.path}`,
            description: input.pricing,
          },
        }
      : {}),
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
