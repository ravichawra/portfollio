import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/components/SmoothScroll";
import DotGridParallax from "@/components/DotGridParallax";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ravichawra.com"),
  title: {
    default: "Ravi Chawra | Solo Builder, Full-Stack Developer & Automation Engineer",
    template: "%s | Ravi Chawra",
  },
  description:
    "Stop paying three different people to fix your ads, website, and automations. I build the website, set up the tracking, run the ads, and automate the manual steps.",
  keywords: [
    "Ravi Chawra",
    "Ravi Chawra developer",
    "Ravi Chawra portfolio",
    "Ravi Chawra solo builder",
    "Full-Stack Web Developer",
    "Automation Engineer",
    "n8n Automation",
    "Shopify Developer",
    "Meta Ads Engineer",
    "Conversion API CAPI",
    "Freelance Developer India",
  ],
  authors: [{ name: "Ravi Chawra", url: "https://ravichawra.com" }],
  creator: "Ravi Chawra",
  publisher: "Ravi Chawra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravichawra.com",
    title: "Ravi Chawra | Solo Builder, Full-Stack Developer & Automation Engineer",
    description:
      "Stop paying three different people to fix your ads, website, and automations. One person. Direct communication. Total accountability.",
    siteName: "Ravi Chawra",
    images: [
      {
        url: "/images/ravi-workspace-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Ravi Chawra — Solo Builder & Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Chawra | Solo Builder, Full-Stack Developer & Automation Engineer",
    description:
      "Stop paying three different people to fix your ads, website, and automations.",
    images: ["/images/ravi-workspace-cinematic.jpg"],
    creator: "@ravichawra",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://ravichawra.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enhanced Structured Data (JSON-LD) for Search Engines & LLM / GEO indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ravichawra.com/#person",
        "name": "Ravi Chawra",
        "givenName": "Ravi",
        "familyName": "Chawra",
        "url": "https://ravichawra.com",
        "jobTitle": "Solo Builder, Full-Stack Web Developer & Automation Engineer",
        "description": "Solo Builder and Full-Stack Developer specializing in high-converting web applications, Shopify stores, Meta Ads server-side tracking, and n8n workflow automations.",
        "image": "https://ravichawra.com/images/ravi-portrait.jpg",
        "knowsAbout": [
          "Full-Stack Web Development",
          "Shopify & E-Commerce Engineering",
          "n8n Workflow Automations",
          "Meta Ads & Conversion API (CAPI)",
          "Next.js & React",
          "TypeScript",
          "AI Agent Automations"
        ],
        "sameAs": [
          "https://github.com/ravichawra",
          "https://linkedin.com/in/ravichawra",
          "https://instagram.com/ravichawraaa"
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://ravichawra.com/#service",
        "name": "Ravi Chawra — Solo Systems & Engineering",
        "url": "https://ravichawra.com",
        "provider": { "@id": "https://ravichawra.com/#person" },
        "serviceType": [
          "Full-Stack Web Development",
          "Shopify Custom Store Build",
          "n8n Workflow Automation",
          "Meta Ads & Conversion API Setup"
        ],
        "areaServed": "Worldwide",
      },
      {
        "@type": "WebSite",
        "@id": "https://ravichawra.com/#website",
        "url": "https://ravichawra.com",
        "name": "Ravi Chawra",
        "description": "Official Portfolio & Systems Showcase of Ravi Chawra",
        "publisher": { "@id": "https://ravichawra.com/#person" },
        "inLanguage": "en-US",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        <SmoothScroll>
          <DotGridParallax />
          {children}
        </SmoothScroll>
        <SpeedInsights />
      </body>
    </html>
  );
}
