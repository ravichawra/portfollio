"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#why-me", label: "Why Me" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border-subtle transition-all duration-300 ${
        scrolled
          ? "bg-bg-base/80 backdrop-blur-md"
          : "bg-bg-base"
      }`}
    >
      <div className="max-w-container mx-auto px-gutter flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="text-lime"
            aria-hidden
          >
            <rect x="0" y="0" width="18" height="18" fill="currentColor" />
            <rect x="4" y="4" width="10" height="10" fill="#0D0D0D" />
            <rect x="7" y="7" width="4" height="4" fill="currentColor" />
          </svg>
          <span className="font-mono text-label tracking-widest uppercase text-text-primary group-hover:text-lime transition-colors">
            RAVI.DEV
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-micro uppercase tracking-widest text-text-muted hover:text-lime transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Availability badge */}
          <div className="hidden sm:flex items-center gap-2 border border-border-subtle px-3 py-1.5">
            <motion.span
              className="w-2 h-2 rounded-full bg-lime"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            <span className="font-mono text-micro uppercase tracking-widest text-text-muted">
              Available for projects
            </span>
          </div>

          {/* Book a Call CTA */}
          <motion.a
            href="#contact"
            className="hidden md:block bg-lime text-on-primary font-mono text-micro uppercase tracking-widest px-4 py-2 font-bold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Call
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="w-6 h-px bg-text-primary block"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="w-6 h-px bg-text-primary block"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="w-6 h-px bg-text-primary block"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-border-subtle bg-bg-base"
          >
            <nav className="flex flex-col px-gutter py-6 gap-6" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, ease: "easeOut" }}
                  className="font-mono text-label uppercase tracking-widest text-text-muted hover:text-lime transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.06, ease: "easeOut" }}
                className="bg-lime text-on-primary font-mono text-label uppercase tracking-widest px-6 py-3 font-bold text-center w-full"
                onClick={() => setMenuOpen(false)}
              >
                Book a Call
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
