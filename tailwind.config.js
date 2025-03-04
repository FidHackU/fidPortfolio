/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prism: ["Tilt Prism", "sans-serif"],
        play: ["Playwrite GB S", "cursive"],
        poppins: ["Poppins", "san-serif"],
      },
    },
  },
  plugins: [],
};
