/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        danger: '#ff5f40',
        info: {
          900: '#234e52',
          800: '#285e61',
        },
        pink: '#ff69b4',
        lightblue: '#add8e6',
        lightgreen: '#90ee90',
        white: '#ffffff',
      },
      fontFamily: {
        rale: ['Raleway'],
      },
    },
  },
  plugins: [],
}
