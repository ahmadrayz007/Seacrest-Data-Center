module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  jit: true,
  theme: {
    extend: {},
    // colors: {

    // },
  },
  plugins: [
    require('flowbite/plugin')  
  ],
}
