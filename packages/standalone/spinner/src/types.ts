import { HTMLAttributes } from 'react';

export type SpinnerSegmentsCount = 8 | 9 | 10 | 11 | 12;

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the spinner (e.g. '1rem', '16px). If not provided, you can define width and height in the classNames.
   * @default undefined
   */
  size?: string;
  /**
   * The number of segments in the spinner. 8, 9, 10, 11 or 12.
   * @default 10
   */
  segments?: SpinnerSegmentsCount;
  /**
   * The classNames for the spinner segments.
   */
  segmentClassName?: string;
  /**
   * The animation duration for the spinner.
   * @default 1.2
   */
  animationDuration?: number;
}
