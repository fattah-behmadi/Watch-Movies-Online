/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.{js,vue}",
    "./src/layout/*.{js,vue}",
    "./src/views/**/*.{js,vue}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // blueCustom: {
        //   100: "blue",
        // },
      },
    },
  },
  plugins: [],
};
