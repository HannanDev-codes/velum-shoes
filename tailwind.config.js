/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: "#0a0a1f",
        gold: "#d4af37",
      },
    },
  },
  plugins: [],
}