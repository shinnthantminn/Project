module.exports = {
  content: [
    "./public/*.html",
    "./public/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Mochiy Pop P One'],
        'card':["'Dancing Script', cursive"]
      },
      colors:{
         left:"#70e1f5", 
         right:"#bdf33a"
    }
    },
  },
  plugins: [function({ addUtilities, addComponents, e, prefix, config }) {
    const newUtilities = {
      '.grid-row': {
        gridRow: '1'
      },
      '.grid-row-none':{
        gridRow: "auto"
      }
    }
    addUtilities(newUtilities)
  }],
}
