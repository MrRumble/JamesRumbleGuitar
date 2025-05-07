/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#6F90AF',
        navySlate: '#303655',
        cloudGray: '#BFCBCE',
        skyTint: '#84A7BA',
      },
    },
  },
  plugins: [],
};
