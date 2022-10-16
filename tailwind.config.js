/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./*/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#020300',
        ph: '#22c55e',
        secondary: '#94a3b8',
      },
    },
  },
  plugins: [],

}
