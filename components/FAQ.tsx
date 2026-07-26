"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Why hire one person instead of an agency?",
    a: "Agencies split your work across different departments — design, dev, marketing — and things get lost between teams, plus you're paying for that overhead. With me, one person handles all of it, so nothing falls through the cracks and things move faster.",
  },
  {
    q: "What tools do you actually use?",
    a: "I build websites with Next.js and React, backed by Convex or Supabase for the data side. For automation, I use n8n — it connects the tools you already use to AI, without needing custom code for every single piece. For ads, I work directly inside the Meta Ads API so we can see what's actually working, not just what looks good on a dashboard.",
  },
  {
    q: "How long does an AI agent or automation take to build?",
    a: "Most agents — for customer support, lead sorting, or content — go from idea to a working first version in 2 to 4 weeks. You start seeing whether it works before months go by.",
  },
  {
    q: "Do you work alongside an existing team?",
    a: "Yes. I often plug in as the person who handles the harder technical work — the parts your team doesn't have the time or the setup for.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b" style={{ borderColor: "#434933" }}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between items-center w-full py-6 text-left group"
        aria-expanded={open}
      >
        <h3
          className="text-xl font-semibold transition-colors duration-200 pr-4"
          style={{
            fontFamily: "var(--font-sans)",
            color: open ? "#c0f500" : "#e3e2e2",
          }}
        >
          {q}
        </h3>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-2xl font-light"
          style={{ color: "#c0f500", lineHeight: 1 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 leading-relaxed max-w-2xl"
              style={{ fontFamily: "var(--font-sans)", color: "#c4caac", fontSize: "16px" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      className="border-b"
      style={{ borderColor: "#434933" }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left label + heading */}
          <div className="lg:col-span-1">
            <div
              className="uppercase tracking-widest text-sm mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "#c0f500", fontSize: "13px" }}
            >
             QUESTIONS
            </div>
            <h2
              id="faq-heading"
              className="font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(2rem, 3vw, 3rem)", color: "#e3e2e2", letterSpacing: "-0.02em" }}
            >
              Questions people usually ask before we start
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", color: "#c4caac", fontSize: "16px" }}>
              Here&apos;s what most people want to know upfront.
            </p>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-2 flex flex-col">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
