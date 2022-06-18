module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '4rem'
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#2C6739',
          '900': '#468153',
          '800': '#749F7E',
          '700': '#91B99A',
          '600': '#C5D4C9',
          '500': '#E7EDE8'
        },
        yellow: {
          DEFAULT: '#F5C95F',
          '900': '#F7D47F',
          '800': '#F9E0A3',
          '700': '#FBE9BD',
          '600': '#FDF1D5',
          '500': '#FDF6E4'
        },
        blue: {
          DEFAULT: '#5285F7',
          '900': '#759DF9',
          '800': '#91B1FA',
          '700': '#A7C1FB',
          '600': '#C0D2FC',
          '500': '#D7E2FD'
        },
        indigo: {
          DEFAULT: '#605EF7',
          '900': '#807EF9',
          '800': '#A4A2FB',
          '700': '#BDBCFC',
          '600': '#D5D4FD',
          '500': '#E4E4FD'
        },
        red: {
          DEFAULT: '#D63646',
          '900': '#DE5C69',
          '800': '#E47B85',
          '700': '#E9949C',
          '600': '#EFB1B7',
          '500': '#F4CDD0'
        },
        orange: {
          DEFAULT: '#F6966D',
          '900': '#F7A683',
          '800': '#F8B396',
          '700': '#F9BEA6',
          '600': '#FBCDBB',
          '500': '#FCDDD1'
        },
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar-hide'), require('@tailwindcss/forms')]
}