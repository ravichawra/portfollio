import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import DotGridParallax from "@/components/DotGridParallax";
import "./globals.css";

// Inter is the closest match to Geist — clean, geometric sans-serif
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
  title: "RAVI CHAWRA Independent Systems Builder",
  description:
    "I design, build, and automate systems that scale. Performance marketing, full-stack web development, and custom AI agents — one builder, total pipeline ownership.",
  keywords: [
    "freelance developer",
    "AI automation",
    "Next.js",
    "performance marketing",
    "n8n",
    "Shopify",
    "web development",
    "systems builder",
  ],
  authors: [{ name: "Ravi Chawra" }],
  creator: "Ravi Chawra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravichawra.com",
    title: "RAVI CHAWRA // Independent Systems Builder",
    description:
      "I design, build, and automate systems that scale. Performance marketing, full-stack web development, and custom AI agents.",
    siteName: "Ravi Chawra",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ravi Chawra Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAVI CHAWRA Independent Systems Builder",
    description: "I design, build, and automate systems that scale.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        <DotGridParallax />
        {children}
      </body>
    </html>
  );
}
