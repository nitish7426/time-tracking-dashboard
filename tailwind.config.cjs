/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "hsl(35, 77%, 62%)",
        "primary-2": "hsl(5, 85%, 63%)",
        "neutral-1": "hsl(36, 100%, 99%)",
        "neutral-2": "hsl(233, 8%, 79%)",
        "neutral-3": "hsl(236, 13%, 42%)",
        "neutral-4": "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
