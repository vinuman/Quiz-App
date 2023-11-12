/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans - serif"],
      },
      colors: {
        darknavy: "var(--darknavy)",
        greynavy: "var(--greynavy)",
        lightbluish: "var(--lightbluish)",
        lightgrey: "var(--lightgrey)",
        green: "var(--green)",
        navy: "var(--navy)",
        purple: "var(--purple)",
        red: "var(--red)",
        purewhite: "var(--purewhite)",
      },
    },
  },
  plugins: [],
};
