import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/"],
      },
      {
        userAgent: [
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
        ],
        allow: "/",
        disallow: ["/studio/", "/api/"],
      },
    ],
    sitemap: "https://ravichawra.com/sitemap.xml",
  };
}
