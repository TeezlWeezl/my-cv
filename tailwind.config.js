/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-blue": "#3490D1"
      }
    },
  },
  plugins: [],
};
