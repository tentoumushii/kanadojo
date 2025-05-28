module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        aurora: 'aurora 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
