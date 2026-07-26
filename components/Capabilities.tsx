"use client";

import { motion, type Variants } from "framer-motion";

interface Capability {
  index: string;
  title: string;
  description: string;
  bullets: string[];
}

const CAPABILITIES: Capability[] = [
  {
    index: "01/",
    title: "Performance Marketing",
    description:
      "I run your ads so the money goes toward sales, not just clicks and likes.",
    bullets: [
      "Meta Ads management",
      "Full-funnel attribution setup",
      "Creative testing frameworks",
      "ROAS-optimised campaigns",
    ],
  },
  {
    index: "02/",
    title: "Full-Stack Web Dev",
    description:
      "A site that loads fast, looks sharp, and actually turns visitors into customers — on Shopify or built from scratch.",
    bullets: [
      "Next.js & React applications",
      "Shopify store builds",
      "Core Web Vitals optimization",
      "API & third-party integrations",
    ],
  },
  {
    index: "03/",
    title: "Custom AI Agents & Automation",
    description:
      "Agents and workflows that handle the busywork — replying to customers, sorting leads, posting content — so your team doesn't have to.",
    bullets: [
      "n8n workflow architecture",
      "Custom AI agents",
      "CRM & ops automation",
      "Lead generation flows",
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
      className="border-b border-border-subtle"
    >
      <div className="max-w-container mx-auto">
        {/* Section header */}
        <div className="px-gutter pt-20 pb-10">
          <span className="font-mono text-micro text-lime uppercase tracking-widest">
            {"services"}
          </span>
          <h2
            id="capabilities-heading"
            className="sr-only"
          >
            Capabilities
          </h2>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-subtle border-t border-border-subtle"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.index}
              variants={cardVariants}
              className="p-8 lg:p-10 group hover:bg-bg-surface transition-colors duration-300"
            >
              {/* Number label */}
              <div className="font-mono text-label text-lime mb-4 tracking-widest">
                {cap.index}
              </div>

              {/* Title */}
              <h3 className="text-headline-md font-sans font-semibold text-text-primary mb-3 group-hover:translate-x-1 transition-transform duration-200">
                {cap.title}
              </h3>

              {/* Description */}
              <p className="text-body-md text-text-muted mb-6 leading-relaxed">
                {cap.description}
              </p>

              {/* Bullet list */}
              <ul className="space-y-2">
                {cap.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 font-mono text-micro text-text-muted"
                  >
                    <span className="text-lime mt-0.5" aria-hidden>›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
