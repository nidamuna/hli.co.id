/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '992px',
      'md': '768px',
      'xl': '1200px',
      }
    },
  },
  plugins: [],
}
