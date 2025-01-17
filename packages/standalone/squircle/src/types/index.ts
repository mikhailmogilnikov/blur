import { HTMLAttributes } from 'react';

/**
 * Props interface for the Squircle component.
 */
export interface SquircleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If true, the component will render the child component.
   * @default false
   */
  asChild?: boolean;
  /**
   * The smoothing value for the squircle. Can be a number between 0 and 1.
   * @default 0
   */
  smoothing?: number;
  /**
   * The throttling delay on resize in milliseconds.
   * @default 100
   */
  resizeDelay?: number;
  /**
   * If true, the component will not resize.
   * @default false
   */
  disableResize?: boolean;
  /**
   * If true, the component will not smooth.
   * @default false
   */
  disableSmoothing?: boolean;
  /**
   * The class name for the wrapper element. Uses to provide outline, shadow styles to squircle. If not provided, the squircle will be rendered without additional wrapper.
   * @default undefined
   */
  wrapperClassName?: string;
}

export type StaticSquircleProps = Omit<
  SquircleProps,
  'disableResize' | 'disableSmoothing' | 'resizeDelay'
> & {
  /**
   * The border radius for the squircle.
   */
  radius: number;
  /**
   * The width for the squircle.
   */
  width: number;
  /**
   * The height for the squircle.
   */
  height: number;
  /**
   * The border radiuses for the squircle.
   */
  borderRadiuses: SquircleBorderRadiuses;
};

type SquircleBorderRadiuses = Partial<{
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
}>;

export interface SquircleSize {
  width: number;
  height: number;
  borderRadius: number;
  borderRadiuses: SquircleBorderRadiuses;
}
