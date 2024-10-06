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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1F2937", // Dark Grey (for mature, modern look)
        secondary: "#4B5563", // Light Grey for accents
        accent: "#9CA3AF", // Muted accents (cool tone)
        highlight: "#6B7280", // Use this for subtle highlights
        muted: "#E5E7EB", // Light background elements
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // A clean, modern sans-serif font
        serif: ["Playfair Display", "serif"], // Stylish serif font for headings
      },
      fontSize: {
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      lineHeight: {
        relaxed: "1.75",
        snug: "1.4",
      },
      letterSpacing: {
        wider: ".05em",
        tight: "-.015em",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        subtle: "0 4px 6px rgba(0, 0, 0, 0.05)",
        deep: "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For beautiful text elements
  ],
};

export default config;

