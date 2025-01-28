enum ThemeLayoutFontFamily {
  SANS = 'sans',
  SERIF = 'serif',
  MONO = 'mono',
}

enum ThemeLayoutBreakpoint {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
}

enum ThemeLayoutContainer {
  '3XS' = '3xs',
  '2XS' = '2xs',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  '3XL' = '3xl',
  '4XL' = '4xl',
  '5XL' = '5xl',
  '6XL' = '6xl',
  '7XL' = '7xl',
}

enum ThemeLayoutText {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  '3XL' = '3xl',
  '4XL' = '4xl',
  '5XL' = '5xl',
  '6XL' = '6xl',
  '7XL' = '7xl',
  '8XL' = '8xl',
  '9XL' = '9xl',
}

enum ThemeLayoutFontWeight {
  THIN = 'thin',
  EXTRA_LIGHT = 'extralight',
  LIGHT = 'light',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semibold',
  BOLD = 'bold',
  EXTRA_BOLD = 'extrabold',
}

enum ThemeLayoutTracking {
  TIGHTER = 'tighter',
  TIGHT = 'tight',
  NORMAL = 'normal',
  WIDE = 'wide',
  WIDER = 'wider',
  WIDEST = 'widest',
}

enum ThemeLayoutLeading {
  TIGHT = 'tight',
  SNUG = 'snug',
  NORMAL = 'normal',
  RELAXED = 'relaxed',
  LOOSE = 'loose',
}

enum ThemeLayoutBorderRadius {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  '3XL' = '3xl',
  '4XL' = '4xl',
}

enum ThemeLayoutShadow {
  '2XS' = '2xs',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
}

enum ThemeLayoutInsetShadow {
  '2XS' = '2xs',
  XS = 'xs',
  SM = 'sm',
}

enum ThemeLayoutDropShadow {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
}

enum ThemeLayoutEase {
  EASE_IN = 'ease-in',
  EASE_OUT = 'ease-out',
  EASE_IN_OUT = 'ease-in-out',
}

enum ThemeLayoutAnimate {
  SPIN = 'spin',
  PING = 'ping',
  PULSE = 'pulse',
  BOUNCE = 'bounce',
}

enum ThemeLayoutBlur {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
  '3XL' = '3xl',
}

enum ThemeLayoutPerspective {
  DRAMATIC = 'dramatic',
  NEAR = 'near',
  NORMAL = 'normal',
  MIDRANGE = 'midrange',
  DISTANT = 'distant',
}

type ThemeLayoutTextConfig = {
  size: string;
  lineHeight: string;
};

type OptionalConfig<T extends string, V extends string | number = string> = Partial<Record<T, V>>;

export type ThemeLayout = Partial<{
  /**
   * Spacing between tailwind classes such as `mt-4` or `p-4`.
   * @default 0.25rem
   */
  spacing: string;
  /**
   * Transition duration for all transitions.
   * @default 0.15s
   */
  transitionDuration: string;
  /**
   * Transition timing function for all transitions.
   * @default `cubic-bezier(0.4, 0, 0.2, 1)`
   */
  transitionTimingFunction: string;
  /**
   * Text configuration for different sizes.
   * @default provided by tailwind css
   * @example
   * ```ts
   * {
   *  xs: {
   *    size: '0.75rem',
   *    lineHeight: 'calc(1 / .75)',
   *  },
   * }
   * ```
   */
  text: Partial<Record<ThemeLayoutText, Partial<ThemeLayoutTextConfig>>>;
  /**
   * Font families for different types of text.
   * @default
   * ```ts
   * sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   * serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
   * mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
   * ```
   */
  fontFamily: OptionalConfig<ThemeLayoutFontFamily>;
  fontWeight: OptionalConfig<ThemeLayoutFontWeight, number>;
  /**
   * Tracking (letter-spacing) for different types of text.
   * @default
   * ```ts
   * tighter: -0.05em;
   * tight: -0.025em;
   * normal: 0;
   * wide: 0.025em;
   * wider: 0.05em;
   * widest: 0.1em;
   * ```
   */
  tracking: OptionalConfig<ThemeLayoutTracking>;
  /**
   * Leading (line-height) for different types of text.
   * @default
   * ```ts
   * tighter: 1.125;
   * tight: 1.25;
   * normal: 1.5;
   * relaxed: 1.75;
   * loose: 2;
   * ```
   */
  leading: OptionalConfig<ThemeLayoutLeading, number>;
  /**
   * Border radiuses for different sizes. Use default tailwind classes such as `rounded-md` or `rounded-lg`.
   * @default
   * ```ts
   * xs: 0.125rem;
   * sm: 0.25rem;
   * md: 0.375rem;
   * lg: 0.5rem;
   * xl: 0.75rem;
   * 2xl: 1rem;
   * 3xl: 1.5rem;
   * 4xl: 2rem;
   * ```
   */
  radius: OptionalConfig<ThemeLayoutBorderRadius>;
  /**
   * Shadow for different sizes. Use default tailwind classes such as `shadow-sm` or `shadow-lg`.
   * @default
   * ```ts
   * 2xs: '0 1px #0000000d';
   * xs: '0 1px 2px 0 #0000000d';
   * sm: '0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a';
   * md: '2px 4px 12px #00000014';
   * lg: '0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a';
   * xl: '0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a';
   * 2xl: '0 25px 50px -12px #00000040';
   * ```
   */
  shadow: OptionalConfig<ThemeLayoutShadow>;
  /**
   * Inset shadow for different sizes. Use default tailwind classes such as `inset-shadow-sm` or `inset-shadow-lg`.
   * @default
   * ```ts
   * 2xs: 'inset 0 1px #0000000d';
   * xs: 'inset 0 1px 1px #0000000d';
   * sm: 'inset 0 2px 4px #0000000d';
   * ```
   */
  insetShadow: OptionalConfig<ThemeLayoutInsetShadow>;
  /**
   * Drop shadow for different sizes. Use default tailwind classes such as `drop-shadow-sm` or `drop-shadow-lg`.
   * @default
   * ```ts
   * xs: '0 1px 1px #0000000d';
   * sm: '0 1px 2px #00000026';
   * md: '0 3px 3px #0000001f';
   * lg: '0 4px 4px #00000026';
   * xl: '0 9px 7px #0000001a';
   * 2xl: '0 25px 25px #00000026';
   * ```
   */
  dropShadow: OptionalConfig<ThemeLayoutDropShadow>;
  /**
   * Easing for different types of animations `transition-ease-in` or `transition-ease-out`.
   * @default
   * ```ts
   * ease-in: cubic-bezier(0.4, 0, 1, 1);
   * ease-out: cubic-bezier(0, 0, 0.2, 1);
   * ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
   * ```
   */
  ease: OptionalConfig<ThemeLayoutEase>;
  /**
   * Animation for different types of animations `animate-spin` or `animate-ping`.
   * @default
   * ```ts
   * spin: infinite 1s linear;
   * ping: infinite 1s cubic-bezier(0, 0, 0.2, 1);
   * pulse: infinite 2s cubic-bezier(0.4, 0, 0.6, 1);
   * bounce: infinite 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
   * ```
   */
  animate: OptionalConfig<ThemeLayoutAnimate>;
  /**
   * Blur for different sizes. Use default tailwind classes such as `blur-sm` or `blur-lg`.
   * @default
   * ```ts
   * xs: 4px;
   * sm: 8px;
   * md: 12px;
   * lg: 16px;
   * xl: 24px;
   * 2xl: 40px;
   * 3xl: 64px;
   * ```
   */
  blur: OptionalConfig<ThemeLayoutBlur>;
  /**
   * Perspective for different sizes. Use default tailwind classes such as `perspective-dramatic` or `perspective-distant`.
   * @default
   * ```ts
   * dramatic: 100px;
   * near: 300px;
   * normal: 500px;
   * midrange: 800px;
   * distant: 1200px;
   * ```
   */
  perspective: OptionalConfig<ThemeLayoutPerspective>;
  /**
   * Uses to define container sizes for different sizes like `container-3xs` or `container-3xl`.
   * @default
   * ```ts
   * 3xs: 16rem;
   * 2xs: 18rem;
   * xs: 20rem;
   * sm: 24rem;
   * md: 28rem;
   * lg: 32rem;
   * xl: 36rem;
   * 2xl: 42rem;
   * 3xl: 48rem;
   * 4xl: 56rem;
   * 5xl: 64rem;
   * 6xl: 72rem;
   * 7xl: 80rem;
   * ```
   */
  container: OptionalConfig<ThemeLayoutContainer>;
  /**
   * Uses to define breakpoints (media queries) for different screen sizes like `md:w-10` or `max-lg:w-20`.
   * @default
   * ```ts
   * sm: 40rem;
   * md: 48rem;
   * lg: 64rem;
   * xl: 80rem;
   * 2xl: 96rem;
   * ```
   */
  breakpoint: OptionalConfig<ThemeLayoutBreakpoint>;
}>;
