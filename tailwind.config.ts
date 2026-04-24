import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Monochrome ink scale (structure + texte)
        ink: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E5E7EB",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#060913",
        },
        // Accent vert "Bolt-like" — CTA, focus, indicateurs
        brand: {
          50: "#ECFDF3",
          100: "#D1FADF",
          200: "#A6F4C5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
          800: "#05603A",
          900: "#054F31",
          950: "#022E1E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: [
          "var(--font-plus-jakarta)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "grid-ink":
          "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
        "radial-brand":
          "radial-gradient(ellipse at top, rgba(18,183,106,0.15), transparent 60%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.04)",
        "card-md":
          "0 4px 6px -2px rgba(16,24,40,0.03), 0 12px 16px -4px rgba(16,24,40,0.08)",
        "card-lg":
          "0 4px 8px -2px rgba(16,24,40,0.05), 0 20px 32px -8px rgba(16,24,40,0.12)",
        "brand-glow": "0 8px 24px -4px rgba(18,183,106,0.35)",
        "brand-glow-lg":
          "0 12px 40px -8px rgba(18,183,106,0.45), 0 2px 6px -2px rgba(18,183,106,0.25)",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseBrand: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(18,183,106,0.55)" },
          "50%": { boxShadow: "0 0 0 14px rgba(18,183,106,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shine: "shine 2.5s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-brand": "pulseBrand 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
        marquee: "marquee 30s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out both",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
