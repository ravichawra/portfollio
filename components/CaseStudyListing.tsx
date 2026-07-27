"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity";

export interface CaseStudyItem {
  _id?: string;
  title: string;
  slug: { current: string };
  client?: string;
  category: string;
  excerpt: string;
  coverImage?: string | Record<string, unknown>;
  metrics?: { value: string; label: string }[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
  customHref?: string;
}

const FALLBACK_CASE_STUDIES: CaseStudyItem[] = [
  {
    _id: "vyonna-fallback",
    title: "Vyonnastore — Complete E-Commerce & Growth Engine",
    slug: { current: "vyonna" },
    customHref: "/case-studies/vyonna",
    client: "Vyonnastore",
    category: "Shopify + E-mail Automation + Meta Ads",
    excerpt:
      "Built their Shopify store from the ground up, built their email workflow and fixed the cart abandonment issue, and took over their Meta ads. Three jobs that normally go to three different people — ran all of it to eliminate handoffs.",
    coverImage: "/images/vyonna-case-study-featured.png",
    metrics: [
      { value: "SHOPIFY", label: "BUILDS" },
      { value: "META", label: "ADS" },
      { value: "N8N / EMAIL", label: "AUTOMATION" },
    ],
    testimonialQuote:
      "\"Ravi was incredibly responsive throughout — quick replies, quick fixes, no chasing needed. Working with him felt easy from start to finish.\"",
    testimonialAuthor: "Prateek Chhugani, Founder, Vyonnastore",
  },
];

interface CaseStudyListingProps {
  initialStudies?: CaseStudyItem[];
}

export default function CaseStudyListing({ initialStudies = [] }: CaseStudyListingProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  // Merge Sanity studies with fallback
  const sanityItems: CaseStudyItem[] = (initialStudies || []).map((item) => ({
    ...item,
    coverImage: typeof item.coverImage === "string"
      ? item.coverImage
      : item.coverImage
      ? urlFor(item.coverImage).url()
      : undefined,
  }));

  const allStudies = [...FALLBACK_CASE_STUDIES, ...sanityItems];

  const categories = ["ALL", "SHOPIFY", "AUTOMATION", "META ADS"];

  const filtered = activeCategory === "ALL"
    ? allStudies
    : allStudies.filter((item) =>
        item.category.toUpperCase().includes(activeCategory)
      );

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-14 border-l-2 pl-6" style={{ borderColor: "#c0f500" }}>
        <span
          className="block mb-2 font-mono text-micro uppercase tracking-widest text-lime"
        >
          case studies
        </span>
        <h1
          className="font-bold uppercase mb-4 text-text-primary tracking-tight leading-tight"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
          }}
        >
          Systems Built for Real Business Growth
        </h1>
        <p className="max-w-2xl text-body-lg text-text-muted leading-relaxed">
          Detailed breakdowns of full-stack web builds, AI automation engines, and high-ROAS marketing systems built start-to-finish.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-12 border-b border-border-subtle pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 transition-all duration-200 font-mono text-micro uppercase tracking-widest"
            style={{
              backgroundColor: activeCategory === cat ? "#c0f500" : "transparent",
              color: activeCategory === cat ? "#161f00" : "#c4caac",
              border: `1px solid ${activeCategory === cat ? "#c0f500" : "#434933"}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies List */}
      <div className="space-y-12">
        {filtered.map((study, idx) => {
          const itemHref = study.customHref || `/case-studies/${study.slug.current}`;
          const isExternalImg = typeof study.coverImage === "string";

          return (
            <motion.article
              key={study._id || idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-bg-surface border border-border-subtle overflow-hidden grid grid-cols-1 lg:grid-cols-12 group hover:border-lime transition-all duration-300"
            >
              {/* Image Column */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden bg-bg-base">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: isExternalImg
                      ? `url('${study.coverImage}')`
                      : "url('/images/vyonna-case-study-featured.png')",
                  }}
                />
                <div className="absolute inset-0 bg-bg-base/30 pointer-events-none" />
                <div className="absolute top-4 left-4 font-mono text-micro text-lime uppercase tracking-widest bg-bg-base/80 backdrop-blur-md px-3 py-1 border border-border-subtle">
                  {study.client || "FEATURED BUILD"}
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between gap-6">
                <div>
                  <div className="font-mono text-micro text-lime uppercase tracking-widest mb-3">
                    {study.category}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-sans font-bold text-text-primary group-hover:text-lime transition-colors duration-300 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-body-md text-text-muted leading-relaxed mb-6">
                    {study.excerpt}
                  </p>

                  {/* Metrics Badges */}
                  {study.metrics && study.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-4 py-3 border-y border-border-subtle mb-6">
                      {study.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="font-sans font-bold text-lg text-lime">{m.value}</div>
                          <div className="font-mono text-micro text-text-faint uppercase tracking-widest">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Testimonial Quote if available */}
                  {study.testimonialQuote && (
                    <blockquote className="border-l-2 border-lime pl-4 py-2 bg-bg-base/40 text-text-muted italic text-sm mb-6">
                      <p>{study.testimonialQuote}</p>
                      {study.testimonialAuthor && (
                        <cite className="block not-italic font-mono text-micro text-lime mt-1 font-semibold">
                          — {study.testimonialAuthor}
                        </cite>
                      )}
                    </blockquote>
                  )}
                </div>

                <div>
                  <Link
                    href={itemHref}
                    className="inline-flex items-center gap-2 bg-lime text-on-primary font-mono text-micro uppercase tracking-widest px-6 py-3 font-bold brutalist-hover"
                  >
                    View Case Study Details →
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
