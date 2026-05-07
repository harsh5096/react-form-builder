/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: '#0F172A',
        accent: { DEFAULT: '#0D9488', soft: '#5EEAD4', glow: '#2DD4BF' },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg,#0D9488 0%,#14B8A6 60%,#5EEAD4 100%)',
        'gradient-soft': 'linear-gradient(135deg,#F0FDFA 0%,#FBFBFC 60%,#F5F3FF 100%)',
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(15,23,42,0.10)',
        glow: '0 20px 60px -25px rgba(13,148,136,0.45)',
        card: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.08)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
    },
  },
  plugins: [],
};
