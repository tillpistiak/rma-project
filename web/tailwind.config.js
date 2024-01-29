/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  variants: {
    extend: {
      blur: ['hover', 'group-hover'],
      filter: ['hover', 'group-hover'],
      visibility: ['hover', 'group-hover'],
      zIndex: ['hover', 'group-hover'],
      hueRotate: ['hover', 'group-hover'],
      brightness: ['hover', 'group-hover'],
      translate: ['hover', 'group-hover'],
      opacity: ['hover', 'group-hover'],
    },
  },
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
        '4xl': '2500px',
      },
      height: {
        120: '30rem',
        144: '36rem',
        168: '42rem',
        192: '48rem',
      },
      colors: {
        primary: {
          50: '#f6f1e4',
          100: '#ebddbb',
          200: '#dfc790',
          300: '#d4b167',
          400: '#cda24f',
          500: '#c69442',
          600: '#c18b3d',
          700: '#bb7e37',
          800: '#b37232',
          900: '#a4612e',
        },

        secondary: {
          600: '#263751',
        },
      },
    },
  },
  plugins: [],
};
