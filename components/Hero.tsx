"use client";

import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Magnetic from "@/components/Magnetic";
import SpotlightCard from "@/components/SpotlightCard";

// n8n workflow video visual component for Hero section with interactive spotlight
function WorkflowVisual() {
  return (
    <SpotlightCard
      className="relative w-full aspect-video lg:aspect-square shadow-2xl"
      enableTilt={true}
    >
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
        preload="metadata"
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
    </SpotlightCard>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.0, 0.0, 0.2, 1] },
  },
};

const TYPEWRITER_TEXT =
  "Most founders waste time and money playing telephone between an ad buyer, a web developer, and a freelancer for tools. When ads don't convert, they blame each other.\n\nI build the website, set up the tracking, run the ads, and automate the manual steps. One person. Direct communication. Total accountability.";

export default function Hero() {
  // Start with full text for instant FCP (First Contentful Paint)
  const [displayed, setDisplayed] = useState(TYPEWRITER_TEXT);

  useEffect(() => {
    // Subtle typing effect on client hydration without blocking initial render
    let i = 0;
    const interval = setInterval(() => {
      if (i === 0) {
        setDisplayed("");
      } else if (i >= TYPEWRITER_TEXT.length) {
        setDisplayed(TYPEWRITER_TEXT);
        clearInterval(interval);
      } else {
        setDisplayed(TYPEWRITER_TEXT.slice(0, i));
      }
      i += 3;
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="pt-32 pb-20 border-b border-border-subtle relative overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Dynamic ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-container mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — text */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial={false}
          animate="visible"
        >
          {/* Founder Avatar & Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 border border-border-subtle bg-bg-base/80 backdrop-blur-sm px-3.5 py-1.5 w-fit"
          >
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-lime shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ravi-portrait.jpg"
                alt="Ravi Chawra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-mono text-micro text-text-primary uppercase tracking-widest flex items-center gap-2">
              <span className="font-bold text-lime">Ravi Chawra</span>
              <span className="text-text-faint">•</span>
              <span className="text-lime flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime animate-ping inline-block" />
                Solo Builder & Automation Engineer
              </span>
            </div>
          </motion.div>

          <motion.h1
            id="hero-headline"
            variants={itemVariants}
            className="text-[28px] sm:text-[36px] md:text-[45px] font-sans font-extrabold text-text-primary leading-[1.15] tracking-tight"
          >
            Stop paying three different people to fix your{" "}
            <span className="text-lime underline decoration-lime/30 underline-offset-4">
              ads, website, and automations.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[16px] text-text-muted max-w-xl whitespace-pre-line min-h-[120px] leading-relaxed"
            aria-live="polite"
          >
            {displayed}
            <span className="terminal-cursor" aria-hidden="true" />
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 pt-2"
          >
            <Magnetic strength={0.25}>
              <motion.a
                href="https://cal.com/ravichawra/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-on-primary font-mono text-xs uppercase tracking-widest px-6 py-3 font-bold rounded-full brutalist-hover inline-block shadow-[0_0_15px_rgba(200,255,0,0.2)] hover:shadow-[0_0_25px_rgba(200,255,0,0.4)] transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a 30-Min Strategy Call
              </motion.a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <motion.a
                href="#work"
                className="border border-lime/60 text-text-primary font-mono text-xs uppercase tracking-widest px-6 py-3 font-bold rounded-full hover:bg-lime hover:text-on-primary transition-all duration-200 inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Real Projects ↓
              </motion.a>
            </Magnetic>
          </motion.div>

          {/* Honest Capability Metrics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border-subtle mt-2"
          >
            {[
              { title: "SHOPIFY & WEB", desc: "Clean, fast builds (<2s load)" },
              { title: "META ADS", desc: "Setup, CAPI tracking & ads" },
              { title: "N8N AUTOMATION", desc: "Zero daily manual data entry" },
            ].map((stat) => (
              <div key={stat.title} className="group cursor-default border-l border-lime/40 pl-3 py-1">
                <div className="font-mono font-bold text-micro text-lime">
                  {stat.title}
                </div>
                <div className="font-mono text-[11px] text-text-muted mt-0.5 leading-snug">
                  {stat.desc}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — workflow visual */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.0, 0.0, 0.2, 1] }}
          className="w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0 mt-8 lg:mt-0"
        >
          <WorkflowVisual />
        </motion.div>
      </div>
    </section>
  );
}
