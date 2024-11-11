/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { //custom font-family
        montserrat: ['Montserrat', 'sans-serif'],
        ibm: ['IBM Plex Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif']
      },
      padding:{
        '5p': '5%' //custom padding
      },
      maxHeight: {
        '70vh': '70vh', //custom max-height
        '500px': '700px'
      },
     
    },
  },
  plugins: [],
}