# Squircle

The `Squircle` component is designed to render a squircle in React applications.

<b>[Live examples](https://blur-ui-storybook.vercel.app/?path=/docs/components-squircle--docs)</b>

## Features

- Fully unstyled and customizable.
- If `smoothing` = 0, the component will be rendered as a simple html `div` element, without any smoothing-related logic.
- Automatically detects border radius and element size to generate a squircle clip path. No need to specify width, height and border radius.
- Provides a way to set global smoothing value from CSS variable in :root --squircle-smoothing.
- Automatically resizes based on `Intersection Observer API` and `Resize Observer API`. Also provides optional `resizeDelay` to optimize performance.
- Have optional wrapper to apply box-shadow and outline for the squircle. Enable it passing `wrapperClassName` prop with any CSS class.
- Lightweight `StaticSquircle` component based on required `width`, `height` and `radius` props. Use it for static content.
- Have optional `asChild` prop to spread all squircle props to the child element. It's useful for using squircle as a wrapper for other components.

## Requirements

- `react` >= 18.0.0

## Installation

To install the `Squircle` component, use npm or yarn:

```bash
npm install @blur-ui/squircle
```

or

```bash
yarn add @blur-ui/squircle
```

## Usage

```tsx
import { Squircle } from '@blur-ui/squircle';

<Squircle className='h-36 w-36 rounded-2xl bg-zinc-800'>Content</Squircle>;
```

## Props

| Prop             | Type    | Default Value            | Description                                                                                                                                                                        |
| ---------------- | ------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| asChild          | boolean | false                    | If true, the component will render the child component.                                                                                                                            |
| smoothing        | number  | 0.6 (iOS-like smoothing) | The smoothing value for the squircle. Can be a number between 0 and 1.                                                                                                             |
| resizeDelay      | number  | 100                      | The throttling delay on resize in milliseconds.                                                                                                                                    |
| disableResize    | boolean | false                    | If true, the component will not resize.                                                                                                                                            |
| disableSmoothing | boolean | false                    | If true, the component will not apply smoothing to the edges.                                                                                                                      |
| wrapperClassName | string  | undefined                | The CSS class name for the wrapper element. Used to apply outline and shadow styles to the squircle. If not provided, the squircle will be rendered without an additional wrapper. |
| radius           | number  | undefined                | Optional border radius for the squircle. If not provided, the radius will be derived from CSS.                                                                                     |

## Examples

```tsx
import { Squircle } from '@blur-ui/squircle';

// Example with different smoothing value
<Squircle className='h-48 w-48 bg-blue-500' smoothing={0.8}>
  Rounded Content
</Squircle>;

// Example with using wrapperClassName to apply shadows
<Squircle className='h-32 w-32 bg-red-500' wrapperClassName='shadow-lg'>
  Shadowed Content
</Squircle>;

// Spread all squircle props to the child element
<Squircle asChild>
  <div className='h-32 w-32 bg-red-500'>Content</div>
</Squircle>;

// Output in DOM:
<div className='h-32 w-32 bg-red-500' style="clip-path: ...">Content</div>;

// Example with using StaticSquircle for static content
import { StaticSquircle } from '@blur-ui/squircle';

<StaticSquircle width={100} height={100} radius={20} className='bg-green-500'>
  Static Content
</StaticSquircle>;
```
