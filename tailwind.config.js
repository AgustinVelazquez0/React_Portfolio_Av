/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6",
          dark: "#60A5FA", // Azul más brillante para tema dark
        },
        secondary: {
          light: "#10B981", // Verde para tema light
          dark: "#34D399", // Verde más brillante para tema dark
        },
        background: {
          light: "#FFFFFF",
          dark: "#000000",
        },
        text: {
          light: "#1F2937",
          dark: "#F9FAFB",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        btn: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
