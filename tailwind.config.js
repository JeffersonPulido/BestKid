/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': { '200': '#ffc9a8', '500': '#ff5a23', '800': '#9e1b0e', },
        'lightOrange': { '50': '#fff9f6', },
        'green': { '100': '#d0fbe8', '200': '#a4f6d6', '600': '#00b288', '900': '#045042', },
        'whiteGreen': { '50': '#fcfefe', },
        'lightGreen': { '50': '#e5faf1', },
        'gray': { '200': '#e4e4e4', '600': '#818181', '950': '#282828', },
        'white-ice': {
          '50': '#e5faf1',
          '100': '#d4f7e6',
          '200': '#adedd3',
          '300': '#78ddb9',
          '400': '#41c69b',
          '500': '#1eab82',
          '600': '#118a6a',
          '700': '#0d6f57',
          '800': '#0d5846',
          '900': '#0c483b',
          '950': '#052922',
        }
      },
      fontFamily: {
        fontGeneral: ['Quicksand', 'sans-serif'],
        fontTitleRegular: ['FontSpringRegular', 'serif'],
        fontTitleBold: ['FontSpringBold', 'serif'],
      },
    },
  },
  plugins: [],
}

