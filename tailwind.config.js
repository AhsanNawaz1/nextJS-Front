const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      "2xl":'1920px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    
    extend: {
      borderRadius:{
        'b-sm':"0.2rem",
        leftBorderTop:"0.8rem 0 0 0",
      },
      backgroundImage: {
        'one': "url('/assets/images/female-founders/one.png')",
        'two': "url('/assets/images/female-founders/two.png')",
        'three': "url('/assets/images/female-founders/three.png')",
        'four': "url('/assets/images/female-founders/four.png')",
      },
      dropShadow: {
        '1px': '0 0px 2px rgba(255, 255, 255, 1)',
        '5px': '0 0px 5px rgba(255, 255, 255, 0.5)',
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        Quicksand: ['Quicksand', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ffGreen:'#00BBC1',
        gray: {
          100: '#f3f4f6',
          200: '#EAEBEC',
          300: '#D4D6D8',
          400: '#BFC2C5',
          500: '#61666B',
          600: '#3A3D40',
          700: '#27292B',
          800: '#121314',
          900: '#0A0A0A',
        },
        cyan: {
          100: '#f4faff',
          200: '#C6EAFA',
          300: '#B4E3F9',
          400: '#A1DCF7',
          500: '#7BCEF4',
          600: '#4DBCF1',
          700: '#2FB2EE',
          800: '#1DABED',
          900: '#1193D0',
        },
        blue: {
          100: '#EBF5FF',
          200: '#ADD9FF',
          300: '#85C6FF',
          400: '#5CB3FF',
          500: '#33A0FF',
          600: '#0086FF',
          700: '#006DCC',
          800: '#0062B8',
          900: '#00417A',
        },
        orange: {
          100: '#FFF7EB',
          200: '#FEE7C3',
          300: '#FDD087',
          400: '#FCC05F',
          500: '#FBB036',
          600: '#FAA00F',
          700: '#F09605',
          800: '#DC8904',
          900: '#521200',
        },
        red: {
          100: '#FDECF1',
          200: '#F9C7D4',
          300: '#F6A2B7',
          400: '#F27D9A',
          500: '#EE587E',
          600: '#EB3160',
          700: '#CC1442',
          800: '#A71136',
          900: '#6F0B24',
        },
      },
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-radix')(),
  ],
};
