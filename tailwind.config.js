/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': {'max': '768px'},

      'md': {'max': '1024px', 'min': '768px'},

      'lg': {'max': '1280px', 'min': '1024px'},

      'xl': {'max': '1536px', 'min': '1280px'},

      '2xl': {'min': '1536px'},
    },
    extend: {
      backgroundImage: {
        'background': "url('https://static01.nyt.com/images/2022/12/21/multimedia/00nfl-tv-hfo-01-1-8156/00nfl-tv-hfo-01-1-8156-superJumbo.jpg')",
      },
    },
  },
  plugins: [],
}

