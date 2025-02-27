/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#161622',
        secondary:{
          DEFAULT: '#FF9C01',
          100:'#FF9001',
          200:'#FF8E01'
        },
        black:{
          DEFAULT:'#000',
          100:'#1E1E2D',
          200:'#232533'
        },
        grey:{
          100:'CDCDE0',
        },
      },
      fontFamily:{
        pthin:["Poppins-Thin", "sans-serif"],
        pextraLight:["Poppins-ExtraLight","sans-serif"],
        plight:["Poppins-Light","sans-serif"],
        pregular:["Poppins-Regular", "sans-serif"],
        pmedium:["Poppins-Medium","sans-serif"],
        psemibold:["Poppins-Semibold","sans-serif"],
        pbold:["Poppins-Bold","sans-serif"],
        pextrabold:["Poppins-Extrabold","sans-serif"],
        pblack:["Poppins-Black","sans-serif"],
      },
    },
  },
  plugins: [],
}

