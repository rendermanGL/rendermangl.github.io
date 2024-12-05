/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Include all HTML files in the root directory
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS files if using a framework
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#272727',
        whiteAj: '#ffffff',
        blackAj: '#000000',
        greyAj: '#9a9a9a',
        accentAj: '#0d5c65',
        dropdownBg: '#2a2a2a',
        hoverBg: "959494"
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")]
};