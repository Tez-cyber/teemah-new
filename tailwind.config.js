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
        contain: '1400px'
      },
      fontFamily: {
        josefin: ['Josefin Sans'],
        sail: ['Sail'],
        saily: ['Saily'],
        romantic: ['Romantic']
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
        },
        spins: {
          "0%": {
              transform: "rotate(0deg)"
          },
          "100%": {
              transform: "rotate(360deg)"
          }
        }
      },
      animation: {
        zoomInOut: 'zoomInOut 22s ease infinite',
        spins: 'spins 10s linear infinite'
      }
    },
  },
  plugins: [],
}