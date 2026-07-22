import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core backgrounds
        "bg-base": "#0D0D0D",
        "bg-surface": "#1A1A1A",
        "bg-elevated": "#292a2a",
        // Borders
        "border-subtle": "#262626",
        "border-muted": "#434933",
        "border-active": "#8e9479",
        // Text
        "text-primary": "#e3e2e2",
        "text-muted": "#c4caac",
        "text-faint": "#8e9479",
        // Accent — Electric Lime
        "lime": "#C8FF00",
        "lime-dim": "#a8d700",
        "lime-bright": "#c0f500",
        // Semantic aliases used in components
        primary: "#C8FF00",
        "on-primary": "#0D0D0D",
        surface: "#0D0D0D",
        "surface-container": "#1A1A1A",
        "surface-container-high": "#292a2a",
        "on-surface": "#e3e2e2",
        "on-surface-variant": "#c4caac",
        "outline-variant": "#262626",
        "primary-fixed": "#C8FF00",
        "on-primary-fixed": "#161f00",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display": ["clamp(2.5rem,7vw,4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "800" }],
        "headline-lg": ["clamp(2rem,4vw,3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "label": ["0.875rem", { lineHeight: "1", letterSpacing: "0.08em", fontWeight: "500" }],
        "micro": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.06em", fontWeight: "400" }],
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        "gutter": "24px",
        "section": "80px",
        "section-sm": "48px",
      },
      borderRadius: {
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(#262626 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-24": "24px 24px",
      },
      keyframes: {
        pulse_dot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "pulse-dot": "pulse_dot 2s ease-in-out infinite",
        "blink": "blink 1s step-end infinite",
        "dash-flow": "dash-flow 5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
