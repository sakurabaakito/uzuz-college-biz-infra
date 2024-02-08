/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // https://tailwindcss.com/docs/content-configuration
    "./src/**/*.{html,js}",
    "./**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
        second: ["opensans", "sans-serif"],
      },
      colors: {
        primary: "#222222",
        secondary:"#005694",
        blue: {
          DEFAULT: "#4877D8",
          second: "#63B1C2",
          third: "#F3FAFF",
        },
        gray: {
          DEFAULT: "#E9E8E8",
          second: "#F5F5F5",
        },
        orange: {
          DEFAULT: "#ED991C",
          second: "#E66700",
          third: "#FFB951",
        }
      }
    },
  },
  plugins: [],
}
