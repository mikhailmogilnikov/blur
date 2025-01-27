import { APP_THEMES } from "@/src/global/config/theme";

export const updateThemeColor = (resolvedTheme: string) => {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  const lightBackground = APP_THEMES.themes.light.colors.background.color;
  const darkBackground = APP_THEMES.themes.dark.colors.background.color;

  if (themeColorMeta) {
    if (resolvedTheme === "light") {
      themeColorMeta.setAttribute("content", lightBackground);
    }
    if (resolvedTheme === "dark") {
      themeColorMeta.setAttribute("content", darkBackground);
    }
  }
};
