"use client";

import { motion, type Variants } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";

interface ProblemCard {
  number: string;
  title: string;
  tag: string;
  reality: string;
  highlight?: boolean;
}

const PROBLEMS: ProblemCard[] = [
  {
    number: "01/",
    tag: "THE FINGER-POINTING GAME",
    title: "Agencies blame each other while sales stay flat.",
    reality:
      "Your ad guy says: 'The ads are great, your website is slow.' Your web dev says: 'The site is fine, your tracking is broken.' You end up paying both while your revenue sits flat.",
  },
  {
    number: "02/",
    tag: "LEADS SLIPPING THROUGH CRACKS",
    title: "Manual follow-ups turn hot leads cold.",
    reality:
      "You spend hard-earned money driving visitors, but inquiries sit in form submissions or Google Sheets for hours before anyone follows up. Hot prospects move to a competitor.",
  },
  {
    number: "03/",
    tag: "THE SOLO BUILDER ADVANTAGE",
    title: "One engineer owns the entire conversion pipeline.",
    reality:
      "When the person running your ads is the same person building your store and server-side tracking, zero data is lost. Changes ship in hours, not 2-week agency sprint meetings.",
    highlight: true,
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

export default function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="border-b border-border-subtle py-24 relative overflow-hidden bg-bg-base"
    >
      <div className="max-w-container mx-auto px-gutter">
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="font-mono text-micro text-lime uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            THE GAP IN MOST BUSINESSES
          </span>
          <h2
            id="problem-heading"
            className="text-headline-lg font-sans font-bold text-text-primary tracking-tight leading-tight"
          >
            Why hiring separate freelancers usually ends in chaos.
          </h2>
          <p className="text-body-lg text-text-muted mt-3">
            You don&apos;t have a traffic problem or a code problem. You have a disconnected systems problem.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PROBLEMS.map((card) => (
            <motion.div key={card.number} variants={cardVariants} className="h-full">
              <SpotlightCard
                className={`p-8 lg:p-10 h-full flex flex-col justify-between border transition-all duration-300 ${
                  card.highlight
                    ? "border-lime/60 bg-bg-surface/90 shadow-[0_0_25px_rgba(200,255,0,0.08)]"
                    : "border-border-subtle hover:border-lime/30"
                }`}
                enableTilt={true}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-micro text-lime font-bold tracking-widest">
                      {card.number}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${
                        card.highlight
                          ? "border-lime text-lime bg-lime/10"
                          : "border-border-subtle text-text-faint"
                      }`}
                    >
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-headline-md font-sans font-bold text-text-primary mb-4 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-body-md text-text-muted leading-relaxed">
                    {card.reality}
                  </p>
                </div>

                <div className="pt-6 border-t border-border-subtle mt-6 flex items-center justify-between text-micro font-mono">
                  <span className={card.highlight ? "text-lime font-bold" : "text-text-faint"}>
                    {card.highlight ? "✓ RESOLVED BY SOLO BUILDER" : "⚠ COMMON AGENCY BOTTLENECK"}
                  </span>
                  <span className="text-lime">→</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
