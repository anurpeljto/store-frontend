/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#f2f0ea',
        'blackTheme': '#010101',
        'yellow': '#edcf5d',
        'grayTheme': '#a4a4a4'
      }
    },
  },
  plugins: [],
}