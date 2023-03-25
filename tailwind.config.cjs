/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-1": "hsl(0, 0%, 98%)",
        "neutral-2": "hsl(0, 0%, 41%)",
        "neutral-3": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
