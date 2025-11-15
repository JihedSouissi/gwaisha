/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-bg': '#F2F2F2F9',
        'black-bg': '#000000',
        'primary-red': '#D15232',
        'subtext-black': 'rgba(0, 0, 0, 0.6)',
      },
      fontFamily: {
        'graphik-arabic': ['Arial', 'sans-serif'], // Fallback to system fonts
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: []
}
