"use client";

import { motion, type Variants } from "framer-motion";

const STACK = [
  "Next.js", "React", "TailwindCSS", "TypeScript",
  "Convex", "Supabase", "n8n", "OpenAI API",
  "LangChain", "Shopify Hydrogen", "Meta Ads API", "Framer Motion",
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TechStack() {
  return (
    <section
      className="border-b"
      style={{ borderColor: "#434933" }}
      aria-labelledby="tech-stack-heading"
    >
      <div
        className="max-w-[1200px] mx-auto px-6 py-20"
      >
        {/* Label */}
        <div
          className="text-center mb-10 uppercase tracking-widest text-sm"
          style={{ fontFamily: "var(--font-mono)", color: "#c0f500" }}
        >
          CORE STACK &amp; TOOLKIT
        </div>

        {/* Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {STACK.map((tech) => (
            <motion.span
              key={tech}
              variants={pillVariants}
              className="px-4 py-2 border text-sm cursor-default transition-colors duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                color: "#8e9479",
                borderColor: "#434933",
                fontSize: "13px",
              }}
              whileHover={{
                borderColor: "#c0f500",
                color: "#c0f500",
                transition: { duration: 0.15 },
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
