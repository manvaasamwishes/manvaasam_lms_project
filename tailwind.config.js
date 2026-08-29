/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        manvaasam: {
          dark: '#072a1a',
          forest: '#0c3823',
          emerald: '#15803d',
          primary: '#16a34a',
          accent: '#22c55e',
          lightGreen: '#4ade80',
          lime: '#84cc16',
          bg: '#f3f7f4',
          card: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'split-card': '0 25px 50px -12px rgba(12, 56, 35, 0.25), 0 0 35px rgba(22, 163, 74, 0.12)',
        'ribbon': '0 10px 30px rgba(7, 42, 26, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
        'btn-glow': '0 4px 20px rgba(22, 163, 74, 0.4)',
        'neu-flat': '16px 16px 40px #c2d2c5, -16px -16px 40px #ffffff',
        'neu-pressed': 'inset 4px 4px 8px #c2d2c5, inset -4px -4px 8px #ffffff',
        'neu-button': '6px 6px 14px #c2d2c5, -6px -6px 14px #ffffff',
        'neu-button-active': 'inset 3px 3px 6px #c2d2c5, inset -3px -3px 6px #ffffff',
        'neu-dark-pressed': 'inset 4px 4px 8px #031b0e, inset -4px -4px 8px #0d5a31',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
