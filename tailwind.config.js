/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Orbitron': ["Orbitron"],
        'Raleway': ["Raleway"]
      },
      backgroundImage:{
        'sm': "url('./images/card_bg_sm.png')",
        'md': "url('./images/card_bg_md.png')",
        'btn-yellow':"url('./images/btn_yellow.png')",
        'btn-white':"url('./images/btn_white.png')"
      },
      colors:{
        'icon': "#FFFFFF20",
        'yellow': "#FFB548",
        'light': "#D1E1DC",
        'grey': "#808080"
      }
    },
  },
  plugins: [],
}