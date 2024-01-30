

// module.exports = {
//   important:true,
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         "3xl": "2000px",
//       },
//       colors: {
//         secondary:"#64B5F6"
//       },
//       fontFamily: {
//                     "merriweather": "var(--font-merriweather)", // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
//                     "poppins": "var(--font-poppins)", // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
//       },
//       backgroundImage: (theme) => ({
//         abstract:
//           "url(/bg.png)",
//           abstract_wide:
//           "url(/bg-wide.png) ",
//           city:  "url(/bg-city.jpg) ",
//       }),
//       boxShadow: {
//         oval: "0px 0px 38px -3px #EBF7FF;",
//       },
//       screens: {
//         "3xl": "2000px",
//         // => @media (min-width: 2000px) { ... }
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/typography'),
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/aspect-ratio'),
//     require('daisyui'),
//   ],
//     daisyui: {
//       themes: [], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
//     base: true, // applies background color and foreground color for root element by default
//     styled: true, // include daisyUI colors and design decisions for all components
//     utils: true, // adds responsive and modifier utility classes
//     prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
//     logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
//     themeRoot: ":root", 
//     }
// };
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
}