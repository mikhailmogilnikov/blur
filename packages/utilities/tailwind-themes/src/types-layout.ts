export enum ThemeLayoutSizesEnum {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  '3XL' = '3xl',
  '4XL' = '4xl',
}

export type ThemeLayout = {
  spacing: string;
  borderRadiuses: Partial<Record<ThemeLayoutSizesEnum, string>>;
};
