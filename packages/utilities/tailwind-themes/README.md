# Tailwind Themes

Ultimate themes generator for Tailwind CSS 4.0.

## Features

- Automatic <b>color palette generation</b> for each color (from 50 to 950) – `bg-primary-300` etc.
- <b>Extend</b> the color palette with custom colors
- Configure app <b>layout</b> for each theme
- Automatic <b>readable</b> color generation for each color in theme (bg-primary > bg-primary-foreground)
- Optional disabling palette generation for each color by setting `generatePalette` to `false`
- Define <b>defaults</b> across all themes for your app – primary brand color, spacing, etc.
- Define <b>scheme</b> for theme. For `dark` mode, the palette will be generated in reverse order from 950 to 50. No needs to specify `bg-default-200 dark:bg-default-800` in className.

## Installation

```sh
npm i @blur-ui/tailwind-themes
```

or

```sh
yarn add @blur-ui/tailwind-themes
```

## Usage

Configure your themes

```ts
export const AppThemes = {
  default: DefaultTheme,
  themes: {
    light: {
      // Define colors for light theme of your app
      colors: {
        background: '#ffffff',
        foreground: {
          color: '#000000',
          generatePalette: false, // Disable palette (50-950 shades) generation for this color
        },
        link: '#123456',
        primary: '#123456',
        warning: '#123456',
        danger: '#123456',
        success: '#123456',
        // other colors
      },
      extendColors: {
        card: '#123456',
      },
      layout: {
        spacing: '0.25rem',
        transitionDuration: '0.25s',
        // other layout properties
      },
    },
    dark: DarkTheme,
    christmas: ChristmasTheme,
  },
} as const satisfies ThemeConfig;
```

Use it with automatically generated Tailwind CSS class utilities.

```html
<div class="bg-primary-300 text-primary-foreground">Hello, world!</div>
```

## Setup

Create a theme config file in your project.

`src/config/theme.ts`

```ts
import { ThemeConfig } from '@blur-ui/tailwind-themes';

export const AppThemes = {} as const satisfies ThemeConfig;
```

Create a plugin file in your project.

`src/utils/theme-plugin.ts`

```ts
import { tailwindThemePlugin } from '@blur-ui/tailwind-themes';
// import the theme config file
import { AppThemes } from './config/theme.ts';

export default tailwindThemePlugin(AppThemes);
```

Then, use the plugin in your root CSS file where you import `tailwindcss`.

`src/app/globals.css`

```css
@import 'tailwindcss';
@plugin "../utils/theme-plugin.ts";

/* Optional: Define custom variant for dark mode */
@custom-variant dark (&:where(.dark, .dark *));
```

<b>That's it!</b>

Now you can customize your theme configuration.

<b>Important:</b> Theme will be applied if you define theme name in `<body class="light">`.

To implement multiple themes in your React app, I recommend to follow <b>[Shadcn Theme Setup guide](https://ui.shadcn.com/docs/dark-mode)</b>.

## Configuration

```ts
import { ThemeConfig } from '@blur-ui/tailwind-themes';

export const AppThemes = {
  // Uses to define default values for all themes
  default: DefaultTheme,
  // Define themes of your app here, they will override default values
  themes: {
    light: LightTheme,
    dark: DarkTheme,
    christmas: ChristmasTheme,
  },
};
```

### Theme

```ts
import { Theme } from '@blur-ui/tailwind-themes';

export const DefaultTheme: Theme = {
  // Scheme uses to define the color generation direction. In `light` mode, the palette will be generated from 50 to 950. In `dark` mode, the palette will be generated from 950 to 50.
  scheme: 'light',

  colors: {
    // Defininig color in string format will generate palette & readable color automatically.
    // example: classname="bg-primary-300 text-primary-foreground"
    primary: '#123456',

    // Generate only color without palette.
    background: {
      color: 'hsl(0, 0%, 5%)',
      generatePalette: false,
      // Optionally define needed colors.
      foreground: 'hsl(0, 0%, 100%)',
      400: '#ccc',
    },
  },

  // Default layout values for all themes
  layout: {
    spacing: '0.25rem',
    transitionDuration: '0.25s',
  },

  // Extend colors with your own colors definitions
  extendColors: {
    // example of usage: className="bg-card-500"
    card: '#ffffff',
  },
};
```

### Plugin Options

Plugin options are optional and can be used to customize the plugin behavior. Pass them as second argument to `tailwindThemePlugin` function.

```ts
import { tailwindThemePlugin } from '@blur-ui/tailwind-themes';
import { AppThemes } from './config/theme.ts';

const pluginOptions: PluginOptions = {
  // Remove default tailwind colors (like `slate-500`, `red-500`, etc.) from the color palette. Default: false
  removeTailwindColors: true,
  // Remove all default colors (default, foreground, background, etc.) from the color palette. Default: false
  removeDefaultColors: false,
};

export default tailwindThemePlugin(AppThemes, pluginOptions);
```

### Types

```ts
export type Theme = {
  // 'light' or 'dark'
  scheme: ThemeColorScheme;
  /**
   * Available colors:
   * background, foreground, default, primary, secondary, tertiary, success, warning, danger, info, content1, content2, content3, content4, divider, focus, link
   */
  colors?: ThemeColors;
  /**
   * Uses to define your own custom colors in palette
   */
  extendColors?: ThemeColorExtend;
  /**
   * Uses to define tailwind layout properties
   */
  layout?: ThemeLayout;
};
```

##### Theme layout available properties:

- spacing
- transitionDuration
- transitionTimingFunction
- radius
- container
- breakpoint
- ease
- animate
- blur
- text
- fontWeight
- fontFamily
- leading (line-height)
- tracking (letter-spacing)
- shadow
- insetShadow
- dropShadow
- perspective
