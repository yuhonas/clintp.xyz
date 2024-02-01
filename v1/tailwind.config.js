/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fira Code', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', "Fira Sans", "Droid Sans", "Helvetica Neue", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

