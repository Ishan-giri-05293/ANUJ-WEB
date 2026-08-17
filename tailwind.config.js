import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Instrument Serif"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        ink: {
          50: '#f7f7f5',
          100: '#eeece8',
          200: '#d9d6cf',
          300: '#b8b3a8',
          400: '#8e8878',
          500: '#6e6a5e',
          600: '#575449',
          700: '#45433c',
          800: '#2f2e29',
          900: '#1c1b18',
          950: '#100f0d',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdca8',
          300: '#ffc371',
          400: '#ff9f38',
          500: '#ff7d0a',
          600: '#f06400',
          700: '#c64c00',
          800: '#9d3c00',
          900: '#7e3200',
          950: '#441800',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,15,13,0.04), 0 4px 16px rgba(16,15,13,0.06)',
        lift: '0 2px 4px rgba(16,15,13,0.05), 0 12px 32px rgba(16,15,13,0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
