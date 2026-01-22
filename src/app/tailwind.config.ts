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
        background: "#0a0a0a", // Deep black/gray
        surface: "#121212", // Slightly lighter for cards
        primary: "#3b82f6", // Electric blue or your preferred accent
        secondary: "#64748b", // Muted text
        glass: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Use Inter or Geist
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0%, #a853ba 50%, #e92a67 100%)',
      },
    },
  },
  plugins: [],
};
export default config;