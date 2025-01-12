import type { Meta } from '@storybook/react';

import { Slider } from '@blur/slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    controls: {},
  },
  argTypes: {
    value: {
      name: 'value',
      description: 'The value of the slider. Can be a number between 0 and 1.',
      type: 'number',
      control: {
        accept: 'number',
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
      table: {
        category: 'Props',
        type: { value: 'number' },
        defaultValue: { value: 0 },
      },
    },
    orientation: {
      name: 'orientation',
      description: 'The orientation of the slider.',
      type: 'string',
      control: 'select',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
      table: {
        category: 'Props',
      },
    },
    dir: {
      name: 'dir',
      description: 'The direction of the slider.',
      type: 'string',
      control: 'select',
      options: ['ltr', 'rtl'],
      defaultValue: 'ltr',
      table: {
        category: 'Props',
      },
    },
    stretchCoefficient: {
      name: 'Stretch coefficient',
      description: 'The coefficient of the slider stretch.',
      type: 'number',
      control: 'number',
      defaultValue: 300,
      table: {
        category: 'Props',
      },
    },
    arrowStep: {
      name: 'Arrow step',
      description: 'The step size for changing the slider value when using arrow keys.',
      type: 'number',
      control: 'number',
      defaultValue: 0.1,
      table: {
        category: 'Props',
      },
    },
    disableStretch: {
      name: 'Disable stretch',
      description: 'If set to true, disables the stretch of the slider.',
      type: 'boolean',
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props',
      },
    },
    isDisabled: {
      name: 'isDisabled',
      description: 'If set to true, disables the slider.',
      type: 'boolean',
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props',
      },
    },
  },
  args: {
    value: 0.5,
    orientation: 'horizontal',
    dir: 'ltr',
    stretchCoefficient: 300,
    isDisabled: false,
    arrowStep: 0.1,
    disableStretch: false,
  },
} as Meta<typeof Slider>;

const sliderClassNames = {
  horizontal: {
    base: 'w-70 h-3 bg-neutral-200 dark:bg-neutral-800 rounded-xl outline-offset-2 outline-white/50 focus-visible:outline',
    track: 'bg-neutral-400 dark:bg-neutral-100',
  },
  vertical: {
    base: 'w-16 h-46 bg-neutral-200 dark:bg-neutral-800 rounded-2xl outline-offset-2 outline-white/50 focus-visible:outline',
    track: 'bg-neutral-400 dark:bg-neutral-100',
  },
};

export const Default = {
  argTypes: {
    animate: { table: { disable: true } },
    classNames: { table: { disable: true } },
    whileTap: { table: { disable: true } },
  },
  args: {
    animate: { opacity: 0.7 },
    classNames: sliderClassNames.horizontal,
    value: 0.5,
    whileTap: { scaleY: 1.2, opacity: 1 },
  },
};

export const Vertical = {
  args: {
    classNames: sliderClassNames.vertical,
    orientation: 'vertical',
    value: 0.2,
  },
};

export const WithoutTapAnimation = {
  args: {
    classNames: sliderClassNames.horizontal,
    value: 0.5,
  },
};

export const WithoutStretch = {
  args: {
    disableStretch: true,
    value: 0.5,
    orientation: 'vertical',
    classNames: sliderClassNames.vertical,
  },
};

export const Disabled = {
  args: {
    classNames: {
      base: [
        sliderClassNames.horizontal.base,
        'data-[disabled]:opacity-50 data-[disabled]:cursor-default',
      ].join(' '),
      track: sliderClassNames.horizontal.track,
    },
    isDisabled: true,
    value: 0.5,
  },
};

export const Rtl = {
  args: {
    dir: 'rtl',
    value: 0.5,
    classNames: sliderClassNames.horizontal,
  },
};
