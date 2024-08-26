import animation from "tailwindcss-animated";
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    // "./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    // "./src/utils/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        precio300: "#ffff00",
        precio350: "#fba657",
        precio400: "#4ade80",
        precio450: "#52b551",
        precio500: "#ff0000",
        precio600: "#00ffff",
        precio700: "#50dbff",
        precio800: "#5eb9fc",
        precio900: "#6199ee",
        precio1000: "#808080",
        precioNegro: "black",
      },
    },
  },
  plugins: [animation, daisyui],
  daisyui: {
    themes: [
      {
        pozosscz: {
          primary: "#1f8e43",
          secondary: "#FF4444",
          accent: "#52b551",
          neutral: "#333333",
          "base-100": "#FFFFFF",
        },
      },
      // "dark",
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    // darkTheme: "dark", // name of one of the included themes for dark mode
    // base: true, // applies background color and foreground color for root element by default
    // styled: true, // include daisyUI colors and design decisions for all components
    // utils: true, // adds responsive and modifier utility classes
    // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    // logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    // themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
