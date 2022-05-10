const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./sources/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat Alternates', 'serif'],
      },
      'colors': {
        'brand-green': '#C0DF00',
      },
      screens: {
        'xxs': '350px',
        'xs': '520px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
}
