"use client";

import { motion, type Variants } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";

interface Step {
  number: string;
  stage: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

const STEPS: Step[] = [
  {
    number: "01",
    stage: "STAGE 01",
    title: "Audit & Diagnostic",
    subtitle: "Locating revenue leaks & manual waste",
    description:
      "I look at what's slow on your store, what's missing in pixel tracking, and where your team is wasting hours copying data by hand.",
    deliverables: [
      "Page Speed & Mobile UX Audit",
      "Meta Pixel & CAPI Attribution Check",
      "Manual Workflow Bottleneck Map",
    ],
  },
  {
    number: "02",
    stage: "STAGE 02",
    title: "Blueprint & Architecture",
    subtitle: "Clear technical roadmap, zero surprises",
    description:
      "You get a clear plan — what gets built, exact tools (Shopify, Next.js, n8n, Meta Ads), timeline, and fixed upfront pricing.",
    deliverables: [
      "Technical Architecture Specs",
      "Implementation Timeline",
      "Fixed Upfront Investment",
    ],
  },
  {
    number: "03",
    stage: "STAGE 03",
    title: "Engineering & Execution",
    subtitle: "Direct coding, tracking & n8n wiring",
    description:
      "I build your website, set up server-side Meta CAPI tracking, and wire up your n8n automations. Continuous progress previews throughout.",
    deliverables: [
      "Next.js / Shopify Engineering",
      "n8n Lead & WhatsApp Workflows",
      "Continuous Live Previews",
    ],
  },
  {
    number: "04",
    stage: "STAGE 04",
    title: "Launch & Continuous Support",
    subtitle: "Smooth deployment & long-term stability",
    description:
      "Once live, I keep it running, fix what breaks, and continuously optimize checkout flows, tracking, and triggers as your business grows.",
    deliverables: [
      "100% Live Production Launch",
      "Post-Launch Technical Support",
      "Full Code & Credential Ownership",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="border-b border-border-subtle py-24 sm:py-32 relative overflow-hidden bg-bg-base"
      aria-labelledby="process-heading"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-lime/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-container mx-auto px-gutter">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="font-mono text-micro text-lime uppercase tracking-widest block mb-3 flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            HOW WE WORK TOGETHER
          </span>
          <h2
            id="process-heading"
            className="text-headline-md sm:text-headline-lg font-sans font-bold text-text-primary tracking-tight leading-tight"
          >
            How We Go from Chaos to System
          </h2>
          <p className="text-body-md sm:text-body-lg text-text-muted mt-3 leading-relaxed">
            A transparent 4-stage roadmap from initial diagnostic to live production.
          </p>
        </div>

        {/* Minimalist Apple-Style Vertical Timeline Track */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-border-subtle/80 ml-2 sm:ml-4">
          <motion.div
            className="space-y-8 sm:space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {STEPS.map((step) => (
              <motion.div key={step.number} variants={cardVariants} className="relative group">
                {/* Timeline Dot Node on Left Track */}
                <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-7 w-4 h-4 rounded-full bg-bg-base border-2 border-lime shadow-[0_0_12px_rgba(200,255,0,0.5)] group-hover:scale-125 transition-transform duration-300" />

                <SpotlightCard
                  className="p-6 sm:p-8 lg:p-10 rounded-3xl border border-border-subtle hover:border-lime/40 transition-all duration-300 shadow-xl bg-bg-surface/70 backdrop-blur-md"
                  enableTilt={false}
                >
                  <div className="max-w-3xl">
                    {/* Header Badges */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-lime px-3 py-1 rounded-full bg-lime/10 border border-lime/30">
                        {step.number}
                      </span>
                      <span className="font-mono text-xs text-text-faint uppercase tracking-widest font-semibold">
                        {step.stage}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-sans font-bold text-text-primary mb-1 tracking-tight group-hover:text-lime transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="font-mono text-xs text-lime/90 mb-4 font-medium">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-body-md text-text-muted leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Clean Deliverable Bullets */}
                    <div className="pt-4 border-t border-border-subtle/60">
                      <div className="font-mono text-[10px] text-text-faint uppercase tracking-widest mb-3 font-semibold">
                        KEY DELIVERABLES:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {step.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 font-mono text-xs text-text-muted bg-bg-base/60 border border-border-subtle/80 px-3 py-2 rounded-xl"
                          >
                            <span className="text-lime font-bold shrink-0">✓</span>
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
