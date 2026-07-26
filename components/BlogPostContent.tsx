"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";

// ── Portable Text rendering matching Stitch blog post design
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "18px",
          color: "#c4caac",
          lineHeight: 1.8,
          marginBottom: "24px",
        }}
      >
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "20px",
          color: "#e3e2e2",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginTop: "48px",
          marginBottom: "16px",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "16px",
          color: "#e3e2e2",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginTop: "32px",
          marginBottom: "12px",
        }}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #c0f500",
          paddingLeft: "24px",
          paddingTop: "16px",
          paddingBottom: "16px",
          margin: "32px 0",
          fontStyle: "italic",
          backgroundColor: "#1b1c1c",
          fontFamily: "var(--font-sans)",
          fontSize: "18px",
          color: "#e3e2e2",
          lineHeight: 1.6,
        }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ color: "#e3e2e2", fontWeight: 700 }}>{children}</strong>
    ),
    em: ({ children }) => (
      <em style={{ color: "#c4caac" }}>{children}</em>
    ),
    code: ({ children }) => (
      <code
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          color: "#c0f500",
          backgroundColor: "#1b1c1c",
          padding: "2px 6px",
          border: "1px solid #434933",
        }}
      >
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#c0f500",
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          textDecorationThickness: "1px",
        }}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure style={{ margin: "40px 0" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urlFor(value).width(900).url()}
          alt={value.alt ?? ""}
          className="w-full border"
          style={{ borderColor: "#434933" }}
        />
        {value.caption && (
          <figcaption
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "#8e9479",
              marginTop: "8px",
              textAlign: "center",
            }}
          >
             {value.caption} */
          </figcaption>
        )}
      </figure>
    ),
  },
};

// ── Format date
function formatDate(iso?: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogPostContent({ post }: { post: any }) {
  return (
    <article>
      {/* ── Article header ── */}
      <header className="max-w-[900px] mx-auto px-6 pt-24 pb-12">
        {/* Category + date */}
        <div className="flex items-center gap-4 mb-6">
          {post.category && (
            <span
              className="px-3 py-1 border"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "#c0f500",
                borderColor: "#434933",
                backgroundColor: "#292a2a",
                letterSpacing: "0.05em",
              }}
            >
               {post.category}
            </span>
          )}
          <time
            dateTime={post.publishedAt}
            style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#8e9479" }}
          >
            {formatDate(post.publishedAt)}
          </time>
          {post.readTime && (
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#8e9479" }}>
              {post.readTime} MIN READ
            </span>
          )}
        </div>

        {/* Title */}
        <h1
          className="font-extrabold mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "#e3e2e2",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}
        >
          {post.title}
        </h1>

        {/* Excerpt as code comment */}
        {post.excerpt && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: "#8e9479",
              lineHeight: 1.6,
            }}
          >
             {post.excerpt} */
          </p>
        )}
      </header>

      {/* ── Hero image ── */}
      {post.coverImage && (
        <div
          className="w-full mb-16 overflow-hidden border border-l-0 border-r-0 transition-all duration-700"
          style={{ borderColor: "#434933", aspectRatio: "21/9" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(post.coverImage).width(1400).url()}
            alt={post.title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      )}

      {/* ── Body content ── */}
      <div className="max-w-[700px] mx-auto px-6 pb-24">
        {post.body ? (
          <PortableText value={post.body} components={components} />
        ) : (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#8e9479" }}>
             Post body coming soon */
          </p>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div
            className="mt-16 pt-8 border-t flex flex-wrap gap-2"
            style={{ borderColor: "#434933" }}
          >
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 border"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "#8e9479",
                  borderColor: "#434933",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
