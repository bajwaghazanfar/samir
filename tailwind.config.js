const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
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
        wdc: ["var(--font-Roboto)", "Poppins", ...fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        landing:
          "url('https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&w=6000&h=5000&dpr=1')",
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
  plugins: [],
};
