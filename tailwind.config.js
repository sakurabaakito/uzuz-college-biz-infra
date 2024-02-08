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
      },
      colors: {
        primary: "#ff0000",
        blue: {
          DEFAULT: "#000",
          second: "ddd",
        }
      }
    },
  },
  plugins: [],
}
