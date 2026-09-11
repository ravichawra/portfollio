"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Can I hire you for just one specific task (e.g. only web dev or only n8n automation)?",
    a: "Absolutely. If you already have ads running and just need an n8n workflow to connect your leads to WhatsApp, or just need a Shopify revamp, we can do just that single sprint.",
  },
  {
    q: "How long does a typical build take?",
    a: "A dedicated landing page or automation workflow typically takes 4 to 7 days. A full store build or multi-system setup takes 10 to 14 days. You receive continuous progress previews.",
  },
  {
    q: "What happens if something breaks after launch?",
    a: "I don't disappear after deployment. Every project includes post-launch support to ensure pixel tracking, checkout flows, and automated triggers run smoothly without interruptions.",
  },
  {
    q: "How does pricing work?",
    a: "Fixed, upfront pricing per project. After our initial 30-minute discovery call, you get a clear proposal detailing scope, timeline, and exact investment. No hidden retainers or surprise hourly invoices.",
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
      id="faq"
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
