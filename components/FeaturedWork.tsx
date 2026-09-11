"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import SpotlightCard from "@/components/SpotlightCard";

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="border-b border-border-subtle py-20 relative overflow-hidden bg-bg-base"
      aria-labelledby="work-heading"
    >
      <div className="max-w-container mx-auto px-gutter">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <span className="font-mono text-micro text-lime uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            REAL WORK, NO FAKE NUMBERS
          </span>
          <h2
            id="work-heading"
            className="text-headline-md md:text-headline-lg font-sans font-bold text-text-primary tracking-tight leading-snug"
          >
            Real projects. Real code. You can check them yourself.
          </h2>
          <p className="text-body-md text-text-muted mt-2">
            I don&apos;t claim fake 20x ROAS screenshots. Here are actual client websites running live right now.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* Project 1: Vyonnastore.in */}
          <SpotlightCard
            className="shadow-2xl border border-border-subtle hover:border-lime/40 transition-colors overflow-hidden rounded-3xl"
            enableTilt={false}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Image Pane */}
              <div className="lg:col-span-6 min-h-[280px] lg:min-h-[380px] relative overflow-hidden group border-b lg:border-b-0 lg:border-r border-border-subtle">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/vyonna-case-study-featured.png')",
                  }}
                  role="img"
                  aria-label="Vyonnastore — Live Shopify jewelry store build"
                />
                <div className="absolute inset-0 bg-bg-base/20 group-hover:bg-bg-base/0 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M0 24L0 0L24 0" stroke="#C8FF00" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[11px] text-lime uppercase tracking-widest bg-bg-base/90 px-2.5 py-1 border border-border-subtle backdrop-blur-sm">
                  ● LIVE SHOPIFY STORE
                </div>
              </div>

              {/* Content Pane */}
              <div className="lg:col-span-6 p-6 lg:p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="font-mono text-micro text-lime uppercase tracking-widest mb-1.5 font-bold">
                    Shopify Build + Email Automations + Meta Ads
                  </div>
                  <h3 className="text-xl lg:text-headline-md font-sans font-bold text-text-primary group-hover:text-lime transition-colors duration-300">
                    Vyonnastore.in (D2C Jewelry)
                  </h3>
                  <p className="text-body-md text-text-muted mt-2.5 leading-relaxed">
                    Designed & built their complete Shopify store, resolved checkout drop-offs with automated abandoned cart sequences, and launched targeted Meta ad campaigns.
                  </p>

                  <blockquote className="border-l-2 border-lime pl-3.5 bg-bg-base/60 py-2.5 pr-3 mt-4 border border-border-subtle">
                    <p className="text-body-sm text-text-muted italic leading-relaxed">
                      &ldquo;Ravi was incredibly responsive throughout — quick replies, quick fixes, no chasing needed. Working with him felt easy from start to finish.&rdquo;
                    </p>
                    <footer className="mt-1.5 font-mono text-micro text-lime font-bold">
                      — Prateek Chhugani, Founder, Vyonnastore
                    </footer>
                  </blockquote>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <Magnetic strength={0.25}>
                    <motion.a
                      href="https://vyonnastore.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-lime text-on-primary font-mono text-micro uppercase tracking-widest px-5 py-3 font-bold brutalist-hover shadow-[0_0_15px_rgba(200,255,0,0.2)]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Visit Live Store →
                    </motion.a>
                  </Magnetic>
                  <Magnetic strength={0.25}>
                    <motion.a
                      href="/case-studies/vyonna"
                      className="inline-block border border-border-subtle text-text-muted hover:text-text-primary font-mono text-micro uppercase tracking-widest px-5 py-3 font-bold transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Case Study Details
                    </motion.a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Project 2: M.R.K. Public School */}
          <SpotlightCard
            className="shadow-2xl border border-border-subtle hover:border-lime/40 transition-colors overflow-hidden rounded-3xl"
            enableTilt={false}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Image / Header Pane */}
              <div className="lg:col-span-6 min-h-[240px] lg:min-h-[340px] relative overflow-hidden group bg-bg-surface/60 p-6 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-subtle">
                <div className="font-mono text-micro text-lime uppercase tracking-widest font-bold">
                  INSTITUTIONAL WEB PRESENCE
                </div>
                <div className="my-auto py-6">
                  <div className="font-mono text-xl lg:text-headline-md text-text-primary font-bold">
                    M.R.K. PUBLIC SCHOOL
                  </div>
                  <div className="font-mono text-micro text-text-faint uppercase tracking-widest mt-1">
                    High-Speed Netlify Frontend • Direct Admission Portal
                  </div>
                </div>
                <div className="font-mono text-micro text-lime uppercase tracking-widest bg-bg-base/90 px-2.5 py-1 border border-border-subtle w-fit backdrop-blur-sm">
                  ● 100% LIVE & FUNCTIONAL
                </div>
              </div>

              {/* Content Pane */}
              <div className="lg:col-span-6 p-6 lg:p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="font-mono text-micro text-lime uppercase tracking-widest mb-1.5 font-bold">
                    Web Design & Frontend Engineering
                  </div>
                  <h3 className="text-xl lg:text-headline-md font-sans font-bold text-text-primary group-hover:text-lime transition-colors duration-300">
                    M.R.K. Public School
                  </h3>
                  <p className="text-body-md text-text-muted mt-2.5 leading-relaxed">
                    Clean, fast, authoritative digital portal for parents & students. Lightweight, accessible UI optimized for mobile parents on slower connections, complete with instant lead & admission inquiry routing.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-4 font-mono text-micro border-t border-border-subtle pt-3.5">
                    <div>
                      <span className="text-lime font-bold">✓ LIGHTWEIGHT UI</span>
                      <p className="text-text-faint text-[11px]">Optimized for mobile</p>
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
                      className="inline-block border border-lime text-lime font-mono text-micro uppercase tracking-widest px-5 py-3 font-bold hover:bg-lime hover:text-on-primary transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Discuss Similar Institutional Build →
                    </motion.a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
