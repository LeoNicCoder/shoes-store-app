module.exports = {
  purge: [],
  theme: {
    extend: {

      colors: {
        'primary' : '#2A83FF',
        'secondary': '#F1F7FF',
        'gray-1': '#505050',
        'gray-2': '#B1AEAE',
        'gray-4': '#CECECE',
        'blue-1': '#001229',
      },
      fontSize: {
        'li':'0.625rem',
      },
      borderRadius: {
        'li':'0.625rem',
      },

      boxShadow: {
        'ct': '0px 4px 20px rgba(0, 0, 0, 0.08)'
      },
    },

    
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
