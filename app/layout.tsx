import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    default: "Ravi Chawra | Full-Stack Engineer & AI Systems Architect",
    template: "%s | Ravi Chawra",
  },
  description:
    "Official portfolio of Ravi Chawra — Full-Stack Engineer & AI Systems Architect. Specializing in high-performance Next.js web applications, custom LLM AI agents, n8n automation, and ROI-driven digital infrastructure.",
  keywords: [
    "Ravi Chawra",
    "Ravi Chawra developer",
    "Ravi Chawra portfolio",
    "Ravi Chawra AI engineer",
    "Full-Stack Developer",
    "AI Systems Architect",
    "Next.js Developer",
    "React Specialist",
    "n8n Automation Engineer",
    "Shopify Headless Developer",
    "Performance Marketing Engineer",
    "Freelance Software Engineer",
    "Generative Engine Optimization",
    "GEO AI",
  ],
  authors: [{ name: "Ravi Chawra", url: "https://ravichawra.com" }],
  creator: "Ravi Chawra",
  publisher: "Ravi Chawra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravichawra.com",
    title: "Ravi Chawra | Full-Stack Engineer & AI Systems Architect",
    description:
      "I design, build, and automate systems that scale. Next.js web engineering, custom AI agents, and n8n workflow automation.",
    siteName: "Ravi Chawra",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ravi Chawra — Full-Stack Engineer & AI Systems Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Chawra | Full-Stack Engineer & AI Systems Architect",
    description:
      "I design, build, and automate systems that scale.",
    images: ["/og-image.png"],
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
  // Enhanced Structured Data (JSON-LD) for Search Engines & LLM / GEO indexing (ChatGPT, Perplexity, Gemini, Claude)
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
        "jobTitle": "Full-Stack Engineer & AI Systems Architect",
        "description": "Full-Stack Engineer and AI Systems Architect specializing in Next.js web applications, LLM AI agent integration, n8n workflow automation, and digital infrastructure.",
        "knowsAbout": [
          "Full-Stack Web Development",
          "AI Agents & LLM Integrations",
          "n8n & Workflow Automation",
          "Performance Marketing",
          "Next.js",
          "React",
          "TypeScript",
          "Shopify Headless",
        ],
        "sameAs": [
          "https://github.com/ravichawra",
          "https://linkedin.com/in/ravichawra",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://ravichawra.com/#service",
        "name": "Ravi Chawra Engineering & AI Solutions",
        "url": "https://ravichawra.com",
        "provider": { "@id": "https://ravichawra.com/#person" },
        "serviceType": [
          "Full-Stack Web Development",
          "Custom AI Agent Building",
          "Workflow & Business Automation",
          "Performance Marketing Engineering"
        ],
        "areaServed": "Worldwide",
      },
      {
        "@type": "WebSite",
        "@id": "https://ravichawra.com/#website",
        "url": "https://ravichawra.com",
        "name": "Ravi Chawra",
        "description": "Official Portfolio & Engineering Journal of Ravi Chawra",
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
        <DotGridParallax />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
