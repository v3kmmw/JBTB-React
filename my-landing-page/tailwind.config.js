// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansation: ['Sansation', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#131313', // Custom dark gray color
          800: '#1B1B1B', //
          700: '#1B1B1B'
        },
        mint: {
          600: '#77D393',
          500: '#388750', // Custom mint color
          400: '#7FCC96', //
          300: '#1F492C'
        },
        white: { // Custom white
          100: '#CACACA'
        },
      },
    },
  },
  plugins: [],
}
