/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./*.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-gradient': 'linear-gradient(to bottom, #000000, #434343);'
      }
    },
  },
  plugins: [],
}

