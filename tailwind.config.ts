import type { Config } from 'tailwindcss';
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raj: ["Rajdhani", "sans-serif"],
        mplus: ["m-plus-2c", "sans-serif"],
        area_ext: ["area-extended", "sans-serif"],
        area: ["area-normal", "sans-serif"],
      },
      colors: {
        "krg-bg-gray": "#4C4C4C",
        "krg-bg-slate": "#000020",
        "krg-link-orange": "#ff9900",
        "krg-link-active": "#0000ff",
      },
      backgroundImage: {
        "stickies-bg": "url('/stickies-on-the-desktop.png')",
      },
    },
  },
  plugins: [],
};
export default config;
