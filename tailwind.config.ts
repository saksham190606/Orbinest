import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "3.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "Roboto", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "Roboto Mono", "monospace"],
      },
      colors: {
        // Al Jazeera Signature Palette
        primary: {
          DEFAULT: "#fa9000", // Al Jazeera warm saturated orange
          foreground: "#ffffff",
        },
        "live-red": "#c31833", // strictly for live/breaking state
        ink: "#000000", // crisp news black
        charcoal: "#333333",
        slate: {
          DEFAULT: "#595959",
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e5e5e5",
          300: "#d8d8d8",
          400: "#999999",
          500: "#595959",
          600: "#444444",
          700: "#333333",
          800: "#222222",
          900: "#111111",
          950: "#000000",
        },
        canvas: {
          DEFAULT: "#ffffff",
          subtle: "#f0f0f0",
        },
        surface: {
          DEFAULT: "#ffffff",
          elevated: "#ffffff",
          card: "#ffffff",
          hover: "#f8f8f8",
          border: "#d8d8d8",
        },
        soft: "#f0f0f0",
        hairline: "#d8d8d8",
        silver: "#bebebe",
        mist: "#dddddd",
        graphite: "#323232",

        // Al Jazeera Corporate / Network extension tokens
        indigo: {
          DEFAULT: "#272967",
          50: "#f0f0fa",
          100: "#e0e1f5",
          500: "#272967",
          600: "#202154",
          700: "#181940",
          900: "#100e2f",
        },
        "night-navy": "#100e2f",
        "network-canvas": "#181818",
        gold: "#dba200",
        amber: "#ffa000",
        "select-gold": "#ffc500",
        "rail-teal": "#00cbca",
        "rail-red": "#bc0000",

        foreground: {
          DEFAULT: "#000000",
          muted: "#595959",
          subtle: "#595959",
          inverse: "#ffffff",
        },
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "10px",
        lg: "18px",
        xl: "22px",
        full: "9999px",
      },
      boxShadow: {
        dropdown: "0 6px 12px rgba(0, 0, 0, 0.175)",
        hairline: "0 0 0 1px #d8d8d8",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
