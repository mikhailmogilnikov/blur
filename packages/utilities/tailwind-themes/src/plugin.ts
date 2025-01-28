import plugin from 'tailwindcss/plugin';

import { ThemeConfig } from './types';
import { generateThemesVariables } from './theme-generator';
import { extendTheme } from './extend-theme';

export type PluginOptions = {
  /**
   * Remove default tailwind colors (like `slate-500`, `red-500`, etc.) from the color palette.
   * @default false
   */
  removeTailwindColors?: boolean;
  /**
   * Remove all default colors (default, foreground, background, etc.) from the color palette.
   * @default false
   */
  removeDefaultColors?: boolean;
};

export const tailwindThemePlugin = (config: ThemeConfig, options?: PluginOptions): ReturnType<typeof plugin> => {
  const pluginOptions = {
    removeTailwindColors: options?.removeTailwindColors ?? false,
    removeDefaultColors: options?.removeDefaultColors ?? false,
  };

  const themesVariables = generateThemesVariables(config);

  return plugin(
    ({ addUtilities }) => {
      addUtilities(themesVariables);
    },
    {
      theme: extendTheme(themesVariables, pluginOptions),
    },
  );
};
