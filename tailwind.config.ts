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
        cream: {
          50: "#FFFDF9",
          100: "#FAF3ED",
          200: "#F5E9DF",
          300: "#EBDAD0",
        },
        roseberry: {
          50: "#FDF2F4",
          100: "#FBE6EA",
          200: "#F7CDD7",
          300: "#EFA1B4",
          400: "#E36C8B",
          500: "#D3436C",
          600: "#B82755",
          700: "#9A1D46",
          800: "#801B3C",
          900: "#6D1A36",
        },
        whimsical: {
          bg: "#FAF3ED",
          curtain: "#D8728D",
          curtainDark: "#B85871",
          gold: "#D4A359",
          berry: "#A62053",
          textDark: "#482834",
          cardBg: "#FFFFFF",
        },
      },
      fontFamily: {
        handwriting: ["'Caveat'", "cursive"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Sacramento'", "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spinSlow 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
