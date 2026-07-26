"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (val: string) => {
    // Sanitize input: strip malicious HTML/script characters and limit length
    const sanitized = val.replace(/[<>'"]/g, "").slice(0, 100);
    setEmail(sanitized);
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(cleanEmail)) {
      setError("PLEASE ENTER A VALID EMAIL ADDRESS");
      return;
    }

    setSubmitted(true);
    setError("");
  };

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20" aria-labelledby="newsletter-heading">
      <div
        className="relative overflow-hidden p-10 lg:p-16 border"
        style={{ backgroundColor: "#292a2a", borderColor: "#434933" }}
      >
        {/* Lime dot-matrix overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: "radial-gradient(#c0f500 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-3xl">
          <div
            className="uppercase tracking-widest text-sm mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "#c0f500", fontSize: "13px" }}
          >
             FOLLOW THE BUILD
          </div>
          <h2
            id="newsletter-heading"
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#e3e2e2",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Want to see how this actually works?
          </h2>
          <p
            className="mb-10 max-w-xl"
            style={{ fontFamily: "var(--font-sans)", color: "#c4caac", fontSize: "18px", lineHeight: 1.6 }}
          >
            Every couple of weeks I share what I&apos;m building for clients — real automations, real ad numbers, real code. No fluff, no &quot;10 AI tools you need&quot; listicles.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-4 px-6 border"
              style={{ borderColor: "#c0f500", color: "#c0f500", fontFamily: "var(--font-mono)", fontSize: "13px", letterSpacing: "0.1em" }}
            >
              ✓ YOU&apos;RE IN. CHECK YOUR INBOX SOON.
            </motion.div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  maxLength={100}
                  autoComplete="email"
                  spellCheck={false}
                  placeholder="ENTER YOUR EMAIL"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  className="flex-grow bg-transparent border px-6 py-4 outline-none transition-colors duration-200"
                  style={{
                    borderColor: error ? "#ff4444" : "#434933",
                    color: "#e3e2e2",
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    letterSpacing: "0.05em",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#c0f500"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = error ? "#ff4444" : "#434933"; }}
                />
                <motion.button
                  type="submit"
                  className="px-8 py-4 font-bold whitespace-nowrap"
                  style={{
                    backgroundColor: "#c0f500",
                    color: "#161f00",
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                  whileHover={{ scale: 1.03, x: -2, y: -2, boxShadow: "3px 3px 0 0 #e3e2e2" }}
                  whileTap={{ scale: 0.97 }}
                >
                  GET THE EMAILS
                </motion.button>
              </form>
              {error && (
                <div
                  className="mt-2 text-red-400 font-mono text-micro uppercase tracking-widest"
                  style={{ fontSize: "11px" }}
                >
                  ⚠ {error}
                </div>
              )}
            </>
          )}

          <div
            className="mt-6 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#8e9479" }}
          >
            NO SPAM. UNSUBSCRIBE ANYTIME.
          </div>
        </div>
      </div>
    </section>
  );
}
