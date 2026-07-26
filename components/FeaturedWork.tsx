"use client";

import { motion } from "framer-motion";

const RESULTS = [
  { label: "ROAS", value: "4.2×" },
  { label: "Ops Automated", value: "90%" },
  { label: "Timeline", value: "3 mo" },
];

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="border-b border-border-subtle py-20"
      aria-labelledby="work-heading"
    >
      <div className="max-w-container mx-auto px-gutter">
        {/* Section label */}
        <span className="font-mono text-micro text-lime uppercase tracking-widest mb-10 block">
           CASE STUDY
        </span>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.0, 0.0, 0.2, 1] }}
          className="bg-bg-surface border border-border-subtle overflow-hidden flex flex-col lg:flex-row group"
          whileHover={{
            y: -4,
            boxShadow: "4px 4px 0 0 #C8FF00",
          }}
        >
          {/* Image pane */}
          <div className="w-full lg:w-1/2 min-h-[320px] lg:min-h-[480px] relative overflow-hidden flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/vyonna-case-study-featured.png')",
              }}
              role="img"
              aria-label="Vyonnastore — E-commerce store build and growth platform" 
            />
            {/* Overlay tint */}
            <div className="absolute inset-0 bg-bg-base/30" />

            {/* Corner bracket */}
            <div className="absolute top-4 left-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M0 24L0 0L24 0" stroke="#C8FF00" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-micro text-lime/70 uppercase tracking-widest">
              
            </div>
          </div>

          {/* Content pane */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center gap-6">
            {/* Label */}
            <div className="font-mono text-micro text-lime uppercase tracking-widest">
              Shopify + E-mail Automation + Meta Ads
            </div>

            {/* Title */}
            <h2
              id="work-heading"
              className="text-headline-lg font-sans font-bold text-text-primary group-hover:text-lime transition-colors duration-300"
            >
              Vyonnastore
            </h2>

            {/* Description */}
            <p className="text-body-lg text-text-muted leading-relaxed">
              Built their Shopify store from the ground up, built their email workflow and and fix the cart abondon issue, and took over their Meta ads. Three jobs that would normally go to three different people — I ran all of it myself, so nothing got lost explaining one piece to the next. The site&apos;s live — you can check it yourself.
            </p>

            {/* Result / Note block */}
            <blockquote className="border-l-2 border-lime pl-5 bg-bg-base/50 py-4 pr-4">
              <p className="text-body-md text-text-muted italic leading-relaxed">
                "Ravi was incredibly responsive throughout — quick replies, quick fixes, no chasing needed. Working with him felt easy from start to finish."
Prateek Chhugani, Founder, Vyonnastore
              </p>
            </blockquote>

            {/* CTA */}
            <div>
              <motion.a
                href="/case-studies/vyonna"
                className="inline-block bg-lime text-on-primary font-mono text-label uppercase tracking-widest px-6 py-3 font-bold brutalist-hover"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                See the Full Story →
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
