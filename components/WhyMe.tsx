"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import SpotlightCard from "@/components/SpotlightCard";

const GUARANTEES = [
  {
    id: "direct-access",
    title: "Direct Access (No Account Managers)",
    description:
      "You get my direct WhatsApp number. When you need a button changed, an ad paused, or an automation tweaked, you don't file a ticket with an agency intern. You talk directly to the person writing the code.",
  },
  {
    id: "keep-it-simple",
    title: "Built to Keep Things Simple",
    description:
      "I don't sell you 10 paid SaaS tools when a clean n8n workflow can do the job for free. You retain 100% ownership of your code, ad accounts, and automation credentials.",
  },
  {
    id: "speed-over-bureaucracy",
    title: "Speed Over Bureaucracy",
    description:
      "Agencies take 2 weeks just to complete client onboarding meetings. I usually audit your setup and start building within 48 hours.",
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
      className="border-b border-border-subtle py-24 relative overflow-hidden bg-bg-base"
      aria-labelledby="why-me-heading"
    >
      <div className="max-w-container mx-auto px-gutter">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-micro text-lime uppercase tracking-widest block mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            DIRECT COLLABORATION
          </span>
          <h2
            id="why-me-heading"
            className="text-headline-lg font-sans font-bold text-text-primary tracking-tight"
          >
            What working with me actually feels like.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Photo 1 Studio Portrait inside brutalist terminal card */}
          <div className="lg:col-span-5 flex flex-col">
            <SpotlightCard className="p-6 rounded-3xl h-full flex flex-col justify-between border border-border-subtle hover:border-lime/40 transition-colors">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-border-subtle rounded-2xl mb-6 group">
                <Image
                  src="/images/ravi-portrait.jpg"
                  alt="Ravi Prakash Chawra (Ravi Chawra) — Solo Systems Architect"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-transparent to-transparent z-10" />
                
                {/* Corner Bracket Accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-lime pointer-events-none z-20" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-lime pointer-events-none z-20" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-lime pointer-events-none z-20" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-lime pointer-events-none z-20" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-micro bg-bg-base/90 px-3 py-1.5 border border-border-subtle backdrop-blur-md rounded-xl z-20">
                  <span className="text-lime font-bold">● DIRECT LINE ACTIVE</span>
                  <span className="text-text-faint">NO MIDDLEMEN</span>
                </div>
              </div>

              <div>
                <div className="font-mono text-headline-sm font-bold text-text-primary">
                  Ravi Chawra
                </div>
                <div className="font-mono text-micro text-lime uppercase tracking-widest mt-0.5">
                  Solo Builder & Systems Architect
                </div>
                <p className="text-[16px] text-text-muted mt-2">
                  100% direct communication with Ravi Prakash Chawra (Ravi Chawra). Every line of code, ad campaign, and automation is crafted by me.
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: 3 Plain-English Guarantees */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <motion.div
              className="flex flex-col gap-6 h-full justify-between"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {GUARANTEES.map((item, idx) => (
                <motion.div key={item.id} variants={cardVariants} className="h-full">
                  <SpotlightCard className="p-8 rounded-3xl h-full flex flex-col justify-between border border-border-subtle hover:border-lime/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-micro text-lime font-bold tracking-widest">
                          GUARANTEE 0{idx + 1}
                        </span>
                        <span className="font-mono text-micro text-text-faint">
                          #{item.id}
                        </span>
                      </div>
                      <h3 className="text-headline-md font-sans font-bold text-text-primary mb-3 group-hover:text-lime transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[16px] text-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
