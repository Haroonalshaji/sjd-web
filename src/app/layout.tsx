import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/providers/motion-provider";
import { buildMetadata, JsonLd, organizationSchema } from "@/lib/seo";
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

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${siteConfig.fullName} | ${siteConfig.title}`,
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.fullName}`,
  },
  applicationName: siteConfig.fullName,
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  keywords: [
    "digital marketing consultant",
    "SEO consultant",
    "Google Ads management",
    "performance marketing",
    "CRO",
    "freelance digital marketer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <JsonLd data={organizationSchema()} />
        <MotionProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
