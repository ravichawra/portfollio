"use client";

import { useEffect } from "react";

export default function DotGridParallax() {
  useEffect(() => {
    const dotGrid = document.getElementById("dot-grid");
    if (!dotGrid) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        dotGrid.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        rafId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div id="dot-grid" aria-hidden="true" />;
}
