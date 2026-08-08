/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          bg: "#F7F7F5",
          card: "#FFFFFF",
          cardDark: "#0A0A0A",
          border: "#E5E7EB",
          borderDark: "#1F1F1F",
          text: "#111111",
          muted: "#6B7280",
          subtle: "#F3F3EF",
        },
        brand: {
          lime: "#84CC16",
          limeLight: "#ECFCCB",
          limeDark: "#4D7C0F",
          emerald: "#10B981",
          emeraldDark: "#047857",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'premium': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 10px -2px rgba(0, 0, 0, 0.02)',
        'elevated': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}