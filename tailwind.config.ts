import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
          100: "#141117",
          200: "#17151D",
          300: "#191923",
          400: "#1E2028",
          500: "#22272e",
          600: "#3F464A",
          700: "#5D6466",
          800: "#7A8282",
          900: "#989E9D",
          default: "#22272e",
        },
      },
    },
  },
  darkMode: "media",
  plugins: [nextui()],
};
export default config;
