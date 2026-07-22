"use client";

import { motion } from "framer-motion";

// Abstract workflow SVG — replicating the node/workflow visual from Stitch
function WorkflowVisual() {
  return (
    <div className="relative w-full aspect-square bg-bg-surface border border-border-subtle flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[360px] opacity-60"
        aria-hidden
      >
        {/* Horizontal connector lines */}
        <path
          className="node-line"
          d="M40 200H110 M150 200H200 M240 200H300 M340 200H390"
          stroke="#C8FF00"
          strokeWidth="1.5"
        />
        {/* Nodes */}
        <rect x="110" y="175" width="40" height="40" stroke="white" strokeWidth="1" />
        <rect x="200" y="150" width="80" height="80" stroke="#C8FF00" strokeWidth="1" />
        <rect x="300" y="175" width="40" height="40" stroke="white" strokeWidth="1" />

        {/* Accent dots on connectors */}
        <circle cx="130" cy="200" r="4" fill="#C8FF00" />
        <circle cx="240" cy="200" r="4" fill="#C8FF00" />
        <circle cx="320" cy="200" r="4" fill="#C8FF00" />

        {/* Vertical branches */}
        <path
          d="M240 150V100H150V175"
          stroke="white"
          strokeDasharray="4 4"
          strokeWidth="1"
        />
        <path
          d="M240 250V300H340V225"
          stroke="white"
          strokeDasharray="4 4"
          strokeWidth="1"
        />

        {/* Corner bracket accents */}
        <path d="M10 30L10 10L30 10" stroke="#C8FF00" strokeWidth="1" opacity="0.5" />
        <path d="M370 30L370 10L350 10" stroke="#C8FF00" strokeWidth="1" opacity="0.5" />
        <path d="M10 370L10 390L30 390" stroke="#C8FF00" strokeWidth="1" opacity="0.5" />
        <path d="M370 370L370 390L350 390" stroke="#C8FF00" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* Terminal label */}
      <div className="absolute bottom-4 left-4 font-mono text-micro text-text-faint">
        /* n8n_workflow_instance_04.json */
      </div>
      <div className="absolute top-4 right-4 font-mono text-micro text-lime opacity-70">
        STATUS: ACTIVE
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 border-b border-border-subtle"
      aria-labelledby="hero-headline"
    >
      <div className="max-w-container mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — text */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="font-mono text-micro text-lime uppercase tracking-widest"
          >
            // Freelance Builder &amp; Systems Architect
          </motion.div>

          <motion.h1
            id="hero-headline"
            variants={itemVariants}
            className="text-display font-sans font-extrabold text-text-primary leading-none tracking-tighter"
          >
            I design, build, and{" "}
            <span className="text-lime">automate</span> systems that scale.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-body-lg text-text-muted max-w-lg"
          >
            Blending performance marketing, robust web engineering, and custom
            AI agents to turn manual chaos into predictable growth engines.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            <motion.a
              href="#contact"
              className="bg-lime text-on-primary font-mono text-label uppercase tracking-widest px-8 py-4 font-bold brutalist-hover inline-block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Call
            </motion.a>
            <motion.a
              href="#work"
              className="border border-text-primary text-text-primary font-mono text-label uppercase tracking-widest px-8 py-4 font-bold hover:bg-text-primary hover:text-bg-base transition-all duration-200 inline-block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Work
            </motion.a>
          </motion.div>

          {/* Micro stats */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 pt-2 border-t border-border-subtle mt-2"
          >
            {[
              { value: "4.2×", label: "Avg ROAS" },
              { value: "90%", label: "Ops Automated" },
              { value: "48h", label: "MVP Turnaround" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-sans font-bold text-headline-md text-lime">{stat.value}</div>
                <div className="font-mono text-micro text-text-faint uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — workflow visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <WorkflowVisual />
        </motion.div>
      </div>
    </section>
  );
}
