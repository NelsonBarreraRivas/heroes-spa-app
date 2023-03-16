/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tilt-warp': ['Tilt Warp', 'cursive'],
        'passion-one': ['Passion One', 'cursive'],
      },
      container: {
        center: true,
        padding: '3rem',
        maxWidth: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
      },
      
    },
  },
  plugins: [],
}