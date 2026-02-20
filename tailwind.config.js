/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        /* Premium dark system */
        base: '#0b0b0c',
        surface: '#111113',
        'surface-2': '#151518',
        ink: '#1b1b1f',
        line: 'rgba(244, 241, 235, 0.10)',
        'line-strong': 'rgba(244, 241, 235, 0.16)',

        text: '#f4f1eb',
        muted: '#bdb6ad',
        'muted-2': '#9f988f',

        bronze: '#b79a6b',
        'bronze-2': '#8f7650',
      },
      letterSpacing: {
        'display': '-0.04em',
        'tight': '-0.02em',
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
        'prose': '60ch',
        'tight': '44rem',
        'content': '1100px',
      },
      boxShadow: {
        'card': '0 10px 40px rgba(0,0,0,0.55)',
        'card-hover': '0 14px 56px rgba(0,0,0,0.65)',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
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
