/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    fontSize: {
        xs: ['6pt', '10pt'],
        sm: ['10pt', '16pt'],
        base: ['12pt', '20pt'],
        lg: ['16pt', '24pt'],
        xl: ['20pt', '28pt'],
    },
    extend: {
        gridTemplateRows: {
            '8': 'repeat(8, minmax(0,  1fr))',
            '10': 'repeat(10, minmax(0,  1fr))',
            '12': 'repeat(12, minmax(0,  1fr))',
        },
        gridRow: {

        }
    },
  },
  plugins: [],
}

