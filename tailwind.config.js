// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Azul
        secondary: '#10B981', // Verde para fitness
        dark: '#1F2937',
      },
    },
  },
  plugins: [],
}