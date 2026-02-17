/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      heading: ["var(--font-manrope)"],
    },
  },
};
export const plugins = [];
  