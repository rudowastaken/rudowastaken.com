/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        light: "#F7F7F7",
        grey: "#ECECEC",
        accent: "#0439D9",
        black: "#262626",
      },
    },
  },
  plugins: [],
};
