import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
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
  title: "RAVI.DEV // Independent Systems Builder",
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
  authors: [{ name: "Ravi" }],
  creator: "Ravi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravi.dev",
    title: "RAVI.DEV // Independent Systems Builder",
    description:
      "I design, build, and automate systems that scale. Performance marketing, full-stack web development, and custom AI agents.",
    siteName: "RAVI.DEV",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RAVI.DEV Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAVI.DEV // Independent Systems Builder",
    description:
      "I design, build, and automate systems that scale.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${jetbrains.variable} font-sans antialiased bg-bg-base text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
