/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        platinum: '#f5f4f1',
        cream: '#faf9f6',
        charcoal: '#1a1a1a',
        graphite: '#2d2d2d',
        sand: '#c9b896',
        champagne: '#d4c4a8',
        warm: '#e8e2d9',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Syne"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3.25rem, 8.5vw, 6.5rem)', { lineHeight: '0.96', letterSpacing: '-0.035em' }],
        'display-sm': ['clamp(1.875rem, 4.2vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-num': ['clamp(5rem, 14vw, 11rem)', { lineHeight: '0.82', letterSpacing: '-0.04em' }],
        'eyebrow': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.2em' }],
      },
      borderRadius: {
        'btn': '4px',
      },
      maxWidth: {
        'prose': '65ch',
        'tight': '48rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        600: '600ms',
      },
    },
  },
  plugins: [],
}
