/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: '#0A0A0A',
        accent: { DEFAULT: '#6366F1', glow: '#A78BFA' },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg,#6366F1 0%,#A78BFA 50%,#EC4899 100%)',
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(0,0,0,0.15)',
        glow: '0 20px 60px -20px rgba(99,102,241,0.45)',
      },
    },
  },
  plugins: [],
};
