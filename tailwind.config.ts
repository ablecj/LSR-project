import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-primary)",
          "primary-dark": "var(--brand-primary-dark)",
          "primary-deep": "var(--brand-primary-deep)",
          secondary: "var(--brand-secondary)",
          "secondary-light": "var(--brand-secondary-light)",
          surface: "var(--brand-surface)",
          "surface-muted": "var(--brand-surface-muted)",
          border: "var(--brand-border)",
          ink: "var(--brand-ink)",
          slate: "var(--brand-slate)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-malayalam)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "var(--font-malayalam)", "system-ui", "sans-serif"],
        malayalam: ["var(--font-malayalam)", "sans-serif"],
      },
      maxWidth: {
        editorial: "1360px",
      },
      boxShadow: {
        subtle: "0 12px 36px -12px rgba(11, 92, 112, 0.08)",
        elevated: "0 20px 48px -16px rgba(7, 59, 72, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
