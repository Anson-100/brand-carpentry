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
        "light-blue": "#00A9FF",
        yellow: "#FBDF07",
        cyberspace: "#272829",
        grayish: "#F4F4F4",
        grayer: "#7D7C7C",
        cream: "#FCF9ED",
        gold: "#C58940",
        "burnt-orange": "#CD5C08",
        sand: "#EADBC8",
        "phone-green": "#03C988",
      },
      fontFamily: {
        sarabun: ["Sarabun", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        "great-vibes": ["Great Vibes", "cursive"],
        heebo: ["Heebo", "sans-serif"],
      },

      content: {
        landing: "url('./assets/bg-image.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      cbp: "600px",
      md: "1000px",
      lg: "1200px",
      xl: "1700px",
      se: { raw: "(min-width: 376px) and (min-height: 700px)" },
    },
  },
  plugins: [],
}
