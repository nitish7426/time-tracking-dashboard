/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accordian-1": "hsl(238, 29%, 16%)",
        "accordian-2": "hsl(14, 88%, 65%)",
        "text-1": "hsl(237, 12%, 33%)",
        "text-2": "hsl(240, 6%, 50%)",
        divide: "hsl(240, 5%, 91%)",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
