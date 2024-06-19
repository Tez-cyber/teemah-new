/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkHueBg: "#0b1215"
      },
      width: {
        contain: '1200px'
      },
      fontFamily: {
        josefin: ['Josefin Sans']
      },
      backgroundImage: {
        jumboImg: "url('/assets/img-1.jpg')"
      }
    },
  },
  plugins: [],
}