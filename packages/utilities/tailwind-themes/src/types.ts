export type ThemeColorScheme = 'light' | 'dark';

export type ThemeColorOptions = {
  generatePalette?: boolean;
};

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

export type ThemeLayout = {
  spacing: number;
  borderRadius: number;
};

export type Theme = {
  useDefaultPalette?: boolean;
  scheme: ThemeColorScheme;
  colors: ThemeColors;
  extendColors?: ThemeColorExtend;
  layout?: ThemeLayout;
};

type ThemeDefault = {
  layout?: ThemeLayout;
  colors?: ThemeColors;
};

export type ThemeConfig = { themes: Record<string, Theme>; default?: ThemeDefault };
