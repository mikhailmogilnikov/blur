import { readableColor } from 'color2k';

import { ThemeColorObject, ThemeColorScheme } from './types';

const PALETTE_VARIABLES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const getColorLightness = (variable: number, scheme: ThemeColorScheme) => {
  const normalizedVariable = variable / 10;

  if (scheme === 'light') {
    return 100 - normalizedVariable;
  }

  return normalizedVariable;
};

interface ColorPalette {
  colorKey: string;
  colorValue: string;
  prefix: string;
  scheme: ThemeColorScheme;
}

const generateColorPalette = ({ colorKey, colorValue, prefix, scheme }: ColorPalette) =>
  PALETTE_VARIABLES.reduce((acc, variable) => {
    const lightness = getColorLightness(variable, scheme);

    return {
      ...acc,
      [`--${prefix}-color-${colorKey}-${variable}`]: `hsl(from ${colorValue} h s ${lightness}%)`,
    };
  }, {});

export const generateColorVariablesFromString = (
  colorKey: string,
  colorValue: string,
  prefix: string,
  scheme: ThemeColorScheme,
) => {
  return {
    [`--${prefix}-color-${colorKey}`]: colorValue,
    [`--${prefix}-color-${colorKey}-foreground`]: readableColor(colorValue),
    ...generateColorPalette({ colorKey, colorValue, prefix, scheme }),
  };
};

interface ColorVariablesFromObject {
  colorKey: string;
  colorObject: ThemeColorObject;
  prefix: string;
  scheme: ThemeColorScheme;
}

export const generateColorVariablesFromObject = ({
  colorKey,
  colorObject,
  prefix,
  scheme,
}: ColorVariablesFromObject) => {
  const {
    generatePalette = true,
    color: defaultColor,
    foreground: foregroundColor = readableColor(defaultColor),
    ...paletteColors
  } = colorObject;

  const generatedPaletteColors = Object.entries(paletteColors).map(([key, value]) => ({
    [`--${prefix}-color-${colorKey}-${key}`]: value,
  }));

  return {
    [`--${prefix}-color-${colorKey}`]: defaultColor,
    [`--${prefix}-color-${colorKey}-foreground`]: foregroundColor,

    ...(generatePalette
      ? generateColorPalette({ colorKey, colorValue: defaultColor, prefix, scheme })
      : {}),

    ...generatedPaletteColors[0],
  };
};
