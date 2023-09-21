/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'wallet': 'linear-gradient(to bottom right,#947dd4,#4f5153,#4f5153,#fbb603);',
        'ads': 'linear-gradient(93deg,#24AA51 1.21%,#D2ED1A 98.65%);'
      },
      fontSize: {
        'sm2': '15px',
        'xl2': '22px'
      },
      animation: {
        'spin-slow': 'spin2 2s infinite ease',
        'loader-inner': 'loader 2s infinite ease-in',
        'fade-in': 'pulse 2s linear ease-in-out;'
      },
      keyframes: {
        spin2: {
          '0%': {
            transform: 'rotate(0)'
          },
          '25%': {
            transform: 'rotate(180deg)'
          },
          '50%': {
            transform: 'rotate(180deg)'
          },
          '75%': {
            transform: 'rotate(360deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        loader: {
          '0%': {
            height: '0%'
          },
          '25%': {
            height: '0%'
          },
          '50%': {
            height: '100%'
          },
          '75%': {
            height: '100%'
          },
          '100%': {
            height: '0%'
          },
        },
        pulse: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      }
    },

    colors: {
      'white': '#ffffff',
      'primary': '#25AA52',
      'border': '#296936',
      'black': '#020617',
      'black-2': '#000000',
      'background': '#f3f3f3',
      'background-black': '#1d252a',
      'color-icon': '#909399',
      'red': '#f56c6c',
      'input': '#071011',
      'background-nav': '#090a0e',
      'bg-button': 'rgba(7,40,23,.6)',
      'colorCard': '#1d252a'
    },
    boxShadow: {
      primary: '0px 0px 6px rgba(0, 0, 0, .12)'
    },
    screens: {

      'mobile': '350px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop-small': '1010px',

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
