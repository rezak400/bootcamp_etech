module.exports = {
  purge: {
    // enabled: true,
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
      backgroundImage: theme => ({
        'hero': "url('../../assets/images/shoe-1.jpeg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
