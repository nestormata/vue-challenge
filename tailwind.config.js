/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    fontSize: {
        sm: ['10pt', '16pt'],
        base: ['12pt', '20pt'],
        lg: ['16pt', '24pt'],
        xl: ['20pt', '28pt'],
    },
    extend: {},
  },
  plugins: [],
}

