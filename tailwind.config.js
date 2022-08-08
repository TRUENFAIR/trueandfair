module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "4rem",
    },
    extend: {
      colors: {
        blue: "#0a3877",
        green: "#486c05",
        coustom1: "#f7f5f0",
      },
     
    },
    fontFamily: {
      bah: ["Bahnschrift"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
  ],
};
