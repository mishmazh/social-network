module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "0px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    colors: {
      white: {
        500: "#fff",
      },
      black: {
        500: "#000",
      },
      grey: "#f0f0f0",
      red: "#ff7373",
      transparent: "transparent",
    },
    fontFamily: {
      catamaran: ["Catamaran", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
