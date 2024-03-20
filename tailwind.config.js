/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ['public/**/*.html'],
  theme: {
    screens: {
      'xs': {'max': '375px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        main: '#007dfc',
        secondary: '#d64045',
        bgPrimary: '#fafafa',
        bgSecondary: '#e5e7eb',
        bgTertiary: '#d6d3d1',
        headingText: '#000000',
        bodyText: '#444444',
        placeholderText: '#888888',
        bgDark: '#363636'
      }
    }
  },
  plugins: [],
}