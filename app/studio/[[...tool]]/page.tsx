/**
 * Embedded Sanity Studio at /studio
 * Access at: http://localhost:3000/studio (dev) or https://ravichawra.com/studio (prod)
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
