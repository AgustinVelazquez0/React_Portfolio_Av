/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // AV brand palette — see /public/brand/README.md
        brand: {
          cyan: "#22D3EE",
          void: "#0A0A0A",
          charcoal: "#1A1A1A",
          steel: "#404040",
          amber: "#F59E0B",
          pure: "#FFFFFF",
        },
        primary: {
          light: "#22D3EE",
          dark: "#22D3EE",
        },
        secondary: {
          light: "#10B981",
          dark: "#34D399",
        },
        background: {
          light: "#FFFFFF",
          dark: "#0A0A0A",
        },
        text: {
          light: "#1F2937",
          dark: "#F9FAFB",
        },
      },
      fontFamily: {
        sans: ["Geist Sans", "Geist", "Inter", "system-ui", "sans-serif"],
        display: ["Geist Sans", "Geist", "Inter", "system-ui", "sans-serif"],
        heading: ["Geist Sans", "Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        btn: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
