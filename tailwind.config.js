/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#99e8ef",

          secondary: "#3a2791",

          accent: "#e5f282",

          neutral: "#221424",

          "base-100": "#FCFCFD",

          info: "#A1E0F7",

          success: "#1ECCAF",

          warning: "#F9B066",

          error: "#DB4F33",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
