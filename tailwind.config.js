/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:false,
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
      }
    },
    extend: {
      colors:{
        primary:{
          200: '#A95607',
          100: '#BB7C23'
        },
        secondary: {
          200: '#FFBB00',
          100: '#FFD93D'
        }
      }
    },
  },
  variants: {
    extend:{

    }
  },
  plugins: [],
}

