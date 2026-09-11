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
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between items-center w-full py-5 text-left group gap-4"
        aria-expanded={open}
      >
        <h3
          className={`text-[18px] sm:text-[20px] font-semibold transition-colors duration-200 ${
            open ? "text-lime" : "text-text-primary group-hover:text-lime"
          }`}
          style={{ fontFamily: "var(--font-sans)", lineHeight: "1.35" }}
        >
          {q}
        </h3>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-2xl font-mono text-lime font-bold"
          style={{ lineHeight: 1 }}
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
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 text-[16px] sm:text-[16px] text-text-muted leading-relaxed max-w-3xl"
              style={{ fontFamily: "var(--font-sans)" }}
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
      className="border-b border-border-subtle bg-bg-base py-20"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-container mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left label + heading */}
          <div className="lg:col-span-4">
            <span className="font-mono text-micro text-lime uppercase tracking-widest block mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              QUESTIONS & ANSWERS
            </span>
            <h2
              id="faq-heading"
              className="text-[24px] sm:text-[24px] font-sans font-bold text-text-primary tracking-tight leading-tight mb-3"
            >
              Questions people usually ask before we start
            </h2>
            <p className="text-[16px] text-text-muted">
              Here&apos;s what most people want to know upfront.
            </p>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8 flex flex-col border-t border-border-subtle lg:border-t-0">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
