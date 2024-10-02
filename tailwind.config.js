/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily:{
        'DM-sans': ["DM Sans", "sans-serif"]
      },

      colors: {
      
        "purple-100-custom": "hsl(254, 88%, 90%)",
        "purple-500-custom": "hsl(256, 67%, 59%)",
        "yellow-100-custom": "hsl(31, 66%, 93%)",
        "yellow-500-custom": "hsl(39, 100%, 71%)",
        "white-custom": "hsl(0, 0%, 100%)",
        "black-custom": "hsl(0, 0%, 7%)",
        
      }


    },
  },
  plugins: [],
}

