import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07070a",
        panel: "#101016",
        line: "rgba(255,255,255,0.11)",
        mist: "#a7a5b3",
        entity: "#a979ff",
      },
      boxShadow: {
        aura: "0 0 0 1px rgba(169,121,255,0.12), 0 22px 80px rgba(46,20,98,0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
