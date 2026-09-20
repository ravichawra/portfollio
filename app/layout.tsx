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
    "Ravi Chawra (Ravi Prakash Chawra) — Solo Builder, Full-Stack Developer & Automation Engineer. High-converting Next.js & Shopify sites, Meta Ads & n8n workflows.",
  keywords: [
    "Ravi Chawra",
    "Ravi Prakash",
    "Ravi Prakash Chawra",
    "Ravi Chawra developer",
    "Ravi Prakash developer",
    "Ravi Chawra portfolio",
    "Ravi Prakash portfolio",
    "Ravi Chawra solo builder",
    "Full-Stack Web Developer",
    "Automation Engineer",
    "n8n Automation",
    "Shopify Developer",
    "Meta Ads Engineer",
    "Conversion API CAPI",
    "Freelance Developer India",
  ],
  authors: [{ name: "Ravi Chawra (Ravi Prakash Chawra)", url: "https://ravichawra.com" }],
  creator: "Ravi Chawra",
  publisher: "Ravi Chawra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravichawra.com",
    title: "Ravi Chawra (Ravi Prakash Chawra) | Solo Builder & Full-Stack Developer",
    description:
      "Stop paying three different people to fix your ads, website, and automations. One person. Direct communication. Total accountability.",
    siteName: "Ravi Chawra",
    images: [
      {
        url: "/images/ravi-workspace-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Ravi Chawra (Ravi Prakash Chawra) — Solo Builder & Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Chawra (Ravi Prakash Chawra) | Solo Builder & Full-Stack Developer",
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
  // Enhanced Structured Data (JSON-LD) for Search Engines, Answer Engines & LLM / GEO indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ravichawra.com/#person",
        "name": "Ravi Chawra",
        "givenName": "Ravi",
        "additionalName": "Prakash",
        "familyName": "Chawra",
        "alternateName": [
          "Ravi Prakash",
          "Ravi Prakash Chawra",
          "RaviPrakash",
          "ravichawra"
        ],
        "disambiguatingDescription": "Ravi Prakash Chawra (known professionally as Ravi Chawra) is a solo builder, full-stack web developer, and automation engineer based in India.",
        "url": "https://ravichawra.com",
        "jobTitle": "Solo Builder, Full-Stack Web Developer & Automation Engineer",
        "description": "Solo Builder and Full-Stack Developer specializing in high-converting web applications, Shopify stores, Meta Ads server-side tracking, and n8n workflow automations.",
        "image": "https://ravichawra.com/images/ravi-portrait.jpg",
        "nationality": {
          "@type": "Country",
          "name": "India"
        },
        "knowsAbout": [
          "Full-Stack Web Development",
          "Shopify & E-Commerce Engineering",
          "n8n Workflow Automations",
          "Meta Ads & Conversion API (CAPI)",
          "Next.js & React",
          "TypeScript",
          "AI Agent Automations"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Client Strategy & Inquiries",
          "url": "https://cal.com/ravichawra/30min",
          "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
          "https://github.com/ravichawra",
          "https://linkedin.com/in/ravichawra",
          "https://instagram.com/ravichawraaa"
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://ravichawra.com/#profilepage",
        "url": "https://ravichawra.com",
        "name": "Ravi Chawra (Ravi Prakash Chawra) — Profile & Systems Portfolio",
        "isPartOf": { "@id": "https://ravichawra.com/#website" },
        "mainEntity": { "@id": "https://ravichawra.com/#person" }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://ravichawra.com/#service",
        "name": "Ravi Chawra — Solo Systems & Engineering",
        "url": "https://ravichawra.com",
        "provider": { "@id": "https://ravichawra.com/#person" },
        "image": "https://ravichawra.com/images/ravi-workspace-cinematic.jpg",
        "priceRange": "$$",
        "currenciesAccepted": "USD, INR",
        "serviceType": [
          "Full-Stack Web Development",
          "Shopify Custom Store Build",
          "n8n Workflow Automation",
          "Meta Ads & Conversion API Setup"
        ],
        "areaServed": "Worldwide",
      },
      {
        "@type": "FAQPage",
        "@id": "https://ravichawra.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I hire you for just one specific task (e.g. only web dev or only n8n automation)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. If you already have ads running and just need an n8n workflow to connect your leads to WhatsApp, or just need a Shopify revamp, we can do just that single sprint."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a typical build take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A dedicated landing page or automation workflow typically takes 4 to 7 days. A full store build or multi-system setup takes 10 to 14 days. You receive continuous progress previews."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if something breaks after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I don't disappear after deployment. Every project includes post-launch support to ensure pixel tracking, checkout flows, and automated triggers run smoothly without interruptions."
            }
          },
          {
            "@type": "Question",
            "name": "How does pricing work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fixed, upfront pricing per project. After our initial 30-minute discovery call, you get a clear proposal detailing scope, timeline, and exact investment. No hidden retainers or surprise hourly invoices."
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://ravichawra.com/#website",
        "url": "https://ravichawra.com",
        "name": "Ravi Chawra",
        "alternateName": ["Ravi Prakash", "Ravi Prakash Chawra Portfolio", "ravichawra.com"],
        "description": "Official Portfolio & Systems Showcase of Ravi Chawra (Ravi Prakash Chawra)",
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
