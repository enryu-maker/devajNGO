/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary':'#2976c3',
        "primary": "#f49d32",
        'pblack': "#191c20",
        'poutline': "#d8dadc"
      },
      fontFamily: {
        'poppins': "Poppins"
      }
    },
  },
  plugins: [],
}

