/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'off-white': '#efefe9', 
        'highlight': '#A52A2B',
      }, 
      fontFamily: {
        'body': ['Montserrat'],
      },
    },
  },
  plugins: [],
}

