/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      backgroundImage: {
        stars: "url(/src/assets/fundo.png)",
        "nlw-gradient": "linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%);",
        "nlw-gradient-border": "linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);"
      },
      fontFamily: {
        inter: "Inter, sans-serif"
      },
      colors: {
        black: {
          700: "#121214",
        },
        violet: {
          400: "#8b5cf6",
          700: "#2A2634"
        },
        zinc: {
          400: "#A1A1AA"
        }
      }
    },
  },
  plugins: [],
}