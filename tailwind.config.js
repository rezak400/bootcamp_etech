module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary : "#211F21",
        secondary : "#F22233",
        third : "#343334"
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ["Raleway"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
