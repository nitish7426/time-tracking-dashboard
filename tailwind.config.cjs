/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "hsl(263, 55%, 52%)",
        "primary-200": "hsl(217, 19%, 35%)",
        "primary-300": "hsl(219, 29%, 14%)",
        "neutral-100": "hsl(0, 0%, 81%)",
        "neutral-200": "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
