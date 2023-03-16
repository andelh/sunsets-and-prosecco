const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-pally)", ...fontFamily.sans],
        serif: ["var(--font-dancing)", ...fontFamily.serif],
      },
      colors: {
        yellow: "#F5E8C6",
        orange: "#FB9062",
      },
    },
  },
  plugins: [],
};
