import { ThemeConfig } from "../../../../../packages/utilities/tailwind-themes/src";

export const APP_THEMES: ThemeConfig = {
  default: {
    scheme: "light",
    layout: {
      spacing: 0.25,
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
        background: "#fff",
        foreground: {
          color: "#213",
        },
      },
    },
    dark: {
      scheme: "dark",
      colors: {
        background: "#000",
        foreground: {
          color: "#fff",
          generatePalette: false,
        },
      },
    },
  },
};
