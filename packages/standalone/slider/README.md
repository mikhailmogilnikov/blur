# Slider

The `Slider` component is a completely unstyled customizable UI element for React that allows users to select a value between 0 and 1. It supports both horizontal and vertical orientations and provides smooth animations for track movement and stretch effects.

This component relies on the `motion` library as a dependency.

<b>[Live examples](https://blur-ui-storybook.vercel.app/?path=/docs/components-slider--docs)</b>

## Requirements

- `react` >= 16.0.0
- `motion` >= 11.15.0

## Installation

To install the `Slider` component, use npm or yarn:

```bash
npm install @blur/slider
```

or

```bash
yarn add @blur/slider
```

## Usage

Here's a basic example of how to use the `Slider` component:

```tsx
import React from 'react';
import { Slider } from '@blur/slider';

const App = () => {
  const handleValueChange = (value: number) => {
    console.log('Slider value:', value);
  };

  return (
    <Slider
      value={0.5}
      onValueChange={handleValueChange}
      classNames={{ base: 'custom-slider', track: 'custom-track' }}
    />
  );
};

export default App;
```

## Props

The `Slider` component accepts the following props:

- **value**: `number` (optional) - The current value of the slider. Should be between 0 and 1. Default is `0`.
- **onValueChange**: `(value: number) => void` (optional) - Callback function called when the value of the slider changes.
- **onValueChangeStop**: `(value: number) => void` (optional) - Callback function called when the value change is complete.
- **orientation**: `'horizontal' | 'vertical'` (optional) - The orientation of the slider. Default is `'horizontal'`.
- **arrowStep**: `number` (optional) - The step size for changing the slider value when using arrow keys. Default is `0.1`.
- **trackTransition**: `SpringOptions` (optional) - Transition options for the slider track animation.
- **resetStretchTransition**: `AnimationOptions` (optional) - Transition options for the stretch reset animation.
- **classNames**: `SliderClassnames` (optional) - Custom class names for styling the slider and track.
- **styles**: `SliderStyles` (optional) - Custom styles for styling the slider and track.
- **children**: `ReactNode` (optional) - Any child elements to be rendered inside the slider.
- **disableStretch**: `boolean` (optional) - If set to true, disables the stretch animation. Default is `false`.
- **stretchCoefficient**: `number` (optional) - The coefficient that controls the amount of stretch applied. Default is `300`.
- **dir**: `'ltr' | 'rtl'` (optional) - The direction of the slider. Default is `'ltr'`.
- **isDisabled**: `boolean` (optional) - If set to true, disables the slider. Default is `false`.

## Examples

### Vertical Slider

```tsx
<Slider
  value={0.2}
  orientation='vertical'
  classNames={{
    base: 'w-16 h-46 bg-neutral-200 rounded-2xl',
    track: 'bg-neutral-400',
  }}
/>
```

### Disabled Slider

```tsx
<Slider
  value={0.5}
  isDisabled
  classNames={{
    base: 'w-70 h-3 bg-neutral-200 rounded-xl data-[disabled]:opacity-50',
    track: 'bg-neutral-400',
  }}
/>
```

## License

This project is licensed under the MIT License.
