import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
    },
    fontFamily: {
      primary: "var(--font-JetBrainsMono)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D1D1D",
          hover: "#00000",
        },
        secondary: {
          DEFAULT: "#F2EFEB",
          hover: "#161617",
        },
        accent: {
          DEFAULT: "#5D768A",
          hover: "#A2C70E",
        },
      },
    },
  },
  plugins: [],
};
export default config;
