"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-lime text-on-primary overflow-hidden relative"
      aria-labelledby="cta-heading"
    >
      {/* Dot-matrix overlay in lime-on-lime */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.0, 0.0, 0.2, 1] }}
        className="max-w-container mx-auto px-gutter py-24 text-center relative z-10"
      >
        {/* Status label */}
        <div className="font-mono text-micro uppercase tracking-widest text-on-primary/60 mb-6">
           Taking on 2 new projects this quarter */
        </div>

        {/* Headline */}
        <h2
          id="cta-heading"
          className="text-display font-sans font-extrabold text-bg-base leading-none tracking-tighter mb-6 max-w-3xl mx-auto"
        >
          Got a business that needs to run smarter?
        </h2>

        {/* Subheadline */}
        <p className="text-headline-md font-sans text-on-primary/75 mb-12 max-w-2xl mx-auto">
          Stop paying three different people to half-solve one problem. Get one person who owns the whole thing, start to finish.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="https://cal.com/ravichawra/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bg-base text-lime font-mono text-label uppercase tracking-widest px-10 py-4 font-bold hover:-translate-y-0.5 transition-transform duration-200 inline-block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Book a call"
          >
            Book a Call →
          </motion.a>

          <motion.a
            href="https://wa.me/message/FGO7U6WF4F3FJ1"
            className="border-2 border-bg-base text-bg-base font-mono text-label uppercase tracking-widest px-10 py-4 font-bold hover:bg-bg-base hover:text-lime transition-all duration-200 inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Connect on whatsapp"
          >
            Connect on whatsapp
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
