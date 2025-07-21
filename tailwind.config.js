/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeInUpDelay: "fadeInUp 0.8s ease-out 0.4s forwards",
        fadeInUpDelay2: "fadeInUp 0.8s ease-out 0.8s forwards",
        "fade-out": "fade-out 3s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "75%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
