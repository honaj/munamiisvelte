/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      munamiipink: '#CD5BA3',
      munamiidarkgreen: '#26AB95',
      munamiibrown: '#553914',
      munamiilightgreen: '#83D2DD',
      white: '#FFFFFF',
      cream: '#FFFDD0'
    },
    extend: {
      fontFamily: {
        'YesevaOne': ['Yeseva One', 'cursive'], // Replace 'Roboto' with your font's name.
        'JosefinSans': ['Josefin Sans', 'sans-serif'],
      },
    }
  },
  plugins: []
};