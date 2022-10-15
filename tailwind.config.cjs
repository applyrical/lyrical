/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: {
          normal: "#ABD4FF",
        },
        highlight: {
          normal: "#E74C3C",
        },
      },
    },
  },
  plugins: [],
};
