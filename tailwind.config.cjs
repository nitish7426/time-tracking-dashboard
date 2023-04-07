/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-1": "hsl(163, 72%, 41%)",
        "primary-2": "hsl(356, 69%, 56%)",
        "primary-3": "hsl(208, 92%, 53%)",
        "primary-4": "hsl(203, 89%, 53%)",
        "primary-5": "hsl(348, 97%, 39%)",

        "dark-bg": "hsl(230, 17%, 14%)",
        "dark-top-bg": "hsl(232, 19%, 15%)",
        "dark-card-bg": "hsl(228, 28%, 20%)",
        "dark-text-1": "hsl(228, 34%, 66%)",
        "dark-text-2": "hsl(0, 0%, 100%)",

        "light-bg": "hsl(0, 0%, 100%)",
        "light-top-bg": "hsl(225, 100%, 98%)",
        "light-card-bg": "hsl(227, 47%, 96%)",
        "light-text-1": "hsl(228, 12%, 44%)",
        "light-text-2": "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
