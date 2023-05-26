/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        braah: ["Braah One", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        gold: "#EDA415",
        blue: "#003F62",
        lightblue: "#E2F4FF",
      },
      screens: {
        vsm: "400px",
        xmd: "800px",
      },
    },
  },
  plugins: [],
};
