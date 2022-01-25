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
    },
  },
  plugins: [function({ addUtilities, addComponents, e, prefix, config }) {
    const newUtilities = {
      '.ws': {
        wordSpacing: '10px'
      }
    }
    addUtilities(newUtilities)
  }],
}
