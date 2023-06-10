/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#3363FF',
      'secondary': '#E18CF9',
      'secondary-dark': '#C55AE3',
      'gray-light': '#E8E8EA',
      'white': '#fff',
    },
    fontFamily: {
      "Nunito Sans": ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
