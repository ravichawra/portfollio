import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogListing from "@/components/BlogListing";
import { getAllPosts } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Insights & Updates | RAVI CHAWRA",
  description:
    "Technical documentation, engineering deep-dives, and architectural insights on web performance, AI automation, and paid acquisition.",
};

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function BlogPage() {
  // Gracefully handle missing Sanity project ID (pre-launch)
  let posts: Post[] = [];
  try {
    posts = await getAllPosts();
  } catch {
    // Sanity not yet connected — show empty state
  }

  return (
    <>
      <Navbar />
      <main>
        <BlogListing initialPosts={posts} />
      </main>
      <Footer />
    </>
  );
}

// Type def for blog post
export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  readTime?: number;
  coverImage?: { asset: { _ref: string } };
}
