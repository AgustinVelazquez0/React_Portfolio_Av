/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Sistema de tokens via CSS vars (single source of truth: src/styles/tokens.css)
        surface: {
          0: "var(--surface-0)",
          1: "var(--surface-1)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
          overlay: "var(--surface-overlay)",
        },
        ink: {
          primary: "var(--ink-primary)",
          secondary: "var(--ink-secondary)",
          muted: "var(--ink-muted)",
          faint: "var(--ink-faint)",
        },
        line: {
          subtle: "var(--border-subtle)",
          DEFAULT: "var(--border-default)",
          strong: "var(--border-strong)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          deep: "var(--accent-deep)",
          ink: "var(--accent-ink)",
        },
        signal: {
          success: "var(--signal-success)",
          warning: "var(--signal-warning)",
          danger: "var(--signal-danger)",
          info: "var(--signal-info)",
        },
        // Legacy aliases (compat con código no migrado todavía)
        brand: {
          cyan: "#22D3EE",
          void: "#09090B",
          charcoal: "#18181B",
          steel: "#3F3F46",
          amber: "#F59E0B",
          pure: "#FAFAF9",
        },
        primary: {
          light: "var(--accent)",
          dark: "var(--accent)",
        },
        background: {
          light: "var(--surface-0)",
          dark: "var(--surface-0)",
        },
        text: {
          light: "var(--ink-primary)",
          dark: "var(--ink-primary)",
        },
      },
      fontFamily: {
        sans: ["Geist Sans", "Geist", "Inter", "system-ui", "sans-serif"],
        display: [
          "Instrument Serif",
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
        heading: ["Geist Sans", "Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["var(--type-2xs)", { lineHeight: "var(--leading-normal)" }],
      },
      letterSpacing: {
        tightest: "var(--tracking-tight)",
        snug: "var(--tracking-snug)",
        mono: "var(--tracking-mono)",
      },
      transitionTimingFunction: {
        emphasized: "var(--ease-emphasized)",
        standard: "var(--ease-standard)",
        decel: "var(--ease-decel)",
      },
      transitionDuration: {
        fast: "120ms",
        base: "180ms",
        slow: "280ms",
      },
      boxShadow: {
        soft: "var(--shadow-sm)",
        medium: "var(--shadow-md)",
        elevated: "var(--shadow-lg)",
        ring: "var(--shadow-ring)",
      },
      borderRadius: {
        DEFAULT: "var(--radius-md)",
      },
    },
  },
  plugins: [],
};
