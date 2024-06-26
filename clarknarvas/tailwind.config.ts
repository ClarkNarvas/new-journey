import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cnprimary: '#DE3C4B',
        cnsecondary: '#D7C0D0',
        cntertiary: '#EFF0D1',
        cnbackground: '#F1F1F1',
        cnforeground: '#FFFFFF',
      },
    },

  },
  plugins: [],
};
export default config;
