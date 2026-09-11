"use client";

import { motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import SpotlightCard from "@/components/SpotlightCard";

interface Step {
  number: string;
  stepLabel: string;
  stage: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    stepLabel: "Step 1",
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
    icon: "🔍",
  },
  {
    number: "02",
    stepLabel: "Step 2",
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
    icon: "📐",
  },
  {
    number: "03",
    stepLabel: "Step 3",
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
    icon: "⚡",
  },
  {
    number: "04",
    stepLabel: "Step 4",
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
    icon: "🚀",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for central glowing neon laser line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="border-b border-border-subtle py-24 sm:py-32 relative overflow-hidden bg-bg-base"
      aria-labelledby="process-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-lime/5 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-container mx-auto px-gutter">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 max-w-3xl mx-auto text-center">
          <span className="font-mono text-micro text-lime uppercase tracking-widest block mb-3 inline-flex items-center gap-2 font-bold bg-lime/10 border border-lime/30 px-3.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            HOW WE WORK TOGETHER
          </span>
          <h2
            id="process-heading"
            className="text-headline-md sm:text-headline-lg font-sans font-bold text-text-primary tracking-tight leading-tight mt-2"
          >
            How We Go from Chaos to System
          </h2>
          <p className="text-[16px] text-text-muted mt-3 max-w-xl mx-auto leading-relaxed">
            A transparent 4-stage technical roadmap from initial diagnostic to live production launch.
          </p>
        </div>

        {/* Alternating Staggered Vertical Timeline */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Central Vertical Base Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-border-subtle/80 rounded-full" />

          {/* Animated Central Glowing Lime Laser Progress Beam */}
          <motion.div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 w-[2px] bg-gradient-to-b from-lime via-lime-bright to-lime rounded-full shadow-[0_0_15px_rgba(200,255,0,0.9)] origin-top"
            style={{ height: lineHeight }}
          />

          {/* Mobile Left Vertical Line */}
          <div className="md:hidden absolute left-5 top-4 bottom-4 w-[2px] bg-border-subtle/80 rounded-full" />

          <motion.div
            className="space-y-12 md:space-y-20 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0; // Even idx (0, 2): Card Left, Badge Right on Desktop

              return (
                <div key={step.number} className="relative group">
                  {/* Central Timeline Dot Node (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 items-center justify-center w-5 h-5 rounded-full bg-bg-base border-2 border-lime shadow-[0_0_14px_rgba(200,255,0,0.6)] z-30 group-hover:scale-125 transition-transform duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                  </div>

                  {/* Mobile Left Dot Node */}
                  <div className="md:hidden absolute left-[15px] top-8 w-3.5 h-3.5 rounded-full bg-bg-base border-2 border-lime shadow-[0_0_10px_rgba(200,255,0,0.5)] z-30" />

                  {/* Desktop Grid Layout (Alternating 2 Columns) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
                    {/* LEFT COLUMN */}
                    <div
                      className={`md:col-span-6 ${
                        isEven
                          ? "order-1"
                          : "order-2 md:order-1 pl-12 md:pl-0 flex justify-start md:justify-end"
                      }`}
                    >
                      {isEven ? (
                        /* Card on Left */
                        <motion.div variants={cardLeftVariants} className="pl-12 md:pl-0">
                          <SpotlightCard
                            className="p-7 sm:p-9 rounded-3xl border border-border-subtle hover:border-lime/60 transition-all duration-300 shadow-2xl bg-bg-surface/80 backdrop-blur-xl group"
                            enableTilt={true}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-11 h-11 rounded-2xl bg-lime/10 border border-lime/30 flex items-center justify-center text-xl shadow-[0_0_12px_rgba(200,255,0,0.15)] group-hover:scale-110 transition-transform">
                                {step.icon}
                              </div>
                              <span className="font-mono text-[10px] font-bold text-lime uppercase tracking-widest px-3 py-1 rounded-full border border-lime/30 bg-lime/10">
                                {step.stage}
                              </span>
                            </div>

                            <h3 className="text-2xl font-sans font-bold text-text-primary mb-1 group-hover:text-lime transition-colors duration-200">
                              {step.title}
                            </h3>
                            <p className="font-mono text-xs text-lime/90 mb-4 font-semibold">
                              {step.subtitle}
                            </p>

                            <p className="text-[16px] text-text-muted leading-relaxed mb-6">
                              {step.description}
                            </p>

                            {/* Deliverables List */}
                            <div className="border-t border-border-subtle/60 pt-4 mt-2">
                              <div className="font-mono text-[10px] text-text-faint uppercase tracking-widest mb-3 font-bold">
                                KEY DELIVERABLES:
                              </div>
                              <div className="flex flex-col gap-2">
                                {step.deliverables.map((item) => (
                                  <div
                                    key={item}
                                    className="rounded-xl bg-bg-base/80 border border-border-subtle px-3.5 py-2 text-xs font-mono text-text-muted flex items-center gap-2.5 group-hover:border-lime/30 transition-colors"
                                  >
                                    <span className="text-lime font-bold shrink-0">✓</span>
                                    <span className="truncate">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </SpotlightCard>
                        </motion.div>
                      ) : (
                        /* Step Pointer Badge on Left */
                        <motion.div variants={cardLeftVariants} className="hidden md:flex justify-end">
                          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-bg-surface/90 border border-border-subtle backdrop-blur-md shadow-lg group-hover:border-lime/50 transition-colors">
                            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                            <span className="font-mono text-sm font-bold text-text-primary tracking-wider">
                              {step.stepLabel}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div
                      className={`md:col-span-6 ${
                        isEven
                          ? "order-2 pl-12 md:pl-0 flex justify-start"
                          : "order-1 md:order-2 pl-12 md:pl-0"
                      }`}
                    >
                      {isEven ? (
                        /* Step Pointer Badge on Right */
                        <motion.div variants={cardRightVariants} className="hidden md:flex justify-start">
                          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-bg-surface/90 border border-border-subtle backdrop-blur-md shadow-lg group-hover:border-lime/50 transition-colors">
                            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                            <span className="font-mono text-sm font-bold text-text-primary tracking-wider">
                              {step.stepLabel}
                            </span>
                          </div>
                        </motion.div>
                      ) : (
                        /* Card on Right */
                        <motion.div variants={cardRightVariants}>
                          <SpotlightCard
                            className="p-7 sm:p-9 rounded-3xl border border-border-subtle hover:border-lime/60 transition-all duration-300 shadow-2xl bg-bg-surface/80 backdrop-blur-xl group"
                            enableTilt={true}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-11 h-11 rounded-2xl bg-lime/10 border border-lime/30 flex items-center justify-center text-xl shadow-[0_0_12px_rgba(200,255,0,0.15)] group-hover:scale-110 transition-transform">
                                {step.icon}
                              </div>
                              <span className="font-mono text-[10px] font-bold text-lime uppercase tracking-widest px-3 py-1 rounded-full border border-lime/30 bg-lime/10">
                                {step.stage}
                              </span>
                            </div>

                            <h3 className="text-2xl font-sans font-bold text-text-primary mb-1 group-hover:text-lime transition-colors duration-200">
                              {step.title}
                            </h3>
                            <p className="font-mono text-xs text-lime/90 mb-4 font-semibold">
                              {step.subtitle}
                            </p>

                            <p className="text-[16px] text-text-muted leading-relaxed mb-6">
                              {step.description}
                            </p>

                            {/* Deliverables List */}
                            <div className="border-t border-border-subtle/60 pt-4 mt-2">
                              <div className="font-mono text-[10px] text-text-faint uppercase tracking-widest mb-3 font-bold">
                                KEY DELIVERABLES:
                              </div>
                              <div className="flex flex-col gap-2">
                                {step.deliverables.map((item) => (
                                  <div
                                    key={item}
                                    className="rounded-xl bg-bg-base/80 border border-border-subtle px-3.5 py-2 text-xs font-mono text-text-muted flex items-center gap-2.5 group-hover:border-lime/30 transition-colors"
                                  >
                                    <span className="text-lime font-bold shrink-0">✓</span>
                                    <span className="truncate">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </SpotlightCard>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
