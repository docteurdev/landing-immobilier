/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':'#093A7A',
        'yellow': '#FFC839',
        'yellow-light': '#FFF0CB',
        'muted':'#606060',
        'gray': '#323232',
        'gray-light': '#4A4A4A'
      },
      fontSize: {
        // 'sm': '0.8rem',
        // 'base': '1rem',
        // 'xl': '1.25rem',
        // '2xl': '1.563rem',
        // '3xl': '1.953rem',
        // '4xl': '2.441rem',
        // '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}
