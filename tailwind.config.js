/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#060230',
      secondary: '#002057',
      tertiary: '#f3c614',
      fourth: '#4b00df',
      danger: '#e3342f',
      success: '#38c172',
      white: '#fff',
      black: '#000',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
      },
    }
  },
  plugins: [],
}

