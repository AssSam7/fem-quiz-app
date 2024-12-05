/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontSize: {
      sm: ["12px", "150%"],
      base: ["28px", "100%"],
      lg: ["36px", "100%"],
      "2xl": ["64px", "100%"],
      "3xl": ["144px", "100%"],
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      "rubik-italic": ["Rubik Italic", "sans-serif"],
    },
    colors: {
      purple: "#A729F5",
      "dark-navy": "#313E51",
      navy: "#3B4D66",
      "grey-navy": "#626C7F",
      "light-grey": "#ABC1E1",
      "light-bluish": "#F4F6FA",
      "pure-white": "#FFFFFF",
      green: "#26D782",
      red: "#EE5454",
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
  darkMode: "class",
};
