/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundColor: {
        "custom-1": "#FFF0F5",
      },
      backgroundImage: {
        bgOne: "url('/public/images/bgOne.jpg')",
      },
    },
  },
  plugins: [],
};
