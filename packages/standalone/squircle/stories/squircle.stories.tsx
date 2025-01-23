import type { Meta, StoryObj } from '@storybook/react';

import { Squircle } from '@blur-ui/squircle';

export default {
  title: 'Components/Squircle',
  component: Squircle,
  parameters: {
    layout: 'centered',
    controls: {},
    docs: {
      description: {
        component:
          'The `Squircle` component is designed to render a squircle in React applications. Includes much modern features like automatic resizing with optional throttling delay, global smoothing value from CSS variable, and optional wrapper. Check [README](https://github.com/mikhailmogilnikov/blur/tree/master/packages/standalone/squircle) for more details.\n\n<b>Try to set smoothing to 0 to see the difference between squircle and default border-radius.</b>\n\n[Npm](https://www.npmjs.com/package/@blur-ui/squircle) | [Github](https://github.com/mikhailmogilnikov/blur/tree/master/packages/standalone/squircle)',
      },
    },
  },
  argTypes: {
    radius: {
      name: 'radius',
      description: 'The border radius for the squircle.',
      type: 'number',
      control: {
        type: 'range',
        min: 0,
        max: 60,
        step: 1,
      },
    },
    smoothing: {
      name: 'smoothing',
      description: 'The smoothing of the squircle. Can be a number between 0 and 1.',
      type: 'number',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    disableSmoothing: {
      name: 'disableSmoothing',
      description: 'If true, the component will render without any corner smoothing.',
      type: 'boolean',
      control: 'boolean',
    },
    wrapperClassName: {
      name: 'wrapperClassName',
      description: 'The class name for the wrapper element.',
      type: 'string',
      control: 'text',
    },
    asChild: {
      name: 'asChild',
      description: 'If true, the component will pass the children as a slot.',
      type: 'boolean',
      control: 'boolean',
    },
    resizeDelay: {
      name: 'resizeDelay',
      description: 'The delay in milliseconds for the component to resize.',
      type: 'number',
      control: {
        type: 'range',
        min: 0,
        max: 1000,
        step: 10,
      },
    },
    disableResize: {
      name: 'disableResize',
      description: 'If true, the component will not resize.',
      type: 'boolean',
      control: 'boolean',
    },
    className: {
      name: 'className',
      description: 'The class name for the squircle. Pass border-radius to start using squircle.',
      type: 'string',
      control: 'text',
    },
  },
  args: {},
} as Meta<typeof Squircle>;

export const Default: StoryObj<typeof Squircle> = {
  argTypes: {},
  args: {
    smoothing: 1,
    radius: 30,
    resizeDelay: 100,
    disableSmoothing: false,
    disableResize: false,
    asChild: false,
    className: 'w-36 h-36 bg-blue-400 rounded-2xl',
  },
};

export const NoSmoothing: StoryObj<typeof Squircle> = {
  args: {
    smoothing: 0,
    disableSmoothing: true,
    className: 'w-30 h-30 bg-fuchsia-400 rounded-2xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `disableSmoothing` property turns off corner smoothing, resulting in a rectangular shape. This effect also applies if `smoothing` is set to 0.',
      },
    },
  },
};

export const WithWrapperClass: StoryObj<typeof Squircle> = {
  args: {
    className: 'w-30 h-30 bg-purple-400 rounded-2xl',
    wrapperClassName:
      'outline-2 outline-offset-4 outline-purple-700 shadow-xl shadow-purple-700/40 rounded-2xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Adding a wrapper class via `wrapperClassName` allows for additional styling, such as outlines and shadows.',
      },
    },
  },
};

export const AsChildExample: StoryObj<typeof Squircle> = {
  args: {
    smoothing: 0.6,
    asChild: true,
    className: 'w-40 h-40 bg-rose-500 rounded-2xl flex items-center justify-center',
  },
  render: (args) => (
    <Squircle {...args}>
      <div className='text-white'>Inside Squircle</div>
    </Squircle>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using `asChild` allows rendering child elements within the `Squircle` component.',
      },
    },
  },
};

export const WithDifferentBorderRadius: StoryObj<typeof Squircle> = {
  args: {
    smoothing: 1,
    className: 'w-30 h-30 bg-fuchsia-400 rounded-tl-3xl rounded-br-2xl rounded-tr-xl rounded-bl-sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Using different border radius values for each corner.',
      },
    },
  },
};
