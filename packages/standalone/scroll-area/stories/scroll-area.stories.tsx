import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from '../src';

export default {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
    controls: {},
    docs: {
      description: {
        component:
          'Augments native scroll functionality for custom, cross-browser styling. Optionally applies shadows when content overflows on scroll.\n\n[Npm](https://www.npmjs.com/package/@blur-ui/scroll-area) | [Github](https://github.com/mikhailmogilnikov/blur/tree/master/packages/standalone/scroll-area)',
      },
    },
  },
  argTypes: {
    orientation: {
      description: 'The orientation of the scroll area.',
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
    },
    type: {
      description:
        'Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.',
      control: 'select',
      options: ['always', 'auto', 'hover', 'scroll'],
    },
    disableShadow: {
      description: 'Whether to disable the scroll shadow.',
      control: 'boolean',
    },
    shadowSize: {
      description: 'The scroll shadow size in pixels.',
      control: 'range',
      min: 0,
      max: 100,
      step: 1,
    },
    scrollHideDelay: {
      description: 'The delay in milliseconds before the scrollbar is hidden.',
      control: 'number',
      min: 0,
      max: 10000,
      step: 100,
    },
    dir: {
      description: 'The direction of the scroll area.',
      control: 'select',
      options: ['ltr', 'rtl'],
    },
  },
  args: {},
} as Meta<typeof ScrollArea>;

const scrollAreaClassnames = {
  root: 'w-60 h-60 text-black dark:text-white',
  scrollbar: 'p-[1px]',
  verticalScrollbar: 'w-2.5',
  horizontalScrollbar: 'h-2.5',
  thumb:
    'bg-neutral-800 dark:bg-neutral-100 rounded-full opacity-30 hover:opacity-40 transition-opacity',
};

export const Default: StoryObj<typeof ScrollArea> = {
  argTypes: {
    classNames: { table: { disable: true } },
    className: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  args: {
    classNames: scrollAreaClassnames,
    type: 'hover',
    orientation: 'vertical',
    shadowSize: 40,
    disableShadow: false,
    dir: 'ltr',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi duis officia cillum pariatur dolore enim consectetur voluptate sit tempor nisi pariatur et. Deserunt enim dolor consectetur veniam nisi enim cillum in ipsum consectetur nisi mollit cupidatat. Nulla consequat consequat velit est cillum nostrud fugiat aliqua aliqua consequat. Eu ad nostrud nostrud ad. Quis eiusmod officia proident voluptate ex consequat non. Deserunt non do quis ipsum veniam sit ipsum. Anim labore commodo incididunt laboris do sint voluptate tempor. Pariatur nostrud voluptate deserunt ad incididunt sit est irure qui nisi. Exercitation pariatur sint sint cillum cillum occaecat deserunt deserunt esse laborum.',
    scrollHideDelay: 600,
  },
};

export const Horizontal: StoryObj<typeof ScrollArea> = {
  args: {
    orientation: 'horizontal',
    children: (
      <div className='h-50 w-120'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi duis officia cillum pariatur
        dolore enim consectetur voluptate sit tempor nisi pariatur et. Deserunt enim dolor
        consectetur veniam nisi enim cillum in ipsum consectetur nisi mollit cupidatat. Nulla
        consequat consequat velit est cillum nostrud fugiat aliqua aliqua consequat. Eu ad nostrud
        nostrud ad. Quis eiusmod officia proident voluptate ex consequat non. Deserunt non do quis
        ipsum veniam sit ipsum. Anim labore commodo incididunt laboris do sint voluptate tempor.
        Pariatur nostrud voluptate deserunt ad incididunt sit est irure qui nisi. Exercitation
        pariatur sint sint cillum cillum occaecat deserunt deserunt esse laborum.
      </div>
    ),
    classNames: scrollAreaClassnames,
  },
};

export const OnColorBackground: StoryObj<typeof ScrollArea> = {
  args: {
    orientation: 'vertical',
    className: 'bg-gradient-to-b from-rose-500 to-purple-500 p-4 rounded-lg text-white',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi duis officia cillum pariatur dolore enim consectetur voluptate sit tempor nisi pariatur et. Deserunt enim dolor consectetur veniam nisi enim cillum in ipsum consectetur nisi mollit cupidatat. Nulla consequat consequat velit est cillum nostrud fugiat aliqua aliqua consequat. Eu ad nostrud nostrud ad. Quis eiusmod officia proident voluptate ex consequat non. Deserunt non do quis ipsum veniam sit ipsum. Anim labore commodo incididunt laboris do sint voluptate tempor. Pariatur nostrud voluptate deserunt ad incididunt sit est irure qui nisi. Exercitation pariatur sint sint cillum cillum occaecat deserunt deserunt esse laborum.',
    classNames: scrollAreaClassnames,
  },
};

export const WithoutShadow: StoryObj<typeof ScrollArea> = {
  args: {
    disableShadow: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi duis officia cillum pariatur dolore enim consectetur voluptate sit tempor nisi pariatur et. Deserunt enim dolor consectetur veniam nisi enim cillum in ipsum consectetur nisi mollit cupidatat. Nulla consequat consequat velit est cillum nostrud fugiat aliqua aliqua consequat. Eu ad nostrud nostrud ad. Quis eiusmod officia proident voluptate ex consequat non. Deserunt non do quis ipsum veniam sit ipsum. Anim labore commodo incididunt laboris do sint voluptate tempor. Pariatur nostrud voluptate deserunt ad incididunt sit est irure qui nisi. Exercitation pariatur sint sint cillum cillum occaecat deserunt deserunt esse laborum.',
    classNames: scrollAreaClassnames,
  },
};

export const BothScrollbars: StoryObj<typeof ScrollArea> = {
  parameters: {
    docs: {
      description: {
        story:
          'Note: shadows cannot be applied to both vertical and horizontal scrollbars at once.',
      },
    },
  },
  args: {
    orientation: 'both',
    type: 'always',
    children: (
      <div className='h-80 w-120'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi duis officia cillum pariatur
        dolore enim consectetur voluptate sit tempor nisi pariatur et. Deserunt enim dolor
        consectetur veniam nisi enim cillum in ipsum consectetur nisi mollit cupidatat. Nulla
        consequat consequat velit est cillum nostrud fugiat aliqua aliqua consequat. Eu ad nostrud
        nostrud ad. Quis eiusmod officia proident voluptate ex consequat non. Deserunt non do quis
        ipsum veniam sit ipsum. Anim labore commodo incididunt laboris do sint voluptate tempor.
        Pariatur nostrud voluptate deserunt ad incididunt sit est irure qui nisi. Exercitation
        pariatur sint sint cillum cillum occaecat deserunt deserunt esse laborum. Aliqua nulla
        cillum voluptate aliqua ullamco eiusmod incididunt commodo nostrud. Proident aliquip cillum
        occaecat eu quis tempor. Sint dolore consectetur incididunt irure labore aliqua consectetur.
        Aliquip ad non dolore tempor veniam qui. Reprehenderit veniam deserunt enim labore consequat
        laboris in anim aute fugiat ullamco.
      </div>
    ),
    classNames: scrollAreaClassnames,
  },
};

export const CustomScrollbar: StoryObj<typeof ScrollArea> = {
  args: {
    disableShadow: true,
    type: 'always',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi duis officia cillum pariatur dolore enim consectetur voluptate sit tempor nisi pariatur et. Deserunt enim dolor consectetur veniam nisi enim cillum in ipsum consectetur nisi mollit cupidatat. Nulla consequat consequat velit est cillum nostrud fugiat aliqua aliqua consequat. Eu ad nostrud nostrud ad. Quis eiusmod officia proident voluptate ex consequat non. Deserunt non do quis ipsum veniam sit ipsum. Anim labore commodo incididunt laboris do sint voluptate tempor. Pariatur nostrud voluptate deserunt ad incididunt sit est irure qui nisi. Exercitation pariatur sint sint cillum cillum occaecat deserunt deserunt esse laborum.',
    classNames: {
      ...scrollAreaClassnames,
      scrollbar: 'dark:bg-neutral-700 bg-neutral-300 p-0.5 w-3',
    },
  },
};

export const CustomShadowWidth: StoryObj<typeof ScrollArea> = {
  args: {
    classNames: scrollAreaClassnames,
    shadowSize: 100,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi duis officia cillum pariatur dolore enim consectetur voluptate sit tempor nisi pariatur et. Deserunt enim dolor consectetur veniam nisi enim cillum in ipsum consectetur nisi mollit cupidatat. Nulla consequat consequat velit est cillum nostrud fugiat aliqua aliqua consequat. Eu ad nostrud nostrud ad. Quis eiusmod officia proident voluptate ex consequat non. Deserunt non do quis ipsum veniam sit ipsum. Anim labore commodo incididunt laboris do sint voluptate tempor. Pariatur nostrud voluptate deserunt ad incididunt sit est irure qui nisi. Exercitation pariatur sint sint cillum cillum occaecat deserunt deserunt esse laborum.',
  },
};

export const CustomShadowOffset: StoryObj<typeof ScrollArea> = {
  args: {
    classNames: scrollAreaClassnames,
    offset: 80,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi duis officia cillum pariatur dolore enim consectetur voluptate sit tempor nisi pariatur et. Deserunt enim dolor consectetur veniam nisi enim cillum in ipsum consectetur nisi mollit cupidatat. Nulla consequat consequat velit est cillum nostrud fugiat aliqua aliqua consequat. Eu ad nostrud nostrud ad. Quis eiusmod officia proident voluptate ex consequat non. Deserunt non do quis ipsum veniam sit ipsum. Anim labore commodo incididunt laboris do sint voluptate tempor. Pariatur nostrud voluptate deserunt ad incididunt sit est irure qui nisi. Exercitation pariatur sint sint cillum cillum occaecat deserunt deserunt esse laborum.',
  },
};
