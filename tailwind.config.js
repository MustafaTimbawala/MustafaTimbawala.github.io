/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'off-white': '#efefe9', 
        'gray-white': '#F0F0F0',
        'highlight-light': '#D9E9CF', 
        'highlight-medium': '#73946B', 
        'highlight-heavy': '#537D5D',  
        'primary': '#FFFFF0', 
        'accent': '#a6361f'


      }, 
      fontFamily: { 
        'body': ['Montserrat'],
      },
    },
  },
  plugins: [],
}

