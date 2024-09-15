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
        background: "var(--background)",
        foreground: "var(--foreground)",
        heading: '#072635',
        systolic : '#E66FD2',
        diastolic: '#8C6FE6',
        respiratory: '#E0F3FA',
        temperature: '#FFE6E9',
        heartRate: '#FFE6F1',
        bgChart: '#F4F0FE',
        activeUser: '#D8FCF7',
        button: '#01F0D0'
      },
    },
  },
  plugins: [],
};
export default config;
