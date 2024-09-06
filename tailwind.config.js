/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgba(55, 62, 68, 1)', 
        customBackground: 'rgba(97, 97, 97, 0.82)',
        customGray1: 'rgba(54, 60, 67, 1)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(rgba(55, 62, 68, 1), rgba(25, 27, 31, 1))',
        'custom-gradient-border': 'linear-gradient(rgba(74, 78, 84, 1), rgba(163, 173, 186, 1)',
        'custom-gradient-button': 'linear-gradient(rgba(48, 52, 57, 1), rgba(22, 23, 24, 1))'
      },
      borderColor: {
        'custom-border': 'rgba(150, 190, 231, 1)',
      },
      dropShadow: {
        'custom-shadow': 'rgba(0, 0, 0, 4)',
        'custom-shadow-button': 'rgba(16, 18, 19, 1), rgba(150, 190, 231, 1)'
      }
    },
  },
  plugins: [],
}

