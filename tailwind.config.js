/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkHueBg: "#0b1215",
        mainColor: '#eaa023'
      },
      width: {
        contain: '1200px'
      },
      fontFamily: {
        josefin: ['Josefin Sans'],
        sail: ['Sail'],
        saily: ['Saily']
      },
      backgroundImage: {
        'jumboImg': "url('/assets/img-1.jpg')"
      },
      keyframes: {
        zoomInOut: {
          "0%, 100%": {
              transform: "scale(1)"
          },
          "50% ": {
              transform: "scale(1.5)"
          }
        }
      },
      animation: {
        zoomInOut: 'zoomInOut 22s ease infinite'
      }
    },
  },
  plugins: [],
}