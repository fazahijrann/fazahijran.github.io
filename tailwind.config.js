/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px"
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: "#14b8a6",
        greens: "#CCFAF5",
        dark: "#0f172a"
      },
      screens: {
        "2xl": "1320px"
      }
    }
  },
  plugins: []
};
