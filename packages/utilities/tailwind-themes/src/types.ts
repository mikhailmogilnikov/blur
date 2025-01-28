import { ThemeLayout } from './types-layout';

export type ThemeColorScheme = 'light' | 'dark';

export type ThemeColorPalette = Partial<{
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}>;

export type ThemeColorObject = {
  color: string;
  foreground?: string;
  generatePalette?: boolean;
} & ThemeColorPalette;

export type ThemeColor = ThemeColorObject | string;

export enum ThemeColorsEnum {
  FOREGROUND = 'foreground',
  BACKGROUND = 'background',
  DIVIDER = 'divider',
  FOCUS = 'focus',
  LINK = 'link',

  DEFAULT = 'default',
  CONTENT1 = 'content1',
  CONTENT2 = 'content2',
  CONTENT3 = 'content3',
  CONTENT4 = 'content4',

  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',

  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
}

export type ThemeColorExtend = Partial<Record<string, ThemeColor>>;

export type ThemeColors = Partial<Record<ThemeColorsEnum, ThemeColor>>;

export type Theme = {
  /**
   * Uses to define how should generate the theme color palette
   * @example 'light'
   * 50 - lightest shade in the color palette
   * 950 - darkest shade
   * @example 'dark'
   * 50 - darkest shade
   * 950 - lightest shade
   */
  scheme: ThemeColorScheme;
  /**
   * Defines the theme colors
   * @example
   * ```ts
   * {
   *  background: '#fff',
   *  foreground: {
   *    color: '#000',
   *    generatePalette: false, // if false, will not generate the palette from 50 to 950 for the color
   *  },
   * }
   * ```
   *
   * Available colors:
   * background, foreground, default, primary, secondary, tertiary, success, warning, danger, info, content1, content2, content3, content4, divider, focus, link
   */
  colors?: ThemeColors;
  /**
   * Uses to define your own custom colors in palette
   * @example {
   *  card: '#444',
   * }
   */
  extendColors?: ThemeColorExtend;
  /**
   * Uses to define tailwind layout properties
   */
  layout?: ThemeLayout;
};

export type ThemeConfig = {
  default?: Theme;
  themes: Record<string, Theme>;
};
