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
        ink: '#0F172A',
        accent: { DEFAULT: '#0F766E', glow: '#14B8A6' },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg,#0F766E 0%,#14B8A6 60%,#5EEAD4 100%)',
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(0,0,0,0.15)',
        glow: '0 20px 60px -20px rgba(15,118,110,0.45)',
      },
    },
  },
  plugins: [],
};
