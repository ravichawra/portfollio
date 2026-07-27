import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const allowedUserAgents = [
    // Standard Search Engine Crawlers
    "*",
    "Googlebot",
    "Bingbot",
    "Slurp",
    "DuckDuckBot",
    "Baiduspider",
    "YandexBot",

    // LLM / AI Search & GEO Crawlers (Generative Engine Optimization)
    "GPTBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "PerplexityBot",
    "Google-Extended",
    "Applebot",
    "Applebot-Extended",
    "Meta-ExternalAgent",
    "CCBot",
    "Cohere-ai",
    "Diffbot",
    "Bytespider",
    "Amazonbot",
  ];

  return {
    rules: allowedUserAgents.map((agent) => ({
      userAgent: agent,
      allow: "/",
      disallow: ["/studio", "/studio/*", "/api/*"],
    })),
    sitemap: "https://ravichawra.com/sitemap.xml",
  };
}
