/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(172, 67%, 45%)",
        "neutral-1": "hsl(183, 100%, 15%)",
        "neutral-2": "hsl(186, 14%, 43%)",
        "neutral-3": "hsl(184, 14%, 56%)",
        "neutral-4": "hsl(185, 41%, 84%)",
        "neutral-5": "hsl(189, 41%, 97%)",
      },
      fontFamily: {
        mono: ["Space Mone", "mono"],
      },
    },
  },
  plugins: [],
};
