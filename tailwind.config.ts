import type { Config } from "tailwindcss";

/**
 * Tema único da marca Agência Duvidiu.
 * Os valores reais ficam em app/globals.css (variáveis CSS em :root).
 * Para trocar cor/fonte/cantos, edite só as variáveis lá.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        line: "var(--color-line)",
        "line-strong": "var(--color-line-strong)",
        fg: "var(--color-fg)",
        muted: "var(--color-muted)",
        primary: "var(--color-primary)",
        "primary-fg": "var(--color-primary-fg)",
        accent: "var(--color-accent)",
        "accent-2": "var(--color-accent-2)",
        danger: "var(--color-danger)",
        brand: {
          cyan: "var(--brand-cyan)",
          yellow: "var(--brand-yellow)",
          magenta: "var(--brand-magenta)",
          dark: "var(--brand-dark)",
        },
      },
      fontFamily: {
        sans: ["var(--font-brand)"],
        display: ["var(--font-brand)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        brand: "var(--radius)",
      },
    },
  },
  plugins: [],
};

export default config;
