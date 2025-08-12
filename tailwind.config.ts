import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { brand: { DEFAULT: "#06213C" }}, boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.07)" }}},
  plugins: []
};
export default config;
