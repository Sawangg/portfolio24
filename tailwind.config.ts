/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/modules/**/*.{ts,tsx}", "./src/ui/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
      },
      screens: {
        "3xl": "1920px",
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
