import type { Meta, StoryObj } from '@storybook/react';

import { GradientColors, MeshGradient } from '../src';

export default {
  title: 'Components/MeshGradient',
  component: MeshGradient,
  parameters: {
    layout: 'centered',
    controls: {},
    docs: {
      description: {
        component:
          'Uses to create a mesh gradient effect in React.\n\nIncludes build-in controls for animation duration, seed, opacity, different themes, pause, darken mode and in viewport detection. Fully customizable – you can pass your own gradient palette.\n\n<b>Try all available themes, changing the theme prop below.</b>\n\n[Npm](https://www.npmjs.com/package/@blur-ui/mesh-gradient) | [Github](https://github.com/mikhailmogilnikov/blur/tree/master/packages/standalone/mesh-gradient)',
      },
    },
  },
  argTypes: {
    theme: {
      name: 'Theme',
      description: 'The theme of the mesh gradient.',
      control: 'select',
      options: Object.keys(GradientColors),
    },
    darken: {
      name: 'Darken',
      description: 'Whether to darken the mesh gradient.',
      control: 'boolean',
      defaultValue: false,
    },
    isPaused: {
      name: 'Is paused',
      description: 'Whether the mesh gradient is paused.',
      control: 'boolean',
      defaultValue: false,
    },
    animationDuration: {
      name: 'Animation duration',
      description: 'The duration of the animation.',
      control: 'number',
      defaultValue: 150,
    },
    seed: {
      name: 'Seed',
      description: 'The seed of the mesh gradient.',
      control: 'number',
      defaultValue: 123,
    },
    opacity: {
      name: 'Opacity',
      description: 'The opacity of the mesh gradient.',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
      defaultValue: 1,
    },
  },
  args: {},
} as Meta<typeof MeshGradient>;

export const Default: StoryObj<typeof MeshGradient> = {
  argTypes: {
    className: { table: { disable: true } },
  },
  args: {
    theme: 'twilightPurple',
    seed: 5,
    animationDuration: 150,
    opacity: 1,
    className: 'w-70 sm:w-96 xl:w-200 h-70 xl:h-130 rounded-xl',
    isPaused: false,
    darken: false,
  },
};
