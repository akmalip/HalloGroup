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
        green: "#5EF220",
        black: "#0F0F0F",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
