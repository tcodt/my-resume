/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        purple: "4px 4px 10px #d946ef",
        blue: "4px 4px 10px #0ea5e9",
        green: "4px 4px 10px #22c55e",
      },
    },
  },
  plugins: [],
};
