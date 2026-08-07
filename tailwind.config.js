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
        'accent': '#a6361f',

        // Dark portfolio theme (from design)
        'bg': '#0d1016',
        'surf': '#151b25',
        'surf2': '#1d2531',
        'bd': 'rgba(255,255,255,.08)',
        'bd2': 'rgba(255,255,255,.15)',
        'tx': '#e7eaf0',
        'tx2': '#9aa3b4',
        'tx3': '#6a7385',
        'ac': '#4a8cff',
        'ac2': '#7aa9ff',
        'acd': 'rgba(74,140,255,.13)',
        'acb': 'rgba(74,140,255,.34)',
      }, 
      fontFamily: { 
        'body': ['Montserrat'],
        'text': ['Roboto'],
      },
    },
  },
  plugins: [],
}

