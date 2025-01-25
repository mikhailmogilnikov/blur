import { ThemeConfig } from "../../../../../packages/utilities/tailwind-themes/src";

export const APP_THEMES: ThemeConfig = {
  default: {
    layout: {
      spacing: 0.25,
      borderRadius: 0.25,
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
        foreground: "#fff",
      },
    },
  },
};
