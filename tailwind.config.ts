import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2B5E",
          dark: "#111D40",
          light: "#2A3F7E",
        },
        orange: {
          DEFAULT: "#F57C00",
          light: "#FF9800",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-fade":
          "linear-gradient(135deg, rgba(17,29,64,0.95) 0%, rgba(27,43,94,0.92) 45%, rgba(42,63,126,0.88) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
