/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111A27',
        secondary: '#105650',
        customBlack: '#222222',
        customWhite: '#ffffff',
        customMetalGreen: '#092C2B',
        customCyan: '#4AB7E7',
        customEmerald: '#12a594',
        customLightBlue: '#7CDAC5',
        customWhiteBlue: '#C2E6FF',
        customLightGray: '#ECEEED',
        customDarkGray: '#1B1B1B',
        customSpace: '#112840',
      },
    },
  },
  plugins: [],
}
