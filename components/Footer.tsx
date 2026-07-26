"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const FOOTER_LINKS = [
  { href: "https://www.instagram.com/ravichawraaa/", label: "Instagram", external: true },
  { href: "https://www.linkedin.com/in/ravichawra/", label: "LinkedIn", external: true },
  { href: "mailto:hello@ravichawra.com", label: "Email", external: false },
];

export default function Footer() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toISOString().split("T")[1].slice(0, 8));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer
      className="border-t border-border-subtle bg-bg-base"
      role="contentinfo"
    >
      <div className="max-w-container mx-auto px-gutter py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Ravi Chawra"
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="font-mono text-micro text-text-faint uppercase tracking-widest">
            © 2026 RAVI CHAWRA ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6 md:gap-8">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-mono text-label uppercase tracking-widest text-text-muted hover:text-lime hover:underline underline-offset-4 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Live clock + location */}
        <div className="font-mono text-micro text-text-faint space-y-1">
          <div className="uppercase tracking-widest">
            LOC: [19.0760° N, 72.8777° E]
          </div>
          <div className="uppercase tracking-widest">
            TIME:{" "}
            <span className="text-lime tabular-nums" aria-live="polite" aria-label="Current UTC time">
              {time}
            </span>{" "}
            UTC
          </div>
          <div className="uppercase tracking-widest opacity-50">

          </div>
        </div>
      </div>
    </footer>
  );
}
