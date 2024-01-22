/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#161616",
        "light-primary-dark": "#282828",
        "heavy-primary-dark": "#141414",
        "light-text": "#b8b8b8",
        "primary-dark-hover": "#383838",
      },
    },
  },
  plugins: [],
};
