export const getCssValue = (variable: string, origin?: HTMLElement) => {
  const root = origin || document?.documentElement;

  return getComputedStyle(root).getPropertyValue(variable);
};
