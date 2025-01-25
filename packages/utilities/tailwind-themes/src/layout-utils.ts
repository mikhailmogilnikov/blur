import { Variables } from './theme-generator';
import { ThemeLayout } from './types';

export const generateLayoutVariables = (layout: Partial<ThemeLayout>, prefix: string) => {
  const { spacing, borderRadiuses } = layout;

  let variables: Variables = {};

  if (spacing) {
    variables = {
      ...variables,
      [`--spacing`]: `${spacing}rem`,
    };
  }

  if (borderRadiuses) {
    variables = {
      ...variables,
      ...Object.entries(borderRadiuses).reduce((acc, [key, value]) => {
        return {
          [`--${prefix}-radius-${key}`]: value,
        };
      }, {}),
    };
  }

  return variables;
};
