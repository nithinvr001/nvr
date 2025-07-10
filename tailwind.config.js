/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      dark: '#1a1a1a',
      accent: '#22c55e', // lime-green 
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
}
,
  plugins: [require("daisyui")],
}