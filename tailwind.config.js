const { fontFamily } = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");
import daisyui from "daisyui"

module.exports = {
  important:true,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      colors: {
        "accent":"#64B5F6 "
      },
      fontFamily: {
                    "merriweather": "var(--font-merriweather)", // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
                    "poppins": "var(--font-poppins)", // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
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
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false
    }
};
