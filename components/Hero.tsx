"use client";

import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";

// n8n workflow video visual component for Hero section
function WorkflowVisual() {
  return (
    <div className="relative w-full aspect-video lg:aspect-square bg-bg-surface border border-border-subtle overflow-hidden group shadow-2xl">
      {/* Top Terminal Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-bg-base/90 backdrop-blur-md border-b border-border-subtle px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between font-mono text-micro">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="text-text-primary font-bold tracking-wide">n8n_workflow_instance</span>
        </div>
        <div className="text-lime opacity-90 uppercase tracking-widest font-semibold">
          STATUS: RUNNING
        </div>
      </div>

      {/* Video Stream */}
      <video
        src="/videos/n8n-workflow.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-100 opacity-90"
      />

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg-base/80 via-transparent to-bg-base/30" />

      {/* Terminal Footer Badge */}
      <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 z-20 flex items-center justify-between font-mono text-micro text-text-faint bg-bg-base/85 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 border border-border-subtle">
        <div className="flex items-center gap-2">
          <span className="text-lime font-bold">⚡ n8n Workflow Engine</span>
        </div>
        <span className="text-text-muted hidden sm:inline">Real-time Automation</span>
      </div>

      {/* Corner bracket accents */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-lime opacity-60 z-30 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-lime opacity-60 z-30 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-lime opacity-60 z-30 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-lime opacity-60 z-30 pointer-events-none" />
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] },
  },
};

const TYPEWRITER_TEXT =
  "Right now you're probably paying one person to run ads, another to fix your site, and hoping someone eventually automates the manual stuff. I do all three. Same person, same context, no handoffs.";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(TYPEWRITER_TEXT.slice(0, i));
        if (i >= TYPEWRITER_TEXT.length) clearInterval(interval);
      }, 15);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="pt-32 pb-20 border-b border-border-subtle"
      aria-labelledby="hero-headline"
    >
      <div className="max-w-container mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
             FREELANCE BUILDER
          </motion.div>

          <motion.h1
            id="hero-headline"
            variants={itemVariants}
            className="text-display font-sans font-extrabold text-text-primary leading-[1.12] tracking-tight"
          >
            Your ads, your website, and your automation shouldn&apos;t need{" "}
            <span className="text-lime">three different people.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-body-lg text-text-muted max-w-lg min-h-[100px]"
            aria-live="polite"
          >
            {displayed}
            <span className="terminal-cursor" aria-hidden="true" />
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            <motion.a
              href="https://cal.com/ravichawra/30min"
              target="_blank"
              rel="noopener noreferrer"
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

          {/* Micro stats / Pillars */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 pt-2 border-t border-border-subtle mt-2"
          >
            {[
              { value: "SHOPIFY", label: "BUILDS" },
              { value: "META", label: "ADS" },
              { value: "N8N", label: "AUTOMATION" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-sans font-bold text-headline-sm text-lime">{stat.value}</div>
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
          transition={{ duration: 0.6, delay: 0.3, ease: [0.0, 0.0, 0.2, 1] }}
          className="w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0 mt-8 lg:mt-0"
        >
          <WorkflowVisual />
        </motion.div>
      </div>
    </section>
  );
}
