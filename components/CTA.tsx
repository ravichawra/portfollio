"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import SpotlightCard from "@/components/SpotlightCard";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-bg-base border-t border-border-subtle py-24 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-container mx-auto px-gutter">
        <SpotlightCard className="p-8 lg:p-14 rounded-3xl border border-border-subtle hover:border-lime/40 transition-colors shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Photo 2 - Cinematic Dark Study */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden border border-border-subtle rounded-2xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ravi-workspace-cinematic.jpg"
                  alt="Ravi Chawra - Dark Study Desk Workspace"
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-transparent to-transparent" />

                {/* Corner bracket accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-lime pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-lime pointer-events-none" />
              </div>

              <p className="font-mono text-micro text-lime italic mt-3.5 border-l-2 border-lime pl-3">
                &ldquo;You talk directly with the engineer who builds your systems.&rdquo;
              </p>
            </div>

            {/* Right Column: Scheduling & Contact details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-micro text-lime uppercase tracking-widest flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                  LET&apos;S FIX YOUR BOTTLENECK
                </span>

                <h2
                  id="cta-heading"
                  className="text-headline-lg font-sans font-bold text-text-primary tracking-tight leading-tight mb-4"
                >
                  Got a bottleneck in your business that needs fixing?
                </h2>

                <p className="text-[16px] text-text-muted leading-relaxed mb-6">
                  Whether your website is losing visitors, your ads aren&apos;t tracking properly, or your team is wasting hours on manual tasks — let&apos;s look at it together.<br />
                  <span className="text-lime font-bold font-mono text-[14px] mt-1.5 inline-block">
                    30 minutes. No aggressive sales pitch. Just a clear look at what needs to be fixed.
                  </span>
                </p>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 font-mono text-micro border-y border-border-subtle py-4">
                  <div className="flex items-center gap-2 text-text-muted">
                    <span className="text-lime font-bold">✓</span> Direct 1-on-1 Call
                  </div>
                  <div className="flex items-center gap-2 text-text-muted">
                    <span className="text-lime font-bold">✓</span> Technical Roadmap
                  </div>
                  <div className="flex items-center gap-2 text-text-muted">
                    <span className="text-lime font-bold">✓</span> Zero Sales Pressure
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Magnetic strength={0.25}>
                  <motion.a
                    href="https://cal.com/ravichawra/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lime text-on-primary font-mono text-xs uppercase tracking-widest px-6 py-3 font-bold rounded-full brutalist-hover inline-block shadow-[0_0_15px_rgba(200,255,0,0.2)] text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book a 30-Min Strategy Call →
                  </motion.a>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <motion.a
                    href="https://wa.me/917014383693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-lime text-lime font-mono text-xs uppercase tracking-widest px-6 py-3 font-bold rounded-full hover:bg-lime hover:text-on-primary transition-all duration-200 inline-block text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    WhatsApp Directly →
                  </motion.a>
                </Magnetic>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
