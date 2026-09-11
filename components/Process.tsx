"use client";

import { motion, type Variants } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";

interface Step {
  number: string;
  stage: string;
  title: string;
  subtitle: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    stage: "STAGE 01",
    title: "Audit & Diagnostic",
    subtitle: "Locating revenue leaks & manual waste",
    description:
      "I look at what's slow on your store, what's missing in pixel tracking, and where your team is wasting hours copying data by hand.",
  },
  {
    number: "02",
    stage: "STAGE 02",
    title: "Blueprint & Architecture",
    subtitle: "Clear technical roadmap, zero surprises",
    description:
      "You get a clear plan — what gets built, exact tools (Shopify, Next.js, n8n, Meta Ads), timeline, and fixed upfront pricing.",
  },
  {
    number: "03",
    stage: "STAGE 03",
    title: "Engineering & Execution",
    subtitle: "Direct coding, tracking & n8n wiring",
    description:
      "I build your website, set up server-side Meta CAPI tracking, and wire up your n8n automations. Continuous progress previews throughout.",
  },
  {
    number: "04",
    stage: "STAGE 04",
    title: "Launch & Continuous Support",
    subtitle: "Smooth deployment & long-term stability",
    description:
      "Once live, I keep it running, fix what breaks, and continuously optimize checkout flows, tracking, and triggers as your business grows.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.0, 0.0, 0.2, 1] },
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="border-b border-border-subtle py-24 relative overflow-hidden bg-bg-base"
      aria-labelledby="process-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-lime/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-container mx-auto px-gutter">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-micro text-lime uppercase tracking-widest block mb-3 flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            HOW WE&apos;D WORK TOGETHER
          </span>
          <h2
            id="process-heading"
            className="text-headline-md md:text-headline-lg font-sans font-bold text-text-primary tracking-tight leading-tight"
          >
            How We Go from Chaos to System
          </h2>
          <p className="text-body-md text-text-muted mt-2">
            A transparent 4-stage process from initial diagnostic to live production.
          </p>
        </div>

        {/* 4-Card Horizontal Grid */}
        <div className="relative">
          {/* Subtle Desktop Connector Line */}
          <div
            className="hidden md:block absolute top-12 left-8 right-8 h-px bg-border-subtle/80 z-0"
            aria-hidden
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {STEPS.map((step) => (
              <motion.div key={step.number} variants={cardVariants} className="h-full">
                <SpotlightCard
                  className="p-7 rounded-3xl h-full flex flex-col justify-between border border-border-subtle hover:border-lime/60 transition-all duration-300 shadow-xl bg-bg-surface/80 backdrop-blur-md group"
                  enableTilt={true}
                >
                  <div>
                    {/* Step Number & Stage Pill */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-2xl bg-lime/10 border border-lime/30 flex items-center justify-center font-mono text-sm font-bold text-lime shadow-[0_0_12px_rgba(200,255,0,0.15)] group-hover:scale-105 transition-transform">
                        {step.number}
                      </div>
                      <span className="font-mono text-[10px] text-lime font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-lime/30 bg-lime/10">
                        {step.stage}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-xl font-sans font-bold text-text-primary mb-1 group-hover:text-lime transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="font-mono text-[11px] text-lime/80 mb-4 font-medium">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-[16px] text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
