import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "#27272A",
        card: "#18181B",
        background: "#09090B",
        accent: { DEFAULT: "#FF6600", green: "#10B981", muted: "#71717A" },
      },
      borderRadius: { xl: "10px", lg: "6px" },
      fontFamily: { mono: ["JetBrains Mono","monospace"] },
    },
  },
  plugins: [],
};
export default config;
