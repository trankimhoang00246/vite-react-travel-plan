/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#f66f4d",
        second: "#2b9ba7",
        third: "#FAF8ED",
      },
    },
  },
  plugins: [],
};
