const { fontFamily } = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      
      screens: {
        "3xl": "2000px",
      },
      colors: {
        "primary-100": "#ecfeff",
        "primary-200": "#cffafe",
        "primary-300": "#a5f3fc",
        "primary-400": "#67e8f9",
        "primary-500": "#38bdf8",
        "primary-600": "#0ea5e9",
        "primary-700": "#0e7490",
        "primary-800": "#155e75",
        "primary-900": "#164e63",
      },
      fontFamily: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          'display': ['Oswald', ]


        },
      },
      backgroundImage: (theme) => ({
        abstract:
          "url(/bg.png)",
          abstract_wide:
          "url(/bg-wide.png) ",
          city:  "url(/bg-city.jpg) ",
      }),
      boxShadow: {
        oval: "0px 0px 38px -3px #EBF7FF;",
      },
      screens: {
        "3xl": "2000px",
        // => @media (min-width: 2000px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
};
