"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import SpotlightCard from "@/components/SpotlightCard";

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="border-b border-border-subtle py-24 relative overflow-hidden bg-bg-base"
      aria-labelledby="work-heading"
    >
      <div className="max-w-container mx-auto px-gutter">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <span className="font-mono text-micro text-lime uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            REAL WORK, NO FAKE NUMBERS
          </span>
          <h2
            id="work-heading"
            className="text-headline-lg font-sans font-bold text-text-primary tracking-tight leading-tight"
          >
            Real projects. Real code. You can check them yourself.
          </h2>
          <p className="text-body-lg text-text-muted mt-3">
            I don&apos;t claim fake 20x ROAS screenshots. Here are actual client websites running live right now.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Project 1: Vyonnastore.in */}
          <SpotlightCard
            className="flex flex-col lg:flex-row shadow-2xl border border-border-subtle hover:border-lime/40 transition-colors"
            enableTilt={false}
          >
            {/* Image pane */}
            <div className="w-full lg:w-1/2 min-h-[320px] lg:min-h-[440px] relative overflow-hidden flex-shrink-0 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: "url('/images/vyonna-case-study-featured.png')",
                }}
                role="img"
                aria-label="Vyonnastore — Live Shopify jewelry store build"
              />
              <div className="absolute inset-0 bg-bg-base/30 group-hover:bg-bg-base/10 transition-colors duration-500" />
              <div className="absolute top-4 left-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M0 24L0 0L24 0" stroke="#C8FF00" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-micro text-lime uppercase tracking-widest bg-bg-base/90 px-2.5 py-1 border border-border-subtle">
                ● LIVE SHOPIFY STORE
              </div>
            </div>

            {/* Content pane */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between gap-6">
              <div>
                <div className="font-mono text-micro text-lime uppercase tracking-widest mb-2 font-bold">
                  Full Shopify Build + Email Automations + Meta Ads
                </div>
                <h3 className="text-headline-lg font-sans font-bold text-text-primary group-hover:text-lime transition-colors duration-300">
                  Vyonnastore.in (D2C Jewelry)
                </h3>
                <p className="text-body-md text-text-muted mt-3 leading-relaxed">
                  Designed & built their complete Shopify store, resolved checkout drop-offs with automated abandoned cart sequences, and launched targeted Meta ad campaigns.
                </p>

                <blockquote className="border-l-2 border-lime pl-4 bg-bg-base/60 py-3 pr-3 mt-4 border border-border-subtle">
                  <p className="text-body-sm text-text-muted italic leading-relaxed">
                    &ldquo;Ravi was incredibly responsive throughout — quick replies, quick fixes, no chasing needed. Working with him felt easy from start to finish.&rdquo;
                  </p>
                  <footer className="mt-2 font-mono text-micro text-lime font-bold">
                    — Prateek Chhugani, Founder, Vyonnastore
                  </footer>
                </blockquote>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Magnetic strength={0.25}>
                  <motion.a
                    href="https://vyonnastore.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-lime text-on-primary font-mono text-label uppercase tracking-widest px-6 py-3.5 font-bold brutalist-hover shadow-[0_0_15px_rgba(200,255,0,0.2)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Visit Live Store →
                  </motion.a>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <motion.a
                    href="/case-studies/vyonna"
                    className="inline-block border border-border-subtle text-text-muted hover:text-text-primary font-mono text-label uppercase tracking-widest px-6 py-3.5 font-bold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Case Study Details
                  </motion.a>
                </Magnetic>
              </div>
            </div>
          </SpotlightCard>

          {/* Project 2: M.R.K. Public School */}
          <SpotlightCard
            className="flex flex-col lg:flex-row shadow-2xl border border-border-subtle hover:border-lime/40 transition-colors"
            enableTilt={false}
          >
            {/* Image pane */}
            <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[400px] relative overflow-hidden flex-shrink-0 group bg-bg-surface/50 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-subtle">
              <div className="font-mono text-micro text-lime uppercase tracking-widest">
                INSTITUTIONAL WEB PRESENCE
              </div>
              <div className="my-auto py-8">
                <div className="font-mono text-headline-md text-text-primary font-bold">
                  M.R.K. PUBLIC SCHOOL
                </div>
                <div className="font-mono text-micro text-text-faint uppercase tracking-widest mt-1">
                  High-Speed Netlify Frontend • Direct Admission Portal
                </div>
              </div>
              <div className="font-mono text-micro text-lime uppercase tracking-widest bg-bg-base/90 px-2.5 py-1 border border-border-subtle w-fit">
                ● 100% LIVE & FUNCTIONAL
              </div>
            </div>

            {/* Content pane */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between gap-6">
              <div>
                <div className="font-mono text-micro text-lime uppercase tracking-widest mb-2 font-bold">
                  Web Design & Frontend Engineering
                </div>
                <h3 className="text-headline-lg font-sans font-bold text-text-primary group-hover:text-lime transition-colors duration-300">
                  M.R.K. Public School
                </h3>
                <p className="text-body-md text-text-muted mt-3 leading-relaxed">
                  Clean, fast, authoritative digital portal for parents & students. Lightweight, accessible UI optimized for mobile parents on slower mobile connections, complete with instant lead & admission inquiry routing.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-4 font-mono text-micro border-t border-border-subtle pt-4">
                  <div>
                    <span className="text-lime font-bold">✓ LIGHTWEIGHT UI</span>
                    <p className="text-text-faint text-[11px]">Optimized for mobile connections</p>
                  </div>
                  <div>
                    <span className="text-lime font-bold">✓ ADMISSION ROUTING</span>
                    <p className="text-text-faint text-[11px]">Instant parent lead capture</p>
                  </div>
                </div>
              </div>

              <div>
                <Magnetic strength={0.25}>
                  <motion.a
                    href="https://cal.com/ravichawra/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-lime text-lime font-mono text-label uppercase tracking-widest px-6 py-3.5 font-bold hover:bg-lime hover:text-on-primary transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Discuss Similar Institutional Build →
                  </motion.a>
                </Magnetic>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
