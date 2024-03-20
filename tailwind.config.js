/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF385C',
        'pblack': "#191c20",
        'poutline': "#d8dadc"
      },
      fontFamily:{
        'poppins':"Poppins"
      }
    },
  },
  plugins: [],
}

