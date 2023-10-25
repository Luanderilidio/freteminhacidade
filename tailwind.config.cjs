/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");


module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Anton: ["Anton", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('tailwind-scrollbar-hide')]
};
