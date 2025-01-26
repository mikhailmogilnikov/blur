import plugin from 'tailwindcss/plugin';

import { ThemeConfig } from './types';
import { generateThemesVariables } from './theme-generator';
import { extendTheme } from './extend-theme';

export const tailwindThemePlugin = (config: ThemeConfig): ReturnType<typeof plugin> => {
  const themesVariables = generateThemesVariables(config);

  return plugin(
    ({ addUtilities }) => {
      addUtilities(themesVariables);
    },
    {
      theme: extendTheme(themesVariables),
    },
  );
};
