/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          600: "#007bff",
          800: "#0056b3",
        },
        green: {
          400: "#20c997",
          500: "#28a745",
          600: "#218838",
        },
        orange: {
          500: "#ff9800",
        },
      },
    },
  },
  plugins: [],
};
