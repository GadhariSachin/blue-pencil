/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        muted: "var(--muted)",
        logoBg: "var(--logoBg)",
        disabled: "var(--disabled)",
        headingBg: "var(--headingBg)",
        priceTextBg: "var(--priceTextBg)"
      }
    },
  },
  plugins: [],
};
