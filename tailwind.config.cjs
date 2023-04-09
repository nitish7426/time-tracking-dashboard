/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        "primary-1": "hsl(246, 80%, 60%)",
        "primary-2": "hsl(15, 100%, 70%)",
        "primary-3": "hsl(195, 74%, 62%)",
        "primary-4": "hsl(348, 100%, 68%)",
        "primary-5": "hsl(145, 58%, 55%)",
        "primary-6": "hsl(264, 64%, 52%)",
        "primary-7": "hsl(43, 84%, 65%)",
        "neutral-1": "hsl(226, 43%, 10%)",
        "neutral-2": "hsl(235, 46%, 20%)",
        "neutral-3": "hsl(235, 45%, 61%)",
        "neutral-4": "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
