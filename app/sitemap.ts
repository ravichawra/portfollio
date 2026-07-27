import type { MetadataRoute } from "next";
import { getAllPostSlugs, getAllCaseStudySlugs } from "@/lib/sanity";

export const revalidate = 3600; // Revalidate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ravichawra.com";

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies/vyonna`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/ethereal-jewelry`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic Blog Posts from Sanity
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const postSlugs = await getAllPostSlugs();
    blogRoutes = postSlugs.map((item: { slug: string }) => ({
      url: `${baseUrl}/blog/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (e) {
    console.warn("Sitemap: Failed to fetch blog slugs", e);
  }

  // Dynamic Case Studies from Sanity
  let caseStudyRoutes: MetadataRoute.Sitemap = [];
  try {
    const studySlugs = await getAllCaseStudySlugs();
    caseStudyRoutes = studySlugs.map((item: { slug: string }) => ({
      url: `${baseUrl}/case-studies/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch (e) {
    console.warn("Sitemap: Failed to fetch case study slugs", e);
  }

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
