"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TICKER_ITEMS = [
  { metric: "SHOPIFY BUILDS", label: "" },
  { metric: "META ADS", label: "" },
  { metric: "N8N AUTOMATION", label: "" },
  { metric: "ONE PERSON, START TO FINISH", label: "" },
];

export default function ResultsTicker() {
  return (
    <section
      className="border-b overflow-hidden py-3"
      style={{ borderColor: "#434933", backgroundColor: "#1f2020" }}
      aria-label="Client results ticker"
    >
      <div className="relative flex">
        {/* Duplicate for seamless loop */}
        {[0, 1].map((setIndex) => (
          <div
            key={setIndex}
            className="flex gap-16 items-center shrink-0 animate-[marquee_20s_linear_infinite]"
            aria-hidden={setIndex === 1}
          >
            {TICKER_ITEMS.map((item, i) => (
              <span
                key={`${setIndex}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap"
                style={{ fontFamily: "var(--font-mono)", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                <span style={{ color: "#c0f500", fontWeight: 700 }}>{item.metric}</span>
                <span style={{ color: "#8e9479" }}>{item.label}</span>
                <span style={{ color: "#434933", opacity: 0.4, marginLeft: "8px" }}>/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
