/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1240px",
      xxl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Cormorant Infant", "serif"],
      },
    },
  },
  plugins: [],
};
