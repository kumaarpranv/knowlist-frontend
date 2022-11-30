/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ["light", "dark", "winter"],
  },
  plugins: [require("daisyui")],
}
