/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':'#04a64f',
        'yellow': '#4b251b',
        'yellow-light': '#FFF0CB',
        'muted':'#606060',
        'gray': '#323232',
        'gray-light': '#4A4A4A',
        'gray-light-sm': '#dcdcdc57',
        'white-blur':'#ffffff42'
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
  plugins: [require("daisyui")],
}
