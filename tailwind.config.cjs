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
      colors: {
        'custon-black': '#222222'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('tailwind-scrollbar-hide')]
};
