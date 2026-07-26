import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostContent from "@/components/BlogPostContent";
import { getPostBySlug, getAllPostSlugs } from "@/lib/sanity";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let post = null;
  try {
    post = await getPostBySlug(slug);
  } catch { /* sanity not connected */ }

  if (!post) {
    return {
      title: "Post Not Found | RAVI CHAWRA",
    };
  }

  return {
    title: `${post.title} | RAVI CHAWRA`,
    description: post.excerpt || post.title,
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
  } catch { /* sanity not connected */ }

  if (!post) notFound();

  return (
    <>
      <Navbar backLink={{ href: "/blog", label: "← BACK TO JOURNAL" }} />
      <main>
        <BlogPostContent post={post} />
      </main>
      <Footer />
    </>
  );
}
