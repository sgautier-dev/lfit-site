/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkGrayCust: '#454545',
        grayCust: '#D8D8D8',
        pinkCust: '#DF57BC',
      },
      fontFamily: {
        exo: ['var(--font-exo)'],
        days: ['var(--font-days)'],
        vibes: ['var(--font-vibes)'],
        caramel: ['var(--font-caramel)'],
        judson: ['var(--font-judson)'],
      },
    },
  },
  plugins: [ require('@tailwindcss/forms'),],
}
