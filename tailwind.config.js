/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // ✅ enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        primary: "#facc15", // warm yellow
        night: "#0f172a",   // dark slate
        dawn: "#fdf6e3",    // light cream
      },
    },
  },
  plugins: [],
};
