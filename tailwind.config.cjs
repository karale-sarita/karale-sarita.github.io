/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    themes: [
      {
        custom: {
          "primary": "#312e81",
          "secondary": "#818cf8",
          "accent": "#0e7490",
          "neutral": "#e5e7eb",
          "base-100": "#fefefe",
          "info": "#7dd3fc",
          "success": "#6ee7b7",
          "warning": "#FBBD23",
          "error": "#f87171",
        },
      },
    ],
  },
}
