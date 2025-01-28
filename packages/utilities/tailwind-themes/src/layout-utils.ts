import { Variables } from './theme-generator';
import { ThemeLayout } from './types-layout';

const generateVariables = (key: Record<string, string | number>, prefix: string) => {
  return {
    ...Object.entries(key).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [`--${prefix}-${key}`]: value,
      };
    }, {}),
  };
};

export const generateLayoutVariables = (layout: ThemeLayout) => {
  const { spacing, transitionDuration, transitionTimingFunction, text, ...rest } = layout;

  let variables: Variables = {};

  if (spacing) {
    variables['--spacing'] = spacing;
  }

  if (transitionDuration) {
    variables['--transition-duration'] = transitionDuration;
  }

  if (transitionTimingFunction) {
    variables['--transition-timing-function'] = transitionTimingFunction;
  }

  variables = {
    ...variables,
    ...Object.entries(rest).reduce((acc, [key, value]) => {
      return {
        ...acc,
        ...generateVariables(value, key),
      };
    }, {}),
  };

  return variables;
};
