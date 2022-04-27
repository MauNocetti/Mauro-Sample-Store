/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path');

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      borderWidth: {
        1: '1px'
      },
      fontSize: {
        'h1': ['5rem', {
          lineHeight: '1.325'
        }],
        'mobile-h1': ['2.25rem', {
          lineHeight: '1.33'
        }],
        'h2': ['2.625rem', {
          lineHeight: '1.31',
        }],
        'mobile-h2': ['1.75rem', {
          lineHeight: '1.32'
        }],
        'h3': ['1.75rem', {
          lineHeight: '1.32',
        }],
        'mobile-h3': ['1.25rem', {
          lineHeight: '1.3'
        }],
        'h4': ['1.25rem', {
          lineHeight: '1.4',
        }],
        'mobile-h4': ['1rem', {
          lineHeight: '1.5'
        }]
      },
      zIndex: {
        'header': 1000,
        'popup': 2000,
        'skip': 9999
      }
    },
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'border': '#ECECEC',
      'black': '#141414',
      'white': '#ffffff',
      'light-gray': '#FAFBFB',
      'ferrari-red': '#FF2500',
      'sapphire': '#005BC4',
      'valid': '#50C878',
      'invalid': '#F12A2E'
    },
    container: {
      center: true,
      padding: '1.25rem'
    },
    fontFamily: {
      body: ['Roboto', 'sans-serif']
    },
    screens: {
      sm: '40rem',
      md: '48rem',
      lg: '62rem',
      xl: '80rem',
      '2xl': '96.25rem'
    }
  },
  variants: {
    extend: {
      backgroundOpacity: ['active'],
      boxShadow: ['group-hover'],
      fontSize: ['responsive'],
      flex: ['responsive'],
      flexDirection: ['responsive'],
      flexGrow: ['responsive'],
      flexShrink: ['responsive'],
      flexWrap: ['responsive'],
      alignContent: ['responsive'],
      alignItems: ['responsive'],
      alignSelf: ['responsive'],
      justifyContent: ['responsive'],
      justifyItems: ['responsive'],
      justifySelf: ['responsive'],
      gridAutoColumns: ['responsive'],
      gridAutoFlow: ['responsive'],
      gridAutoRows: ['responsive'],
      gridColumn: ['responsive'],
      gridColumnEnd: ['responsive'],
      gridColumnStart: ['responsive'],
      gridRow: ['responsive'],
      gridRowEnd: ['responsive'],
      gridRowStart: ['responsive'],
      gridTemplateColumns: ['responsive'],
      gridTemplateRows: ['responsive'],
      height: ['group-hover'],
      width: ['responsive'],
      display: ['responsive'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
  content: [
    path.resolve(__dirname, '**/*.js'),
    path.resolve(__dirname, '../shopify/**/*.liquid')
  ]
}
