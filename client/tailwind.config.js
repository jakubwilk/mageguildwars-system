/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '540px',
          md: '720px',
          lg: '840px',
          xl: '960px',
          '2xl': '1180px',
        },
      },
    },
  },
  plugins: [],
}
