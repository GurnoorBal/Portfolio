/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: {
          light: "#ffffff", // Light mode primary
          DEFAULT: "#1c1c22", // Default for dark mode
        },
        accent: {
          light: "#5c6bc0", // Light mode accent
          DEFAULT: "#5c6bc0", // Dark mode accent
          hover: "#4e5cb0", // Adjust hover for dark mode
        },
        background: {
          light: "#f9f9f9", // Background for light mode
          dark: "#121212", // Background for dark mode
        },
        text: {
          light: "#000000", // Light mode text color
          dark: "#ffffff", // Dark mode text color
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
