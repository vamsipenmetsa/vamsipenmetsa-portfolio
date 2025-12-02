/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ali-dark': '#0f172a', // Dark blue/black background
        'ali-blue': '#1e293b', // Lighter blue for sections
        'ali-gold': '#fbbf24', // Gold accent
        'ali-text': '#f1f5f9', // Light text
        'ali-muted': '#94a3b8', // Muted text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
