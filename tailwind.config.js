/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './index.html',
  ],
  theme: {
    extend: {
      fontFamily:{
        figtree: ["Figtree", 'sans-serif']
      },
      boxShadow:{
        'card-shadow': '0 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
