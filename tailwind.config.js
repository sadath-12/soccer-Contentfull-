/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'themeBlue': '#0090C8',
        'themeBlack': '#141414'
      },
    },
  },
  plugins: [],
}
