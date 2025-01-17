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

<Squircle
  smoothing={0.6} // iOS-like smoothing
  className='h-36 w-36 rounded-2xl bg-zinc-800'
>
  Content
</Squircle>;
```