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
        platinum: '#f5f4f1',
        cream: '#faf9f6',
        charcoal: '#1a1a1a',
        graphite: '#2d2d2d',
        sand: '#c9b896',
        champagne: '#d4c4a8',
        warm: '#e8e2d9',
        /* Refined accent — use sparingly */
        'brand-blue': '#4a8ee6',
        'brand-blue-dark': '#3a7ad4',
        'brand-orange': '#f59b5c',
        'brand-orange-light': '#fef4ed',
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
        'soft': '0 2px 8px rgba(26, 26, 26, 0.06)',
        'soft-lg': '0 4px 24px rgba(26, 26, 26, 0.08)',
        'card': '0 2px 12px rgba(26, 26, 26, 0.06), 0 1px 3px rgba(26, 26, 26, 0.04)',
        'card-hover': '0 8px 32px rgba(26, 26, 26, 0.1), 0 2px 8px rgba(26, 26, 26, 0.06)',
        'elevated': '0 12px 40px rgba(26, 26, 26, 0.08)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, transparent 0%, rgba(232, 226, 217, 0.4) 70%, rgba(201, 184, 150, 0.12) 100%)',
        /* Subtle tech gradient for hero — modern, conversion-focused */
        'gradient-hero-tech': 'linear-gradient(135deg, rgba(245,244,241,0.97) 0%, rgba(232,226,217,0.5) 40%, rgba(240,248,255,0.15) 100%)',
        'gradient-section': 'linear-gradient(180deg, rgba(250, 249, 246, 0.6) 0%, rgba(245, 244, 241, 0.9) 100%)',
        'gradient-cta': 'linear-gradient(135deg, #1a1a1a 0%, #252525 50%, #1f1f1f 100%)',
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
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
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
