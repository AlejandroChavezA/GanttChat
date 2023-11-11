import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
        secondary: {
          100: "#d4d8de",
          200: "#bcc8d9",
          300: "#99a0c10",
          400: "#607c9f",
          500: "#3b4f72",
          600: "#254dd1",
          700: "#1e3751",
          800: "#1e403c",
          900: "#1e3a2a",
          default: "#3b4f72",
        },
      },
    },
  },
  plugins: [],
};
export default config;
