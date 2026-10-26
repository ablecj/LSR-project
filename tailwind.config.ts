import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
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
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        malayalam: ["var(--font-malayalam)", "var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        editorial: "1360px",
      },
      boxShadow: {
        subtle: "0 10px 30px -12px rgba(5, 44, 54, 0.07)",
        elevated: "0 20px 45px -15px rgba(5, 44, 54, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
