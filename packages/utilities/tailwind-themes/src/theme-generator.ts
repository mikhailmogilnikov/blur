import { ThemeConfig } from './types';

const THEME_PREFIX = 'theme';

type Variables = Record<string, string>;

const generateColorVariables = (colors: Record<string, string>) => {
  return Object.entries(colors)
    .map(([key, value]) => {
      return `--${key}: ${value};`;
    })
    .join('\n');
};

export const generateThemesVariables = (config: ThemeConfig) => {
  const prefix = THEME_PREFIX;
  const themesList = config.themes;

  const themeVariables: Record<string, Variables> = {};

  Object.entries(themesList).map(([themeName, theme]) => {
    const cssSelector = `.${themeName}`;
    const variables: Variables = {};

    const { colors, extendColors, layout, scheme, useDefaultPalette = true } = theme;

    Object.entries(colors).forEach(([colorKey, colorValue]) => {
      console.log(colorKey, colorValue);
    });

    themeVariables[cssSelector] = variables;
  });

  return themeVariables;
};
