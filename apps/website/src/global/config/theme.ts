import { ThemeConfig } from "@blur-ui/tailwind-themes";

export const APP_THEMES = {
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
        link: "hsl(216, 100%, 64%)",
        default: "hsl(0, 0%, 100%)",
        primary: "hsl(261, 91%, 76%)",
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
        primary: "hsl(256, 54%, 87%)",
      },
    },
  },
} as const satisfies ThemeConfig;
