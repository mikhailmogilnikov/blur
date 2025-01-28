import { generateColorVariablesFromObject, generateColorVariablesFromString } from './color-utils';
import { generateLayoutVariables } from './layout-utils';
import { Theme, ThemeColor, ThemeColorObject, ThemeColorScheme, ThemeConfig } from './types';

export const THEME_PREFIX = 'theme';

export type Variables = Record<string, string>;

const generateColorVariables = (colors: Partial<Record<string, ThemeColor>>, scheme: ThemeColorScheme, prefix: string) => {
  const variablesArray = Object.entries(colors).map(([colorKey, colorValue]) => {
    if (typeof colorValue === 'string') {
      return generateColorVariablesFromString(colorKey, colorValue, prefix, scheme);
    }

    if (typeof colorValue === 'object') {
      const colorObject = colorValue as ThemeColorObject;

      return generateColorVariablesFromObject({ colorKey, colorObject, prefix, scheme });
    }

    return {};
  });

  return variablesArray.reduce((acc, variable) => {
    return { ...acc, ...variable };
  }, {});
};

const createThemeVariables = (theme: Theme, prefix: string) => {
  const { colors, extendColors, layout, scheme } = theme;

  let variables: Variables = {};

  if (colors) {
    const colorsVariables = generateColorVariables(colors, scheme, prefix);

    variables = { ...colorsVariables };
  }

  if (extendColors) {
    const extendColorsVariables = generateColorVariables(extendColors, scheme, prefix);

    variables = { ...variables, ...extendColorsVariables };
  }

  if (layout) {
    const layoutVariables = generateLayoutVariables(layout);

    variables = { ...variables, ...layoutVariables };
  }

  return variables;
};

export const generateThemesVariables = (config: ThemeConfig) => {
  const prefix = THEME_PREFIX;
  const defaultTheme = config.default;
  const themesList = config.themes;

  const themeVariables: Record<string, Variables> = {};

  const defaultVariables = defaultTheme ? createThemeVariables(defaultTheme, prefix) : {};

  Object.entries(themesList).forEach(([themeName, theme]) => {
    const cssSelector = `.${themeName}`;

    const variables = createThemeVariables(theme, prefix);

    themeVariables[cssSelector] = { ...defaultVariables, ...variables };
  });

  return themeVariables;
};
