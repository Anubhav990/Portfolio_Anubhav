/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        robotoC: ['Roboto Condensed', 'sans-serif']
      },
      boxShadow: {
        'neon-blue': '0 0 5px #0ff, 0 0 10px #0ff',
        'neon-indigo': '0 0 5px #c77dff, 0 0 10px #c77dff',
      },

    },
  },
  plugins: [],
  darkMode: "class",
}

