/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "app-col": "auto 1fr",
      },

      gridTemplateRows: {
        "app-row": "1fr 4fr",
      },
    },
  },
  plugins: [],
};
