/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        main:{
          100: '#0A2F51',
          200: '#0E4D64',
          300: '#137177',
          400: '#188977',
          500: '#1D9A6C',
          600: '#39A96B',
          700: '#56B870',
          800: '#74C67A',
          900: '#99D492',
          950: '#BFE1B0',
          default: '#1D9A6C'
        }
      }
    },
  },
  plugins: [],
};
