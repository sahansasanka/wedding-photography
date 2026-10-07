import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#F5F7F2",
          100: "#E6ECE0",
          200: "#CFDBC4",
          300: "#B1C4A2",
          400: "#8EA87D",
          500: "#6F8A5D",
          600: "#546E44",
          700: "#415535",
          800: "#324229",
          850: "#2A3722",
          900: "#242F1D",
          950: "#1A2214",
        },
        cream: {
          50: "#FAF7F2",
          100: "#F5EFE6",
          200: "#EDE5D8",
          300: "#E0D5C3",
          400: "#C9BAA2",
          500: "#AE9D83",
        },
        ink: {
          900: "#1A2016",
          800: "#2B3425",
          700: "#3F4B37",
          600: "#58674E",
          500: "#75836B",
        },
        gold: {
          300: "#E3D5AA",
          400: "#CDBE8F",
          500: "#AA9967",
        },
        sand: "#EFEBE1",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        polaroid: "0 10px 25px -5px rgba(0, 0, 0, 0.14), 0 8px 10px -6px rgba(0, 0, 0, 0.08)",
        "polaroid-lg": "0 20px 35px -10px rgba(0, 0, 0, 0.22), 0 10px 15px -5px rgba(0, 0, 0, 0.12)",
        card: "0 4px 20px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
