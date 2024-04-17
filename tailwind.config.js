/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "app": "minmax(auto, 200px) 3fr",
        "app-lg": "minmax(auto, 220px) 3fr",
        "app-xl": "minmax(auto, 250px) 3fr",
        "header-lg": "2fr minmax(32vw ,1fr)",
        "header-xl": "2fr minmax(40vw,1fr)",
        "main-lg": "1fr 300px",
        "project-card": "12px 1fr",
        "project-card-lg": "repeat(auto-fit, minmax(300px, 1fr))",
      },

      gridTemplateRows: {
        "app": "auto 4fr",
        "header": "auto 1fr",
        "main-lg": "40px, 1fr",
        "project-card": "1fr, 16px",
      },
    },
  },
  plugins: [],
};
