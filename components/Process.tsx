"use client";

import { motion, type Variants } from "framer-motion";

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
  visible: { transition: { staggerChildren: 0.13 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] },
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="border-b border-border-subtle py-20"
      aria-labelledby="process-heading"
    >
      <div className="max-w-container mx-auto px-gutter">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-micro text-lime uppercase tracking-widest block mb-3">
             HOW WE&apos;D WORK TOGETHER
          </span>
          <h2
            id="process-heading"
            className="text-headline-lg font-sans font-bold text-text-primary"
          >
            How We Go from Chaos to System
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Desktop horizontal connector line */}
          <div
            className="hidden md:block absolute top-4 left-0 right-0 h-px bg-border-subtle z-0"
            aria-hidden
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="flex flex-col gap-4 relative z-10"
            >
              {/* Step number badge */}
              <div className="w-8 h-8 bg-bg-surface border border-lime flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-micro text-lime font-bold">
                  {step.number}
                </span>
              </div>

              {/* Mobile vertical connector */}
              {i < STEPS.length - 1 && (
                <div
                  className="md:hidden w-px h-6 bg-border-subtle ml-4"
                  aria-hidden
                />
              )}

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-headline-md font-sans font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="text-body-md text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (desktop) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-3.5 -right-4 font-mono text-xs text-border-active z-20"
                  aria-hidden
                >
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
