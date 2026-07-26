"use client";

import { useEffect } from "react";

export default function DotGridParallax() {
  useEffect(() => {
    const dotGrid = document.getElementById("dot-grid");
    if (!dotGrid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      dotGrid.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div id="dot-grid" aria-hidden="true" />;
}
