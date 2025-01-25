import plugin from 'tailwindcss/plugin';

import { ThemeConfig } from './types';
import { generateThemesVariables } from './theme-generator';

export const tailwindThemePlugin = (config: ThemeConfig): ReturnType<typeof plugin> => {
  return plugin(
    ({ addUtilities }) => {
      addUtilities(generateThemesVariables(config));
    },
    {
      theme: {
        extend: {
          colors: {
            background: 'var(--theme-color-background)',
            foreground: 'var(--theme-color-foreground)',
            default: 'var(--theme-color-default)',
            primary: 'var(--theme-color-primary)',
          },
        },
      },
    },
  );
};
