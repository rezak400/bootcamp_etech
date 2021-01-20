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
      backgroundImage: theme => ({
        'hero': "url('../../assets/images/shoe-1.jpeg')",
        'shoe-2': "url('../../assets/images/shoe-2.jpeg')",
        'shoe-3': "url('../../assets/images/shoe-3.jpeg')",
        'shoe-4': "url('../../assets/images/shoe-4.jpeg')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
