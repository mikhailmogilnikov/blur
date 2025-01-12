import './style.css';

import type { Preview } from '@storybook/react';

import { themes } from '@storybook/theming';

const decorators: Preview['decorators'] = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];

const commonTheme = {
  brandTitle: 'Blur',
  brandTarget: '_self',
};

const parameters: Preview['parameters'] = {
  options: {
    storySort: {
      method: 'alphabetical',
      // order: ['Foundations', 'Components'],
    },
    layout: 'centered',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    default: 'dark',
    stylePreview: true,
    darkClass: 'dark',
    lightClass: 'light',
    classTarget: 'html',
    dark: { ...themes.dark, ...commonTheme },
    light: { ...themes.normal, ...commonTheme },
  },
};

const preview: Preview = {
  decorators,
  parameters,
  tags: ['autodocs'],
};

export default preview;
