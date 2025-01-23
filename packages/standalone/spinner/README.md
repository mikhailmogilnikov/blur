# Spinner

A customizable iOS-styled spinner with zero dependencies.

<b>[Live Examples](https://blur-ui-storybook.vercel.app/?path=/docs/components-spinner--docs)</b>

## Features

- Zero dependencies.
- Can change the number of segments from 8 to 12.
- Fully customizable (size, color, animation duration, etc.)
- Supports responsive sizes via CSS media queries.

## Requirements

- `react` >= 18.0.0

## Installation

```bash
npm install @blur-ui/spinner
```

or

```bash
yarn add @blur-ui/spinner
```

## Usage

```tsx
<Spinner size='1.5rem' segmentClassName='bg-white' />
```

or

```tsx
// Supports responsive sizes via CSS media queries
<Spinner className='h-10 w-10 lg:h-20 lg:w-20' segmentClassName='bg-white' />
```

## Props

## Props

- **size** (`string`)

  The size of the spinner (e.g., `'1rem'`, `'16px'`). If not provided, you can define width and height in the `classNames`.

  **Default**: `undefined`

- **segments** (`SpinnerSegmentsCount`)

  The number of segments in the spinner. Acceptable values are `8`, `9`, `10`, `11`, or `12`.

  **Default**: `10`

- **segmentClassName** (`string`)

  The `classNames` for the spinner segments.

- **animationDuration** (`number`)

  The animation duration for the spinner.

  **Default**: `1.2`
