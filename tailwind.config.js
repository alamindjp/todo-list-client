/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  themes: [
    {
      mytheme: {
        "primary": "#350B40",
        "secondary": "#750550",
        "accent": "#F2EFEA",
        "neutral": "#000000FF",
        "base-100": "#2A303C",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    },
  ],
}
