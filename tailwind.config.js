/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "app-col": "minmax(120px,1fr) 3fr",
      },

      gridTemplateRows: {
        "app-row": "1fr 4fr",
        "header-row": "auto 1fr",
      },
    },
  },
  plugins: [],
};
