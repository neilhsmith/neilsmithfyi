/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-border": "url('/hero-border.svg')",
        "hero-bg-gradient":
          "radial-gradient(circle at 62%, hsla(41, 74%, 7%, 1), hsla(0, 0%, 70%, 0) 30%)",
      },
      colors: {
        beige: "#E9E8DC",
        brown: "#211805",
      },
      fontFamily: {
        standout: '"Smooch Sans", sans-serif',
      },
    },
  },
  plugins: [],
}
