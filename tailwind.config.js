module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
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
