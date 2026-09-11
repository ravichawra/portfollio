"use client";

import { motion, type Variants } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";

interface Capability {
  index: string;
  audience: string;
  title: string;
  bullets: string[];
}

const CAPABILITIES: Capability[] = [
  {
    index: "01/",
    audience: "FOR E-COMMERCE & D2C BRANDS",
    title: "High-Converting Shopify & Web Stores",
    bullets: [
      "Custom Shopify & Next.js stores engineered to load fast (<2s) on mobile",
      "Server-Side Meta Pixel & Conversion API (CAPI) setup so ad spend isn't blind",
      "Automated abandoned cart recovery via WhatsApp & email to capture lost revenue",
      "Direct Meta Ad campaign setup & creative testing focused on ROAS",
    ],
  },
  {
    index: "02/",
    audience: "FOR COACHES, CREATORS & SCHOOLS",
    title: "Lead Capture & Admission Portals",
    bullets: [
      "High-converting, focused landing pages explaining curriculum/offers clearly",
      "Zero-touch lead routing: forms trigger instant WhatsApp confirmations & CRM sync",
      "Parent/student admission inquiry forms engineered for high completion",
      "Automated follow-up sequences eliminating manual copy-pasting",
    ],
  },
  {
    index: "03/",
    audience: "FOR MID-SIZE BUSINESSES",
    title: "Custom n8n Workflows & AI Automations",
    bullets: [
      "End-to-end workflow architecture using self-hosted or cloud n8n",
      "Connecting disconnected apps (Shopify, CRM, Google Sheets, WhatsApp, Stripe)",
      "Internal AI agents summarizing inquiries, drafting replies & generating reports",
      "Eliminates 10-15 hours of boring repetitive data entry every single week",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] },
  },
};

export default function Capabilities() {
  return (
    <section
      id="services"
      aria-labelledby="capabilities-heading"
      className="border-b border-border-subtle relative py-24"
    >
      <div className="max-w-container mx-auto px-gutter">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="font-mono text-micro text-lime uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            WHAT I ACTUALLY BUILD
          </span>
          <h2
            id="capabilities-heading"
            className="text-headline-lg font-sans font-bold text-text-primary tracking-tight leading-tight"
          >
            Practical systems for real businesses.
          </h2>
          <p className="text-body-lg text-text-muted mt-3">
            No bloat, no fluff. Just reliable digital assets that do their job.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle border-y border-border-subtle"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.index}
              variants={cardVariants}
              className="h-full"
            >
              <SpotlightCard
                className="p-8 lg:p-10 h-full flex flex-col justify-between group hover:border-lime/30 transition-colors"
                enableTilt={true}
              >
                <div>
                  {/* Number & Audience label */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-label text-lime tracking-widest font-bold">
                      {cap.index}
                    </span>
                    <span className="font-mono text-[10px] text-lime/80 uppercase tracking-widest px-2 py-0.5 border border-lime/30 bg-lime/5">
                      {cap.audience}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-headline-md font-sans font-bold text-text-primary mb-6 group-hover:text-lime transition-colors duration-200">
                    {cap.title}
                  </h3>
                </div>

                {/* Bullet list */}
                <ul className="space-y-2.5 pt-4 border-t border-border-subtle">
                  {cap.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 font-mono text-micro text-text-muted group-hover:text-text-primary transition-colors"
                    >
                      <span className="text-lime mt-0.5" aria-hidden>›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
