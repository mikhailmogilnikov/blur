import { AnimationOptions, HTMLMotionProps, MotionStyle, SpringOptions } from 'motion/react';
import { ReactNode } from 'react';

export type SliderClassnames = {
  base?: string;
  track?: string;
};

export type SliderStyles = {
  base?: MotionStyle;
  track?: MotionStyle;
};

/**
 * Props interface for the Slider component.
 */
export interface SliderProps extends HTMLMotionProps<'div'> {
  /**
   * The current value of the slider. Should be between 0 and 1.
   * @default 0
   */
  value?: number;

  /**
   * Callback function called when the value of the slider changes.
   * Provides the new value as an argument (from 0 to 1).
   * @example (value) => console.log(value)
   */
  onValueChange?: (value: number) => void;

  /**
   * Callback function called when the value change is complete (e.g., on mouse up or pan end).
   * Provides the final value as an argument (from 0 to 1).
   * @example (value) => alert(`Value changed to: ${value}`)
   */
  onValueChangeStop?: (value: number) => void;

  /**
   * The orientation of the slider. Can be 'horizontal' or 'vertical'.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The step size for changing the slider value when using arrow keys.
   * @default 0.1
   */
  arrowStep?: number;

  /**
   * Transition options for the slider track animation (when the track moves).
   * Defines the spring animation behavior.
   * @default { bounce: 0, duration: 200 }
   */
  trackTransition?: SpringOptions;

  /**
   * Transition options for the stretch reset animation of the slider.
   * Defines the animation when the track returns to the default position.
   * @default { duration: 0.2 }
   */
  resetStretchTransition?: AnimationOptions;

  /**
   * Custom class names for styling the slider and track.
   * @example { base: 'custom-slider', track: 'custom-track' }
   */
  classNames?: SliderClassnames;

  /**
   * Custom styles for styling the slider and track.
   * @example { base: { backgroundColor: 'red' }, track: { backgroundColor: 'blue' } }
   */
  styles?: SliderStyles;

  /**
   * Any child elements to be rendered inside the slider.
   * @example <div>Slider content</div>
   */
  children?: ReactNode;

  /**
   * If set to true, disables the stretch animation when changing the slider value.
   * @default false
   */
  disableStretch?: boolean;

  /**
   * The coefficient that controls the amount of stretch applied to the slider when moving the track.
   * @default 300
   */
  stretchCoefficient?: number;

  /**
   * The direction of the slider. Can be 'ltr' or 'rtl'.
   * @default 'ltr'
   */
  dir?: 'ltr' | 'rtl';

  /**
   * If set to true, disables the slider.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * If set to true, the slider will start from the start of the track.
   * @default false
   */
  fromStart?: boolean;
}
