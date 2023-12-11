import type { Config } from 'tailwindcss';
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raj: ["Rajdhani"],
      },
      colors: {
        "krg-bg-gray": "#4C4C4C",
        "krg-bg-slate": "#000020",
        "krg-link-orange": "#ff9900",
        "krg-link-active": "#0000ff",
      },
    },
  },
  plugins: [],
};
export default config;
