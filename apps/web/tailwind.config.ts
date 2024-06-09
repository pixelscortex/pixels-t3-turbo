import type { Config } from "tailwindcss";
import baseConfig from "@repo/tailwind-config/web";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [...baseConfig.content, "../../packages/ui/**/*.{ts,tsx}"],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      colors: {
        brand: {
          primary: "hsl(var(--brand-primary))",
          secondary: "hsl(var(--brand-secondary))",
        },
      },
      height: {
        nav: "var(--navbar-height)",
        mnav: "calc(100vh - var(--navbar-height))",
      },
    },
  },
} satisfies Config;
