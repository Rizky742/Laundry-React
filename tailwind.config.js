
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Roboto', 'sans-serif', defaultTheme.fontFamily.sans],
        'reem': ['Reem Kufi', 'sans-serif']
      },
      colors: {
        blue1: "#15A9C5",
        blue2: "#124E78",
        blue3: "#124E78"
      },
      width: {
        '580' : '38rem'
      },
      right: {
        '17': 'right: 1rem'
      }
    },
  },
  plugins: [],
}
