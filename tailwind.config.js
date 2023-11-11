/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#99D492",
          200: "#74C67A",
          300: "#56B870",
          400: "#39A96B",
          500: "#1D9A6C",
          600: "#188977",
          700: "#137177",
          800: "#0E4D64",
          900: "#0A2F51",
          default: "#1D9A6C",
        },
        secondary: {},
      },
    },
  },
  plugins: [],
};
