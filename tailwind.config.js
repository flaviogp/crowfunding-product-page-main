/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'moderateCyan': 'hsl(176, 50%, 47%)',
        'darkCyan': 'hsl(176, 72%, 28%)',
        'darkGray': 'hsl(0, 0%, 48%)',
      },
      backgroundImage: {
        'heroMobile': 'url(./src/assets/images/image-hero-mobile.jpg)'
      }
    },
  },
  plugins: [],
}

