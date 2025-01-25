import plugin from "tailwindcss/plugin";

const themePlugin = plugin(({ addUtilities }) => {
  addUtilities({
    ".light": {
      "--theme-color-background": "#fff",
      "--theme-color-foreground": "#000",
      "--theme-color-default": "#000",
      "--theme-spacing": "0.25rem",
    },
    ".dark": {
      "--theme-color-background": "#000",
      "--theme-color-foreground": "#fff",
      "--theme-color-default": "#fff",
      "--theme-spacing": "0.25rem",
    },
  });
});

export default themePlugin;
