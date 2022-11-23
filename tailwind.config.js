/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#02929A',
        secondary: '#169BA2',
        thirdly: '#1EA5AC',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
};
