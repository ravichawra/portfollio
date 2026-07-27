import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostContent from "@/components/BlogPostContent";
import { getPostBySlug, getAllPostSlugs, urlFor } from "@/lib/sanity";

export const revalidate = 60; // On-demand ISR revalidation every 60s for new Sanity posts

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let post = null;
  try {
    post = await getPostBySlug(slug);
  } catch {
    /* sanity error fallback */
  }

  if (!post) {
    return {
      title: "Post Not Found | Ravi Chawra",
      robots: { index: false, follow: true },
    };
  }

  const postUrl = `https://ravichawra.com/blog/${slug}`;
  const coverImageUrl = post.coverImage ? urlFor(post.coverImage).width(1200).height(630).url() : "/og-image.png";

  return {
    title: `${post.title} | Ravi Chawra`,
    description: post.excerpt || `${post.title} — Written by Ravi Chawra.`,
    authors: [{ name: "Ravi Chawra", url: "https://ravichawra.com" }],
    creator: "Ravi Chawra",
    publisher: "Ravi Chawra",
    keywords: [
      "Ravi Chawra",
      post.category || "Engineering",
      ...(post.tags || []),
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: postUrl,
      title: `${post.title} | Ravi Chawra`,
      description: post.excerpt || post.title,
      siteName: "Ravi Chawra",
      publishedTime: post.publishedAt,
      authors: ["Ravi Chawra"],
      tags: post.tags || [],
      images: [
        {
          url: coverImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Ravi Chawra`,
      description: post.excerpt || post.title,
      images: [coverImageUrl],
      creator: "@ravichawra",
    },
  };
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post = null;
  try {
    post = await getPostBySlug(slug);
  } catch {
    /* sanity error fallback */
  }

  if (!post) notFound();

  const postUrl = `https://ravichawra.com/blog/${slug}`;
  const coverImageUrl = post.coverImage ? urlFor(post.coverImage).url() : undefined;

  // JSON-LD BlogPosting Schema for Search Engines (Google) & LLM Crawlers (ChatGPT, Claude, Perplexity)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}/#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl,
    },
    "headline": post.title,
    "description": post.excerpt || post.title,
    "image": coverImageUrl ? [coverImageUrl] : undefined,
    "datePublished": post.publishedAt || new Date().toISOString(),
    "dateModified": post.publishedAt || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": "Ravi Chawra",
      "url": "https://ravichawra.com",
    },
    "publisher": {
      "@type": "Person",
      "name": "Ravi Chawra",
      "url": "https://ravichawra.com",
    },
    "articleSection": post.category || "Engineering",
    "keywords": (post.tags || []).join(", "),
    "inLanguage": "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar backLink={{ href: "/blog", label: "← BACK TO JOURNAL" }} />
      <main>
        <BlogPostContent post={post} />
      </main>
      <Footer />
    </>
  );
}
