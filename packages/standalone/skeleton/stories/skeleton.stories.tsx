import type { StoryObj } from '@storybook/react';

import { Skeleton } from '../src';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    controls: {},
    docs: {
      description: {
        component:
          'A simple unstyled component that displays a skeleton (a loading state). You can define the style of the skeleton using the `shadowClassName` prop.\n\n[Npm](https://www.npmjs.com/package/@blur-ui/skeleton) | [GitHub](https://github.com/mikhailmogilnikov/blur/tree/master/packages/standalone/skeleton)',
      },
    },
  },
  argTypes: {
    shadowClassName: { table: { disable: true } },
    className: { table: { disable: true } },
    animationDuration: {
      description: 'The animation duration for the skeleton.',
    },
  },
  args: {},
};

export const Default: StoryObj<typeof Skeleton> = {
  args: {
    className: 'w-40 h-10 bg-neutral-100 dark:bg-neutral-900 rounded-lg',
    shadowClassName: 'bg-neutral-300 dark:bg-neutral-800',
    animationDuration: 1,
  },
};

export const CustomAnimationDuration: StoryObj<typeof Skeleton> = {
  args: {
    className: 'w-40 h-10 bg-neutral-100 dark:bg-neutral-900 rounded-lg',
    shadowClassName: 'bg-neutral-300 dark:bg-neutral-800',
    animationDuration: 0.5,
  },
};

export const CustomShadowColor: StoryObj<typeof Skeleton> = {
  args: {
    className: 'w-40 h-10 bg-neutral-100 dark:bg-neutral-900 rounded-lg',
    shadowClassName: 'bg-rose-300 dark:bg-rose-800',
  },
};

export const CustomColors: StoryObj<typeof Skeleton> = {
  args: {
    className: 'w-40 h-10 bg-emerald-200 dark:bg-emerald-900 rounded-lg',
    shadowClassName: 'bg-emerald-400 dark:bg-emerald-700',
  },
};
