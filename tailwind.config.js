/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            sans: ["var(--font-inter)"],
            heading: ["var(--font-manrope)"],
          },
      },
    },
    plugins: [],
  };
  