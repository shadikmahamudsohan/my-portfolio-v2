export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "section-shadow":
          "10px 10px 20px 5px rgba(0, 0, 0, 0.4), inset 0 -15px 40px 20px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        "space-mono": ['"Space Mono"', "monospace"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
