import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '../src';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    controls: {},
    docs: {
      description: {
        component:
          'Rich-customizable iOS-styled spinner with zero dependencies.\n\n[Npm](https://www.npmjs.com/package/@blur-ui/spinner) | [GitHub](https://github.com/mikhailmogilnikov/blur/tree/master/packages/standalone/spinner)',
      },
    },
  },
  argTypes: {
    segments: {
      description: 'The number of segments in the spinner.',
      control: {
        type: 'range',
        min: 8,
        max: 12,
        step: 1,
      },
    },
    animationDuration: {
      description: 'The animation duration for the spinner.',
      control: {
        type: 'range',
        min: 0.2,
        max: 5,
        step: 0.1,
      },
    },
    size: {
      description:
        'The size of the spinner (e.g. "1rem", "16px").\n\nIf not provided, you can define width and height in the classNames.',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    size: '1.5rem',
    segmentClassName: 'bg-black dark:bg-white',
  },
} as Meta<typeof Spinner>;

export const Default: StoryObj<typeof Spinner> = {
  argTypes: {
    className: { table: { disable: true } },
    segmentClassName: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  args: {
    animationDuration: 1.2,
    segments: 10,
  },
};

export const CustomSize: StoryObj<typeof Spinner> = {
  render: (args) => (
    <div className='flex items-center justify-center gap-4'>
      <Spinner {...args} size='0.5rem' />
      <Spinner {...args} size='1rem' />
      <Spinner {...args} size='1.5rem' />
      <Spinner {...args} size='2rem' />
      <Spinner {...args} size='2.5rem' />
    </div>
  ),
};

export const CustomSegmentsCount: StoryObj<typeof Spinner> = {
  render: (args) => (
    <div className='flex items-center justify-center gap-4'>
      <Spinner {...args} segments={8} />
      <Spinner {...args} segments={9} />
      <Spinner {...args} segments={10} />
      <Spinner {...args} segments={11} />
      <Spinner {...args} segments={12} />
    </div>
  ),
};

export const CustomAnimationDuration: StoryObj<typeof Spinner> = {
  render: (args) => (
    <div className='flex items-center justify-center gap-4'>
      <Spinner {...args} animationDuration={0.3} />
      <Spinner {...args} animationDuration={0.7} />
      <Spinner {...args} animationDuration={1} />
      <Spinner {...args} animationDuration={1.3} />
      <Spinner {...args} animationDuration={1.6} />
    </div>
  ),
};

export const CustomColors: StoryObj<typeof Spinner> = {
  render: (args) => (
    <div className='flex items-center justify-center gap-4'>
      <Spinner {...args} segmentClassName='bg-red-500' />
      <Spinner {...args} segmentClassName='bg-green-500' />
      <Spinner {...args} segmentClassName='bg-blue-500' />
      <Spinner {...args} segmentClassName='bg-yellow-500' />
      <Spinner {...args} segmentClassName='bg-purple-500' />
    </div>
  ),
  args: {},
};
