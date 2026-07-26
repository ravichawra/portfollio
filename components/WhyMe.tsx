"use client";

import { motion, type Variants } from "framer-motion";

interface TrustPoint {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// SVG icons — sharp, technical aesthetic
function IconLayers() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="0" y="10" width="32" height="4" stroke="#C8FF00" strokeWidth="1.5" />
      <rect x="4" y="16" width="24" height="4" stroke="#C8FF00" strokeWidth="1.5" />
      <rect x="8" y="22" width="16" height="4" stroke="#C8FF00" strokeWidth="1.5" />
      <rect x="12" y="4" width="8" height="4" stroke="white" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function IconSpeed() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="18" r="12" stroke="#C8FF00" strokeWidth="1.5" />
      <path d="M16 18L22 8" stroke="#C8FF00" strokeWidth="2" strokeLinecap="square" />
      <circle cx="16" cy="18" r="2" fill="#C8FF00" />
      <path d="M4 18H8M24 18H28" stroke="white" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="1" y="1" width="30" height="30" stroke="#C8FF00" strokeWidth="1.5" />
      <path d="M8 12L4 16L8 20" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
      <path d="M24 12L28 16L24 20" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
      <path d="M19 10L13 22" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

const TRUST_POINTS: TrustPoint[] = [
  {
    id: "no-silos",
    icon: <IconLayers />,
    title: "No Information Silos",
    description:
      "Normally, your ads person, your web developer, and your automation person don't talk to each other. I'm all three, so nothing gets lost in translation.",
  },
  {
    id: "execution-speed",
    icon: <IconSpeed />,
    title: "Execution Speed",
    description:
      "No agency onboarding, no waiting on five people's calendars. I start building within days.",
  },
  {
    id: "built-to-grow",
    icon: <IconCode />,
    title: "Built to Grow",
    description:
      "Everything I build is made to be added to later — new features slot in without breaking what's already working.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1] },
  },
};

export default function WhyMe() {
  return (
    <section
      id="why-me"
      className="border-b border-border-subtle py-20"
      aria-labelledby="why-me-heading"
    >
      <div className="max-w-container mx-auto px-gutter">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-micro text-lime uppercase tracking-widest block mb-3">
             WHY ME
          </span>
          <h2
            id="why-me-heading"
            className="text-headline-lg font-sans font-bold text-text-primary"
          >
            Why work with one person instead of three
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {TRUST_POINTS.map((point) => (
            <motion.div
              key={point.id}
              variants={cardVariants}
              className="bg-bg-surface border border-border-subtle p-8 lg:p-10 flex flex-col gap-5 hover:border-lime transition-colors duration-300 group"
            >
              {/* Icon */}
              <div className="group-hover:scale-110 transition-transform duration-300 origin-left">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="text-headline-md font-sans font-semibold text-lime">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-body-md text-text-muted leading-relaxed">
                {point.description}
              </p>

              {/* Decorative corner */}
              <div className="mt-auto pt-4 border-t border-border-subtle">
                <span className="font-mono text-micro text-text-faint uppercase tracking-widest">
                  {point.id}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
