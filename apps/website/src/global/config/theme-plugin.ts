import { PluginOptions, tailwindThemePlugin } from "@blur-ui/tailwind-themes";

import { APP_THEMES } from "./theme";

const pluginOptions: PluginOptions = {
  removeTailwindColors: true,
  removeDefaultColors: false,
};

export default tailwindThemePlugin(APP_THEMES, pluginOptions);
