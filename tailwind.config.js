/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#02929A',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
};
