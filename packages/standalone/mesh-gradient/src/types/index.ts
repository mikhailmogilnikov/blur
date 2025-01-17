import { CanvasHTMLAttributes } from 'react';
import { GradientColors } from 'src/utils/colors';

export type GradientPalette = { color1: string; color2: string; color3: string; color4: string };

/**
 * The gradient colors.
 */

export interface MeshGradientProps extends CanvasHTMLAttributes<HTMLCanvasElement> {
  /**
   * Custom gradient color palette.
   */
  colors?: GradientPalette;
  /**
   * The gradient color theme.
   */
  theme?: GradientColors;
  /**
   * If true, the gradient will be darkened.
   * @default false
   */
  darken?: boolean;
  /**
   * If true, the gradient animation will pause.
   * @default false
   */
  isPaused?: boolean;
  /**
   * The opacity of the gradient.
   * @default 1
   */
  opacity?: number;
  /**
   * The duration of the gradient animation in milliseconds.
   * @default 1000
   */
  animationDuration?: number;
  /**
   * The seed for gradient animation.
   * @default 5000
   */
  seed?: number;
  /**
   * The ref for the canvas element.
   */
  ref?: React.Ref<HTMLCanvasElement>;
}
