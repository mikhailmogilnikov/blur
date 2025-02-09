# Skeleton

A customizable skeleton for React with zero external dependencies.

<b>[Live Examples](https://blur-ui-storybook.vercel.app/?path=/docs/components-skeleton--docs)</b>

## Features

- Zero external dependencies.
- Fully customizable (size, color, animation duration, etc.)
- Lightweight.

## Requirements

- `react` >= 18.0.0

## Installation

```bash
npm install @blur-ui/skeleton
```

or

```bash
yarn add @blur-ui/skeleton
```

## Usage

```tsx
<Skeleton className='w-40 h-10 bg-neutral-100 rounded-lg' shadowClassName='bg-neutral-300' />
```

## Props

- **className** (`string`)

  The `classNames` for the skeleton.

- **shadowClassName** (`string`)

  The `classNames` for the skeleton shadow.

- **animationDuration** (`number`)

  The animation duration for the skeleton.

  **Default**: `1`
