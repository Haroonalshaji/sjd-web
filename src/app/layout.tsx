import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/providers/motion-provider";
import {
  buildMetadata,
  JsonLd,
  organizationSchema,
  personSchema,
  websiteSchema,
} from "@/lib/seo";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const dynamic = "force-static";

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${siteConfig.fullName} | Digital Marketing Consultant in India`,
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    default: `${siteConfig.fullName} | Digital Marketing Consultant in India`,
    template: `%s | ${siteConfig.fullName}`,
  },
  applicationName: siteConfig.fullName,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.fullName,
  keywords: [...siteConfig.keywords],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <JsonLd
          data={[organizationSchema(), personSchema(), websiteSchema()]}
        />
        <MotionProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
