import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const envProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// Validate that projectId follows Sanity's pattern [a-z0-9-]+ or fallback to a safe valid format placeholder
export const projectId =
  envProjectId && /^[a-z0-9-]+$/i.test(envProjectId)
    ? envProjectId
    : "demo-project-id";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  stega: { studioUrl: "/studio" },
});

// Image URL builder
const builder = imageUrlBuilder(client);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// ── GROQ Queries ───────────────────────────────────────────────

// All posts for listing page
export async function getAllPosts(category?: string) {
  if (!envProjectId || envProjectId === "YOUR_PROJECT_ID_HERE") {
    return [];
  }
  try {
    const filter = category && category !== "ALL" ? `&& category == $category` : "";
    const posts = await client.fetch(
      `*[_type == "post" ${filter}] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        category,
        publishedAt,
        readTime,
        tags,
        coverImage
      }`,
      category && category !== "ALL" ? { category } : {}
    );
    return posts || [];
  } catch (err) {
    console.warn("Sanity fetch failed:", err);
    return [];
  }
}

// Single post by slug
export async function getPostBySlug(slug: string) {
  if (!envProjectId || envProjectId === "YOUR_PROJECT_ID_HERE") {
    return null;
  }
  try {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        category,
        publishedAt,
        readTime,
        tags,
        coverImage,
        body
      }`,
      { slug }
    );
    return post || null;
  } catch (err) {
    console.warn("Sanity fetch post failed:", err);
    return null;
  }
}

// All slugs for static generation
export async function getAllPostSlugs() {
  if (!envProjectId || envProjectId === "YOUR_PROJECT_ID_HERE") {
    return [];
  }
  try {
    const slugs = await client.fetch(
      `*[_type == "post" && defined(slug.current)] { "slug": slug.current }`
    );
    return slugs || [];
  } catch (err) {
    console.warn("Sanity fetch slugs failed:", err);
    return [];
  }
}

// ── Case Studies GROQ Queries ───────────────────────────────────────

export async function getAllCaseStudies() {
  if (!envProjectId || envProjectId === "YOUR_PROJECT_ID_HERE") {
    return [];
  }
  try {
    const studies = await client.fetch(
      `*[_type == "caseStudy"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        client,
        category,
        excerpt,
        coverImage,
        metrics,
        publishedAt,
        testimonialQuote,
        testimonialAuthor
      }`
    );
    return studies || [];
  } catch (err) {
    console.warn("Sanity fetch case studies failed:", err);
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string) {
  if (!envProjectId || envProjectId === "YOUR_PROJECT_ID_HERE") {
    return null;
  }
  try {
    const study = await client.fetch(
      `*[_type == "caseStudy" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        client,
        category,
        excerpt,
        coverImage,
        metrics,
        publishedAt,
        testimonialQuote,
        testimonialAuthor,
        body
      }`,
      { slug }
    );
    return study || null;
  } catch (err) {
    console.warn("Sanity fetch case study failed:", err);
    return null;
  }
}

export async function getAllCaseStudySlugs() {
  if (!envProjectId || envProjectId === "YOUR_PROJECT_ID_HERE") {
    return [];
  }
  try {
    const slugs = await client.fetch(
      `*[_type == "caseStudy" && defined(slug.current)] { "slug": slug.current }`
    );
    return slugs || [];
  } catch (err) {
    console.warn("Sanity fetch case study slugs failed:", err);
    return [];
  }
}
