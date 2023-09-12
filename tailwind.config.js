/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: "'Montserrat', sans-serif;",
      poppins: "'Poppins', sans-serif;",
      ranga: "'Ranga', cursive;",
    },
    extend: {
      colors: {
        primary: "#040C2C",
        secondary: "#F9004D",
        background: "#F8F9FC",
      },
      maxWidth: {
        container: "1320px",
      },
    },
  },
  plugins: [],
  // 'Poppins', sans-serif;
};
