import { Config } from 'tailwindcss';

import { THEME_PREFIX, Variables } from './theme-generator';
import { PluginOptions } from './plugin';

const extendColorTheme = (themesVariables: Variables) => {
  const colorThemesVariables = Object.entries(themesVariables).reduce((acc, [themeName]) => {
    const colorPrefix = `--${THEME_PREFIX}-color-`;

    if (themeName.includes(colorPrefix)) {
      const colorName = themeName.replace(colorPrefix, '');

      return { ...acc, [colorName]: `var(${themeName})` };
    }

    return acc;
  }, {});

  return colorThemesVariables;
};

export const extendTheme = (themesVariables: Record<string, Variables>, options: Required<PluginOptions>): Config['theme'] => {
  const { removeTailwindColors } = options;

  const mergedVariables: Variables = Object.values(themesVariables).reduce((acc, variables) => {
    return { ...acc, ...variables };
  }, {});

  return {
    colors: removeTailwindColors ? extendColorTheme(mergedVariables) : undefined,
    extend: {
      colors: !removeTailwindColors ? extendColorTheme(mergedVariables) : undefined,
    },
  };
};
