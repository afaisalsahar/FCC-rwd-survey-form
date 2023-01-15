/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      flexBasis: {
        'radio-custom': '31%'
      }
    },
  },
  plugins: [],
}
