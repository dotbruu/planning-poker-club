/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0E1A2C",
      "primary-medium": "#556B91",
      "primary-light": "#6C93E0",
      secondary: "#E18CF9",
      "secondary-dark": "#C55AE3",
      "gray-light": "#E8E8EA",
      white: "#fff",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["var(--font-clash)", "sans-serif"],
        modak: ["var(--font-modak)"],
      },
    },
  },
  plugins: [],
};
