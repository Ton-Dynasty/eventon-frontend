module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "linear-gradient(90deg, rgba(122,145,255,1) 0%, rgba(167,207,255,1) 40%, rgba(163,228,255,1) 100%);",
        about: "url('./assets/dynasty.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
