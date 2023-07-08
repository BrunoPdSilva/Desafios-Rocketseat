/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      primary: "#1DA1F2",
      white: "#FFFFFF",
      black: "#000000",
      blue: {
        50: "#F7F9FA",
        100: "#EBEEF0",
        200: "#89A2B8",
        300: "#5B7083",
        400: "#0F1419",
      },
      gray: {
        50: "#E1E1E6",
        100: "#828282",
        200: "#2F2F2F",
        300: "#202020",
        400: "#121214",
      }
    },
    extend: {},
  },
  plugins: [],
};
