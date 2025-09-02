/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './node_modules/@headlessui/react/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      darkMode: 'class', 
      
      colors: {
        // Paleta de colores para el tema claro
        light: {
          primary: {
            50: '#fdf9e6',
            100: '#fbf3cc',
            200: '#f8e799',
            300: '#f4db66',
            400: '#f1cf33',
            500: '#edbb06', // color principal
            600: '#be9605',
            700: '#8e7004',
            800: '#5f4a02',
            900: '#2f2501',
          },
          secondary: {
            50: '#ebf8ff',
            100: '#d1eeff',
            200: '#a3dcff',
            300: '#75caff',
            400: '#47b8ff',
            500: '#1996e6',
            600: '#1478b4',
            700: '#0f5a82',
            800: '#093c51',
            900: '#041e29',
          },
          // Los tonos de gris para el tema claro
          gray: {
            50: '#f5f5f5',
            100: '#e5e5e5',
            200: '#cfcfcf',
            300: '#a8a8a8',
            400: '#737373',
            500: '#525252',
            600: '#404040',
            700: '#262626',
            800: '#171717',
            900: '#0a0a0a',
          }
        },
        
        // Paleta de colores para el tema oscuro
        dark: {
          primary: {
            50: '#3f2b01',
            100: '#5e4002',
            200: '#8c6004',
            300: '#bb8105',
            400: '#e7a106',
            500: '#f4d23a', // color principal del tema oscuro
            600: '#fff0a6',
            700: '#fff5b9',
            800: '#fff9cc',
            900: '#fffcf2',
          },
          secondary: {
            50: '#03080e',
            100: '#06101c',
            200: '#0c2134',
            300: '#11314b',
            400: '#164263',
            500: '#1b527a',
            600: '#266a9b',
            700: '#3c93d0',
            800: '#64b6f7',
            900: '#a3d8ff',
          },
          // Los tonos de gris para el tema oscuro
          gray: {
            50: '#0a0a0a',
            100: '#171717',
            200: '#262626',
            300: '#404040',
            400: '#525252',
            500: '#737373',
            600: '#a8a8a8',
            700: '#cfcfcf',
            800: '#e5e5e5',
            900: '#f5f5f5',
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0,0,0,0.06)',
        card: '0 4px 12px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};