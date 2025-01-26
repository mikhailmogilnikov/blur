import { ThemeConfig } from "../../../../../packages/utilities/tailwind-themes/src";

export const APP_THEMES: ThemeConfig = {
  default: {
    scheme: "light",
    layout: {
      spacing: "0.25rem",
      borderRadiuses: {
        md: "1rem",
      },
    },
    colors: {
      primary: "#444",
    },
  },
  themes: {
    light: {
      scheme: "light",
      colors: {
        background: {
          color: "hsl(0, 0%, 95%)",
          generatePalette: false,
        },
        foreground: "hsl(0, 0%, 5%)",
        default: "hsl(0, 0%, 100%)",
      },
    },
    dark: {
      scheme: "dark",
      colors: {
        background: {
          color: "hsl(0, 0%, 0%)",
          generatePalette: false,
        },
        foreground: "hsl(0, 0%, 95%)",
        link: "hsl(216, 97%, 73%)",
        default: "hsl(0, 0%, 10%)",
      },
    },
  },
};
