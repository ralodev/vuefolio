/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        //Generate your palette in https://uicolors.app/create
        primary: {
          50: '#f2f5fc',
          100: '#e2e9f7',
          200: '#cbd7f2',
          300: '#a8bfe8',
          400: '#7e9ddc',
          500: '#607ed2',
          600: '#4b63c5',
          700: '#4152b4',
          800: '#3a4593',
          900: '#333c75',
          950: '#232748'
        },
        base: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#000000'
        }
      }
    }
  },
  plugins: []
}
