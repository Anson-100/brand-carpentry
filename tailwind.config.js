/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "darker-blue": "#141E46",
        "dark-blue": "#0C356A",
        "light-blue": "#89CFFD",
        yellow: "#FBDF07",
        grayish: "#F4F4F4",
        cream: "#FCF9ED",
        gold: "#C58940",
      },
      fontFamily: {
        sarabun: ["Sarabun", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        "great-vibes": ["Great Vibes", "cursive"],
        heebo: ["Heebo", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
