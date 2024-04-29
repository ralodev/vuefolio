/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        //Generate your palette in https://uicolors.app/create
        primary: {
          50: '#effaf3',
          100: '#d8f3e1',
          200: '#b5e5c7',
          300: '#84d1a6',
          400: '#51b681',
          500: '#2f9a66',
          600: '#1d724a',
          700: '#196342',
          800: '#164f36',
          900: '#13412e',
          950: '#0a241a'
        }
      }
    }
  },
  plugins: []
}
