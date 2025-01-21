# Scroll Area

Augments native scroll functionality for custom, cross-browser styling. Optionally applies shadows when content overflows on scroll.

<b>[Live Examples](https://blur-ui-storybook.vercel.app/?path=/docs/components-scroll-area--docs)</b>

## Features

- Large-dependencies free.
- Supports vertical, horizontal, and both orientations.
- Fully unstyled and customizable.
- RTL support.
- Keyboard support.

## Requirements

- `react` >= 18.0.0

## Installation

```bash
npm install @blur-ui/scroll-area
```

or

```bash
yarn add @blur-ui/scroll-area
```

## Usage

```tsx
const scrollAreaClassnames: ScrollAreaClassnames = {
  root: 'w-60 h-60',
  scrollbar: 'p-[1px]',
  verticalScrollbar: 'w-2.5',
  horizontalScrollbar: 'h-2.5',
  thumb: 'bg-neutral-100 rounded-full',
};

<ScrollArea classNames={scrollAreaClassnames}>
  <p>Lorem ...</p>
</ScrollArea>;
```

## Props

### `ScrollArea`

| Prop Name              | Type                                         | Default     | Description                                                                                                                                                           |
|------------------------|----------------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `viewportProps`        | `ScrollAreaViewportProps`                    | `undefined` | Props to pass to the viewport element, including a `ref` to the DOM element.                                                                                            |
| `scrollbarProps`       | `ScrollAreaScrollbarProps`                   | `undefined` | Props to customize the scrollbar.                                                                                                                                     |
| `verticalScrollbarProps` | `ScrollAreaScrollbarProps`                 | `undefined` | Props to customize the vertical scrollbar specifically.                                                                                                               |
| `horizontalScrollbarProps` | `ScrollAreaScrollbarProps`               | `undefined` | Props to customize the horizontal scrollbar specifically.                                                                                                             |
| `thumbProps`           | `ScrollAreaThumbProps`                       | `undefined` | Props to customize the scrollbar thumb.                                                                                                                                 |
| `verticalThumbProps`   | `ScrollAreaThumbProps`                       | `undefined` | Props to customize the vertical scrollbar thumb specifically.                                                                                                         |
| `horizontalThumbProps` | `ScrollAreaThumbProps`                       | `undefined` | Props to customize the horizontal scrollbar thumb specifically.                                                                                                       |
| `cornerProps`          | `ScrollAreaCornerProps`                      | `undefined` | Props to customize the scrollbar corner element.                                                                                                                       |
| `classNames`           | `ScrollAreaClassNames`                       | `undefined` | An object to override default class names for various parts of the ScrollArea component.                                                                                |
| `disableShadow`        | `boolean`                                    | `false`     | If `true`, disables the scroll shadow effect.                                                                                                                          |
| `shadowSize`           | `number`                                     | `40`        | The size of the shadow in pixels applied when content overflows.                                                                                                      |
| `orientation`          | `'vertical' \| 'horizontal' \| 'both'`        | `'vertical'`| Determines the scroll orientation. Can be vertical, horizontal, or both.                                                                                                |
| `ref`                  | `React.Ref<HTMLDivElement>`                  | `undefined` | A ref to access the root DOM element of the ScrollArea.                                                                                                               |
| `children`             | `React.ReactNode`                             | `undefined` | The content to be displayed within the ScrollArea.                                                                                                                     |
| `offset`               | `number`                                     | `0`         | The offset used in calculating the scroll shadow visibility.                                                                                                         |
| `visibility`           | `'auto' \| 'visible' \| 'hidden'`             | `'auto'`    | Controls the visibility behavior of the scroll shadows.                                                                                                              |
| `onVisibilityChange`   | `(visible: boolean) => void`                  | `undefined` | Callback function invoked when the visibility of the scroll shadows changes.                                                                                          |

### `classNames` Object

| Class Name Key          | Description                                          |
|-------------------------|------------------------------------------------------|
| `root`                  | Class name for the root ScrollArea element.          |
| `viewport`              | Class name for the viewport area.                    |
| `scrollbar`             | Class name for the scrollbar container.              |
| `verticalScrollbar`     | Class name for the vertical scrollbar.               |
| `horizontalScrollbar`   | Class name for the horizontal scrollbar.             |
| `thumb`                 | Class name for the scrollbar thumbs.                 |
| `verticalThumb`         | Class name for the vertical scrollbar thumb.         |
| `horizontalThumb`       | Class name for the horizontal scrollbar thumb.       |
| `corner`                | Class name for the scrollbar corner element.         |


## Credits

[Radix UI Scroll Area](https://www.radix-ui.com/primitives/docs/components/scroll-area) | [Hero UI ScrollShadow](https://www.heroui.com/docs/components/scroll-shadow)
