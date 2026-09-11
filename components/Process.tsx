"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";

interface Step {
  number: string;
  stage: string;
  timeline: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  progress: number;
}

const STEPS: Step[] = [
  {
    number: "01",
    stage: "STAGE 01",
    timeline: "1 - 2 DAYS",
    title: "Audit & Diagnostic",
    subtitle: "Locating revenue leaks & manual waste",
    description:
      "I look at what's slow on your store, what's missing in pixel tracking, and where your team is wasting hours copying data by hand.",
    deliverables: [
      "Page Speed & Mobile UX Audit",
      "Meta Pixel & CAPI Attribution Check",
      "Manual Workflow Bottleneck Map",
    ],
    progress: 25,
  },
  {
    number: "02",
    stage: "STAGE 02",
    timeline: "3 - 5 DAYS",
    title: "Blueprint & Architecture",
    subtitle: "Clear technical roadmap, zero surprises",
    description:
      "You get a clear plan — what gets built, exact tools (Shopify, Next.js, n8n, Meta Ads), timeline, and fixed upfront pricing.",
    deliverables: [
      "Technical Architecture Specs",
      "Implementation Timeline",
      "Fixed Upfront Investment",
    ],
    progress: 50,
  },
  {
    number: "03",
    stage: "STAGE 03",
    timeline: "WEEK 2",
    title: "Engineering & Execution",
    subtitle: "Direct coding, tracking & n8n wiring",
    description:
      "I build your website, set up server-side Meta CAPI tracking, and wire up your n8n automations. Continuous progress previews throughout.",
    deliverables: [
      "Next.js / Shopify Engineering",
      "n8n Lead & WhatsApp Workflows",
      "Continuous Live Previews",
    ],
    progress: 75,
  },
  {
    number: "04",
    stage: "STAGE 04",
    timeline: "LIVE SUPPORT",
    title: "Launch & Continuous Support",
    subtitle: "Smooth deployment & long-term stability",
    description:
      "Once live, I keep it running, fix what breaks, and continuously optimize checkout flows, tracking, and triggers as your business grows.",
    deliverables: [
      "100% Live Production Launch",
      "Post-Launch Technical Support",
      "Full Code & Credential Ownership",
    ],
    progress: 100,
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
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="border-b border-border-subtle py-24 relative overflow-hidden bg-bg-base"
      aria-labelledby="process-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-lime/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-container mx-auto px-gutter">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-micro text-lime uppercase tracking-widest block mb-3 flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            HOW WE WORK TOGETHER
          </span>
          <h2
            id="process-heading"
            className="text-headline-md md:text-headline-lg font-sans font-bold text-text-primary tracking-tight leading-tight"
          >
            How We Go from Chaos to System
          </h2>
          <p className="text-[16px] text-text-muted mt-2">
            An interactive 4-stage technical roadmap from initial diagnostic to live production launch.
          </p>
        </div>

        {/* Interactive Roadmap Progress Nav Bar */}
        <div className="mb-10 bg-bg-surface/80 border border-border-subtle backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
              <span className="text-lime font-bold">● INTERACTIVE ROADMAP:</span>
              <span>Click any stage below to inspect focus & deliverables</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-text-faint">ROADMAP PROGRESS:</span>
              <span className="text-lime font-bold">{STEPS[activeStep].progress}%</span>
            </div>
          </div>

          {/* Connected Laser Track Bar */}
          <div className="relative mb-3">
            <div className="h-1.5 bg-bg-base border border-border-subtle rounded-full w-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-lime via-lime-bright to-lime shadow-[0_0_12px_rgba(200,255,0,0.8)] rounded-full"
                animate={{ width: `${STEPS[activeStep].progress}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {/* Interactive Stage Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`px-3 py-2.5 rounded-2xl font-mono text-xs font-bold transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? "bg-lime text-on-primary border-lime shadow-[0_0_15px_rgba(200,255,0,0.3)] scale-[1.02]"
                      : "bg-bg-base/60 text-text-muted border-border-subtle hover:border-lime/40 hover:text-text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] ${
                        isActive ? "bg-on-primary text-lime" : "bg-lime/10 text-lime"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="truncate">{step.title}</span>
                  </span>
                  <span className="text-[10px] opacity-80 shrink-0">{step.timeline}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Card Horizontal Roadmap Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="h-full"
                onClick={() => setActiveStep(idx)}
              >
                <SpotlightCard
                  className={`p-7 rounded-3xl h-full flex flex-col justify-between border transition-all duration-300 shadow-xl backdrop-blur-md group cursor-pointer ${
                    isActive
                      ? "border-lime/80 bg-bg-surface/95 shadow-[0_0_25px_rgba(200,255,0,0.12)] scale-[1.01]"
                      : "border-border-subtle bg-bg-surface/70 hover:border-lime/40"
                  }`}
                  enableTilt={true}
                >
                  <div>
                    {/* Header: Step Badge & Stage Pill */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center font-mono text-sm font-bold transition-all ${
                          isActive
                            ? "bg-lime text-on-primary shadow-[0_0_15px_rgba(200,255,0,0.4)]"
                            : "bg-lime/10 border border-lime/30 text-lime group-hover:scale-105"
                        }`}
                      >
                        {step.number}
                      </div>
                      <span
                        className={`font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                          isActive
                            ? "bg-lime/20 border-lime text-lime"
                            : "bg-lime/5 border-lime/20 text-lime/80"
                        }`}
                      >
                        {step.stage}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3
                      className={`text-xl font-sans font-bold mb-1 transition-colors duration-200 ${
                        isActive ? "text-lime" : "text-text-primary group-hover:text-lime"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="font-mono text-[11px] text-lime/90 mb-4 font-medium">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-[16px] text-text-muted leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Interactive Deliverables List */}
                  <div className="border-t border-border-subtle/60 pt-4 mt-2">
                    <div className="font-mono text-[10px] text-text-faint uppercase tracking-widest mb-3 flex items-center justify-between font-bold">
                      <span>KEY DELIVERABLES:</span>
                      <span className="text-lime">{step.timeline}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {step.deliverables.map((item) => (
                        <div
                          key={item}
                          className={`rounded-xl px-3 py-1.5 text-xs font-mono flex items-center gap-2 transition-all ${
                            isActive
                              ? "bg-bg-base border border-lime/40 text-text-primary"
                              : "bg-bg-base/60 border border-border-subtle/80 text-text-muted group-hover:border-lime/30"
                          }`}
                        >
                          <span className="text-lime font-bold shrink-0">✓</span>
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Milestone Completion Status */}
                    <div className="mt-4 pt-3 border-t border-border-subtle/40 flex items-center justify-between font-mono text-[11px]">
                      <span className="text-text-faint">STATUS:</span>
                      <span className={isActive ? "text-lime font-bold" : "text-text-muted"}>
                        {step.progress}% READY
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
