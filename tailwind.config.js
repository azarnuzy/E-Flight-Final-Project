/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#02929A',
        secondary: '#169BA2',
        thirdly: '#1EA5AC',
        color4: '#5EC4C9',
        color5: '#D7EDEE',
        color6: '#E8F4F4'
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
};
