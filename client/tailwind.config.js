/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./renderer/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6200EE',
        secondary: '#03DAC6',
        error: '#B00020'
      }
    },
  },
  plugins: [],
}

