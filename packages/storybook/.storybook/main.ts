import type { StorybookConfig } from '@storybook/react-vite';

import { dirname, join } from 'path';

import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: ['./welcome.mdx', '../../standalone/**/stories/**/*.stories.@(js|jsx|ts|tsx)'],

  // staticDirs: ['../public'],

  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('storybook-dark-mode'),
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  core: {
    disableTelemetry: true,
  },

  typescript: {
    reactDocgen: false,
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

export default config;
