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
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0.2)', opacity: '0' },
          '50%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slide: {
          '0%': { transform: 'translateX(200%) scale(1)', opacity: '1' },
          '50%': { transform: 'translateX(50%) scale(0.5)', opacity: '0.5' },
          '100%': { transform: 'translateX(0%) scale(1)', opacity: '1' },
        },
      },
      animation: {
        scale: 'scale 1s ease-out forwards',
        slide: 'slide 1.5s ease-in-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
