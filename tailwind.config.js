module.exports = {
  content: ["./src/**/*.js", "./src/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      navy: "#193f58",
      navylight: "#245b80",
      grey: "#ECECEC",
    },
    fontFamily: {
      sans: ["Helvetica Neue", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      mx30: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
