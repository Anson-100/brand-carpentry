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
        grayish: "#D9D9D9",
        grayer: "#5B5B5B",
        "button-fill": "#8E8E8E",
        cream: "#FCF9ED",
        gold: "#E8C872",
        "burnt-orange": "#CD5C08",
        sand: "#EADBC8",
        "phone-green": "#03C988",
        "bg-gray": "rgb(231, 231, 231)",
      },
      backgroundImage: {
        "gradient-desert": "linear-gradient(180deg, #FFFFFF, #000000 )",
        "gradient-gray": "linear-gradient(to top, #4d4d4d, #757575)",
        "gradient-gray-2": "linear-gradient(rgb(75 85 99), rgb(31 41 55))",
        "gradient-gray-3": "linear-gradient(rgb(107 114 128), rgb(55 65 81))",
        "gradient-sunset": "linear-gradient(to top, #38bdf8, #3b82f6, #4f46e5)",
      },
      fontFamily: {
        sarabun: ["Sarabun", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        "great-vibes": ["Great Vibes", "cursive"],
        heebo: ["Heebo", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        quest: ["Questrial", "sans-serif"],
      },

      content: {
        landing: "url('./assets/bg-image.png')",
        overhead: "url('./assets/overhead-mobile.jpg')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      cbp: "600px",
      md: "992px",
      lg: "1200px",
      xl: "1700px",
      se: { raw: "(max-width: 376px) and (max-height: 700px)" },

      "landscape-mobile": {
        raw: "(max-height: 440px) and (orientation: landscape)",
      },
      "se-mobile": {
        raw: "(max-height: 376px) and (orientation: landscape)",
      },
    },
  },
  plugins: [],
}
