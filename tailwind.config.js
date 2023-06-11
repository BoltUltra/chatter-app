/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        primary: "#543EE0",
      },
    },
  },
  plugins: [],
};
