"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { Post } from "@/app/blog/page";

const CATEGORIES = ["ALL_ENTRIES", "AUTOMATION", "UI/UX_DESIGN", "BACKEND_ARCH", "AI_AGENTS", "METRICS"];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

// Format ISO date to YYYY.MM.DD
function formatDate(iso?: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

// Newsletter signup card (6th card slot)
function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <article
      className="flex flex-col border border-dashed p-6"
      style={{ borderColor: "#c0f500", backgroundColor: "#1f2020" }}
    >
      <div className="flex-grow flex flex-col justify-center items-center text-center">
        <div style={{ fontSize: "48px", color: "#c0f500", marginBottom: "16px" }}>@</div>
        <h3
          className="font-bold mb-3"
          style={{ fontFamily: "var(--font-mono)", fontSize: "16px", color: "#e3e2e2", letterSpacing: "0.05em" }}
        >
          SUBSCRIBE_TO_SIGNAL
        </h3>
        <p
          className="mb-6 px-2"
          style={{ fontFamily: "var(--font-sans)", color: "#c4caac", fontSize: "14px" }}
        >
          Get technical updates and architectural insights delivered directly to your inbox.
        </p>
        {done ? (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#c0f500" }}>
            ✓ YOU&apos;RE SUBSCRIBED
          </p>
        ) : (
          <div className="w-full space-y-3">
            <div
              className="flex items-center gap-2 border-b pb-2"
              style={{ borderColor: "#c0f500" }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#c0f500" }}>$</span>
              <input
                type="email"
                placeholder="enter_email_address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none outline-none flex-1"
                style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#e3e2e2" }}
              />
            </div>
            <button
              onClick={() => email && setDone(true)}
              className="w-full py-3 font-bold uppercase transition-all duration-200 hover:invert"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                backgroundColor: "#c0f500",
                color: "#161f00",
                letterSpacing: "0.05em",
              }}
            >
              Execute_Subscription
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default function BlogListing({ initialPosts }: { initialPosts: Post[] }) {
  const [active, setActive] = useState("ALL_ENTRIES");

  const filtered =
    active === "ALL_ENTRIES"
      ? initialPosts
      : initialPosts.filter((p) => p.category === active);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20">
      {/* Hero header */}
      <div
        className="mb-16 border-l-2 pl-6"
        style={{ borderColor: "#c0f500" }}
      >
        <span
          className="block mb-2"
          style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#c0f500" }}
        >
         blog
        </span>
        <h1
          className="font-bold uppercase mb-3"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            color: "#e3e2e2",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Insights &amp; Updates
        </h1>
        <p
          className="max-w-2xl"
          style={{ fontFamily: "var(--font-sans)", color: "#c4caac", fontSize: "18px", lineHeight: 1.6 }}
        >
          Technical documentation, engineering deep-dives, and philosophical
          musings on the future of code and digital architecture.
        </p>
      </div>

      {/* Category filter */}
      <div
        className="flex flex-wrap gap-3 mb-12 border-b pb-6"
        style={{ borderColor: "#434933" }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-4 py-2 transition-all duration-200"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              letterSpacing: "0.05em",
              backgroundColor: active === cat ? "#c0f500" : "transparent",
              color: active === cat ? "#161f00" : "#c4caac",
              border: `1px solid ${active === cat ? "#c0f500" : "#434933"}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          // Empty state — shown before Sanity is connected
          <div
            className="col-span-full py-20 text-center border border-dashed"
            style={{ borderColor: "#434933" }}
          >
            <p
              style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#8e9479" }}
            >
              No posts yet. Add your first post via{" "}
              <Link href="/studio" style={{ color: "#c0f500", textDecoration: "underline" }}>
                /studio
              </Link>
              {" "}*/
            </p>
          </div>
        ) : (
          <>
            {filtered.map((post, i) => (
              <motion.article
                key={post._id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="group flex flex-col border transition-all duration-300"
                style={{ borderColor: "#434933", backgroundColor: "#1b1c1c" }}
                whileHover={{
                  borderColor: "#c0f500",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Image */}
                <div
                  className="overflow-hidden relative border-b"
                  style={{ height: "192px", borderColor: "#434933" }}
                >
                  {post.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${post.coverImage.asset._ref.replace("image-", "").replace(/-(\w+)$/, ".$1")}`}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: "#1f2020" }}
                    >
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#434933" }}>
                         no_cover_image 
                      </span>
                    </div>
                  )}
                  {/* Category badge */}
                  {post.category && (
                    <div
                      className="absolute top-4 left-4 px-3 py-1 border"
                      style={{ backgroundColor: "#0d0e0f", borderColor: "#434933" }}
                    >
                      <span
                        style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#c0f500" }}
                      >
                         {post.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span
                      style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#8e9479" }}
                    >
                      {formatDate(post.publishedAt)}
                    </span>
                    {post.readTime && (
                      <span
                        style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#8e9479" }}
                      >
                        {String(post.readTime).padStart(2, "0")} MIN READ
                      </span>
                    )}
                  </div>

                  <h2
                    className="font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "20px",
                      color: "#e3e2e2",
                      lineHeight: 1.4,
                    }}
                  >
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p
                      className="mb-6 line-clamp-3"
                      style={{ fontFamily: "var(--font-sans)", color: "#c4caac", fontSize: "15px", lineHeight: 1.6 }}
                    >
                      {post.excerpt}
                    </p>
                  )}

                  <div
                    className="mt-auto pt-4 border-t flex justify-between items-center"
                    style={{ borderColor: "#434933" }}
                  >
                    <Link
                      href={`/blog/${post.slug.current}`}
                      style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#c0f500", letterSpacing: "0.05em" }}
                      className="hover:underline underline-offset-4"
                    >
                      READ_FULL_DOC.sh
                    </Link>
                    <span style={{ color: "#c0f500", fontSize: "16px" }}>↗</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </>
        )}
        {/* Newsletter card — always 6th slot */}
        {filtered.length > 0 && <NewsletterCard />}
      </div>
    </div>
  );
}
