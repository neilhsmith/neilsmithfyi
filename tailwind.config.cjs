/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-portrait-bg": "url('/color-splotch-01.png')",
        border: "url('/border2.svg')",
      },
      colors: {
        beige: "#E9E8DC",
        brown: "#211805",
      },
      fontFamily: {
        heading:
          '"Lalezar", Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif',
      },
    },
  },
  plugins: [],
}
