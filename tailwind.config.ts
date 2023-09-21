import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fodark: "#222831",
        fosemiDark: "#393e46",
        fosemiDarkLight: "#575f69",
        foorange: "#f96d00",
        foorangeLight: "#fc852b",
        foorangeFullLight: "#ffc89f",
        foorangeDark: "#c15400",
        folight: "#f2f2f2",
        fosemiLight: "#e4e4e4",
      },
    },
  },
  plugins: [],
};
export default config;
