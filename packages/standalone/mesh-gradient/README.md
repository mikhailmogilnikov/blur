# Mesh Gradient

The `MeshGradient` component is designed to render a Apple-like mesh gradient for React apps. It offers flexible customization options through various props.

<b>[Live examples](https://blur-ui-storybook.vercel.app/?path=/docs/components-meshgradient--docs)</b>

## Features

- Supports both horizontal and vertical orientations.
- Provides smooth animations for track movement and stretch effects.
- Fully unstyled and customizable.
- RTL support.
- Keyboard support.

## Installation

```bash
npm install @blur-ui/mesh-gradient
```

or

```bash
yarn add @blur-ui/mesh-gradient
```

## Usage

```tsx
<MeshGradient theme='peach' />
```

## Props

### `ref` (optional)

- **Type:** `Ref<HTMLCanvasElement> | null`
- **Description:** A reference to the `<canvas>` element used for rendering the gradient.

### `colors` (optional)

- **Type:** `GradientPalette`
- **Description:** An object containing four colors for the gradient. If not specified, the color palette defined by the `color` prop is used.

### `theme` (optional)

- **Type:** `GradientColors`
- **Description:** The name of a predefined color palette.

### `darken` (optional)

- **Type:** `boolean`
- **Description:** If `true`, the gradient will be darkened.

### `isPaused` (optional)

- **Type:** `boolean`
- **Description:** If `true`, the gradient animation will be paused.

### `opacity` (optional)

- **Type:** `number`
- **Description:** The opacity level of the gradient. Default: `1`.

### `animationDuration` (optional)

- **Type:** `number`
- **Description:** The duration of the opacity transition animation in milliseconds. Default: `150`.

### Other Props

- **Type:** `ComponentPropsWithoutRef<'canvas'>`
- **Description:** Any other props that can be passed to a `<canvas>` element.

### `GradientPalette`

- **Type:** `{ color1: string; color2: string; color3: string; color4: string }`
- **Description:** An object defining four colors used in the gradient.

## Example

```tsx
<MeshGradient theme='sky' darken={true} isPaused={false} opacity={0.8} animationDuration={300} />
```

This example creates a gradient with the `sky` color palette, darkened, with continuous animation and an opacity of 0.8. The opacity transition animation lasts 300 milliseconds.

### Example with `colors`

```tsx
const colors: GradientPalette = {
  color1: '#FF5733',
  color2: '#33FF57',
  color3: '#3357FF',
  color4: '#F3FF33'
}

<MeshGradient
  colors={colors}
  animationDuration={200}
/>
```

This example uses a custom color palette defined by the `colors` prop, with no darkening, continuous animation, full opacity, and an opacity transition animation lasting 200 milliseconds.

## Credits

This component was inspired by [Stripe's mesh gradient](https://github.com/jordienr/whatamesh/blob/master/lib/Gradient.js).
