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
      colors: {
        // Deep obsidian/slate dark developer & agency backgrounds
        canvas: {
          DEFAULT: "#090D16",
          subtle: "#0D1322",
        },
        surface: {
          DEFAULT: "#0F172A",
          elevated: "#162032",
          card: "#0D1424",
          hover: "#1E293B",
          border: "#1E293B",
        },
        // Crisp neutral text hierarchy
        foreground: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
          subtle: "#64748B",
          inverse: "#090D16",
        },
        // Vibrant Indigo accents
        indigo: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
          glow: "rgba(99, 102, 241, 0.25)",
        },
        // Vibrant Emerald accents
        emerald: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          glow: "rgba(16, 185, 129, 0.25)",
        },
        // Slate extended shades
        slate: {
          850: "#162032",
          950: "#090D16",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        "radial-hero":
          "radial-gradient(1200px circle at 50% -10%, rgba(99, 102, 241, 0.18), rgba(16, 185, 129, 0.06) 40%, transparent 70%)",
        "radial-indigo":
          "radial-gradient(600px circle at center, rgba(99, 102, 241, 0.2), transparent 70%)",
        "radial-emerald":
          "radial-gradient(600px circle at center, rgba(16, 185, 129, 0.2), transparent 70%)",
        "gradient-accent":
          "linear-gradient(135deg, #6366F1 0%, #38BDF8 50%, #10B981 100%)",
      },
      boxShadow: {
        "glow-indigo": "0 0 35px -5px rgba(99, 102, 241, 0.35)",
        "glow-emerald": "0 0 35px -5px rgba(16, 185, 129, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
