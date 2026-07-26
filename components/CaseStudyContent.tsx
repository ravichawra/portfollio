"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const METRICS = [
  { value: "4.2x", label: "ROAS" },
  { value: "90%", label: "AUTOMATED" },
  { value: "35%", label: "CONVERSION LIFT" },
];

const SOLUTIONS = [
  {
    icon: "⚡",
    title: "1. Headless Shopify Build",
    body: "Decoupled the frontend using Next.js connected to Shopify's Storefront API. This structural shift drastically improved page load speeds and SEO metrics, directly contributing to the 35% conversion lift.",
  },
  {
    icon: "🔀",
    title: "2. n8n & Make Workflows",
    body: "Engineered robust serverless workflows. Deployed n8n for critical real-time inventory synchronization across disparate systems and utilized Make for sophisticated multi-step lead capture and nurture sequences.",
  },
];

export default function CaseStudyContent() {
  return (
    <>
      {/* Fixed noise labels */}
      <div
        className="fixed top-1/4 right-0 pointer-events-none select-none z-0"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "#434933",
          transform: "rotate(-90deg)",
          transformOrigin: "bottom right",
        }}
        aria-hidden
      >
       
      </div>

      {/* ── Hero ── */}
      <section
        className="border-b relative overflow-hidden"
        style={{ borderColor: "#434933" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-16 md:py-24">
          {/* Ref tag */}
          <div
            className="absolute top-6 right-6"
            style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#c0f500" }}
          >
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              <motion.h1
                variants={fadeUp}
                className="font-bold leading-tight uppercase"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                  color: "#e3e2e2",
                  letterSpacing: "-0.02em",
                }}
              >
                Vyonnastore Jwellary Brand {" "}
                <span style={{ color: "#c0f500" }}>4.2x ROAS</span>{" "}
                via Automated Scaling
              </motion.h1>

              <motion.p
                variants={fadeUp}
                style={{ fontFamily: "var(--font-sans)", color: "#c4caac", fontSize: "18px", lineHeight: 1.6 }}
              >
                A full-funnel transformation involving Shopify headless
                migration, n8n automation, and Meta Ads.
              </motion.p>

              <motion.div variants={fadeUp}>
                <span
                  className="inline-block border-b pb-1 uppercase"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "#c0f500",
                    borderColor: "#c0f500",
                  }}
                >
                   STATUS: DEPLOYED &amp; SCALING
                </span>
              </motion.div>
            </motion.div>

            {/* Right — hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden border"
              style={{ borderColor: "#434933", aspectRatio: "4/3" }}
            >
              <img
                src="/images/vyonna-sun-earrings-clean.png"
                alt="Vyonnastore Gold Sun Earrings — product photography"
                className="w-full h-full object-cover transition-all duration-700 opacity-90 hover:opacity-100"
              />
              <div
                className="absolute bottom-0 right-0 px-3 py-1 border-l border-t"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderColor: "#434933",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "#8e9479",
                }}
              >
            
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className="border-b" style={{ borderColor: "#434933" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {METRICS.map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                className="border flex flex-col justify-center items-center text-center py-12 px-6 group cursor-crosshair transition-all duration-300"
                style={{ borderColor: "#434933", backgroundColor: "#1a1a1a" }}
                whileHover={{
                  borderColor: "#c0f500",
                  x: -2,
                  y: -2,
                  boxShadow: "2px 2px 0px 0px #c0f500",
                  transition: { duration: 0.2 },
                }}
              >
                <div
                  className="font-extrabold leading-none mb-3"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "72px", color: "#c0f500", letterSpacing: "-0.04em" }}
                >
                  {m.value}
                </div>
                <div
                  className="uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#e3e2e2" }}
                >
                  {m.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Challenge & Solution ── */}
      <section className="border-b" style={{ borderColor: "#434933" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Challenge */}
            <div className="md:col-span-4 md:pr-8 md:border-r" style={{ borderColor: "#434933" }}>
              <h2
                className="uppercase flex items-center gap-2 mb-4"
                style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#c0f500", letterSpacing: "0.05em" }}
              >
                ⚠ THE CHALLENGE
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", color: "#c4caac", fontSize: "16px", lineHeight: 1.7 }}>
                Prior to intervention, vayonnastore was trapped in a cycle
                of manual operational chaos. Inventory syncing between multiple
                retail nodes and their legacy e-commerce platform required hours
                of daily manual entry. Furthermore, their ad spend was highly
                inefficient, lacking automated creative testing and suffering
                from poor conversion rates due to a sluggish monolithic frontend.
              </p>
            </div>

            {/* Solution pillars */}
            <div className="md:col-span-8 md:pl-8">
              <h2
                className="uppercase flex items-center gap-2 mb-6"
                style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#c0f500", letterSpacing: "0.05em" }}
              >
                 THE SOLUTION ARCHITECTURE
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {SOLUTIONS.map((s) => (
                  <motion.div
                    key={s.title}
                    className="border relative overflow-hidden group p-5 transition-colors duration-300"
                    style={{ borderColor: "#434933", backgroundColor: "#1a1a1a" }}
                    whileHover={{ borderColor: "#c0f500", transition: { duration: 0.2 } }}
                  >
                    {/* Lime left accent line */}
                    <div
                      className="absolute top-0 left-0 w-1 h-full transition-transform duration-300 -translate-x-full group-hover:translate-x-0"
                      style={{ backgroundColor: "#c0f500" }}
                    />
                    <h3
                      className="uppercase mb-2"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#e3e2e2", letterSpacing: "0.05em" }}
                    >
                      {s.icon} {s.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", color: "#c4caac", fontSize: "15px", lineHeight: 1.6 }}>
                      {s.body}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Meta Ads full-width pillar */}
              <motion.div
                className="border relative overflow-hidden group p-5 flex flex-col md:flex-row gap-6 items-start transition-colors duration-300"
                style={{ borderColor: "#434933", backgroundColor: "#1a1a1a" }}
                whileHover={{ borderColor: "#c0f500", transition: { duration: 0.2 } }}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full transition-transform duration-300 -translate-x-full group-hover:translate-x-0"
                  style={{ backgroundColor: "#c0f500" }}
                />
                <div className="flex-1">
                  <h3
                    className="uppercase mb-2"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#e3e2e2", letterSpacing: "0.05em" }}
                  >
                    📢 3. Meta Ads Strategy
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", color: "#c4caac", fontSize: "15px", lineHeight: 1.6 }}>
                    Implemented a programmatic approach to creative testing and
                    scaling. Built an automated pipeline that dynamically injects
                    top-performing product catalogs into Meta, aggressively
                    allocating budget to high-yield creative variants while pausing
                    underperformers.
                  </p>
                </div>
                <div
                  className="w-full md:w-1/3 h-32 border shrink-0 overflow-hidden"
                  style={{ borderColor: "#434933" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv1YMm5wPhaD4gb6vrDbFkkElkzNnKkuIuSfUB2bOE6gYa3BdzRgdqNywJtcWpGOZEs6mjC2xnkZayTLFQJIoGvoTw5Cq_cY86XxzAOojgUrHT7yNSktXC1dXG4JnKjnHmcbXxigPhxsKnNXo8wJAPT0NK1nu9wRA69EFqO0xo_ho5DPaY67pWWxfaSt6AzYsjbUUYulYEBwfC5cGvaaSI_-H9m0qKisiZD1QclWTUmYbrSbL8sk8kC83kTknsJKigkYoIzuLJtj9m"
                    alt="n8n workflow automation dashboard"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial & CTA ── */}
      <section className="border-b" style={{ borderColor: "#434933" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-20 text-center flex flex-col items-center gap-8">
          <div className="max-w-2xl">
            <div style={{ fontSize: "40px", color: "#c0f500", marginBottom: "16px" }}>&ldquo;</div>
            <blockquote
              className="italic mb-4"
              style={{ fontFamily: "var(--font-sans)", fontSize: "22px", color: "#e3e2e2", lineHeight: 1.5 }}
            >
              The shift was immediate. Not only did our site feel incredibly
              fast, but the underlying automation removed a massive operational
              bottleneck. We went from managing chaos to managing growth.
            </blockquote>
            <div
              className="uppercase tracking-widest"
              style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#c0f500" }}
            >
            
            </div>
          </div>

          <div className="border-t w-full pt-10" style={{ borderColor: "#434933" }}>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border font-bold uppercase transition-all duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                letterSpacing: "0.1em",
                backgroundColor: "#c0f500",
                color: "#161f00",
                borderColor: "#c0f500",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#c0f500";
                e.currentTarget.style.transform = "translate(-2px, -2px)";
                e.currentTarget.style.boxShadow = "2px 2px 0px 0px #c0f500";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#c0f500";
                e.currentTarget.style.color = "#161f00";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              → START YOUR PROJECT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
