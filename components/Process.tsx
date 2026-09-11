"use client";

import { motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import SpotlightCard from "@/components/SpotlightCard";

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Audit",
    description:
      "I look at what's slow, what's manual, and what's quietly costing you money.",
  },
  {
    number: "02",
    title: "Blueprint",
    description:
      "You get a clear plan — what gets built, what tools we use, and what it costs. No surprises later.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "I build it. You get weekly updates and can see the progress yourself — nothing happens behind closed doors.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Once it's live, I keep it running, fix what breaks, and improve it as your business grows.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.0, 0.0, 0.2, 1] },
  },
};

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress across the Process section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 55%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="border-b border-border-subtle py-24 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-lime/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-container mx-auto px-gutter">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-micro text-lime uppercase tracking-widest block mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            HOW WE&apos;D WORK TOGETHER
          </span>
          <h2
            id="process-heading"
            className="text-headline-lg font-sans font-bold text-text-primary"
          >
            How We Go from Chaos to System
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Desktop horizontal connector line - Base layer */}
          <div
            className="hidden md:block absolute top-6 left-6 right-6 h-[2px] bg-border-subtle z-0"
            aria-hidden
          />

          {/* Desktop horizontal connector line - Animated Lime Glowing Progress Beam */}
          <motion.div
            className="hidden md:block absolute top-6 left-6 h-[2px] bg-gradient-to-r from-lime via-lime-bright to-lime shadow-[0_0_12px_rgba(200,255,0,0.8)] z-0 origin-left"
            style={{ width: lineWidth }}
            aria-hidden
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="flex flex-col h-full"
              >
                <SpotlightCard
                  className="p-6 flex flex-col gap-4 h-full border border-border-subtle hover:border-lime/40 transition-colors duration-300"
                  enableTilt={true}
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-bg-base border border-lime flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(200,255,0,0.15)] group-hover:shadow-[0_0_18px_rgba(200,255,0,0.35)] transition-shadow">
                      <span className="font-mono text-sm text-lime font-bold">
                        {step.number}
                      </span>
                    </div>
                    <span className="font-mono text-micro text-text-faint uppercase">
                      STAGE 0{i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2 mt-2">
                    <h3 className="text-headline-md font-sans font-bold text-text-primary group-hover:text-lime transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-body-md text-text-muted leading-relaxed">
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
