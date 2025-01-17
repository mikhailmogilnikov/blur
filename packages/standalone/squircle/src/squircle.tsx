import { useMemo } from 'react';

import { SquircleSmoothed } from './squircle-smoothed';
import { SquircleUnsmoothed } from './squrcle-unsmoothed';
import { SquircleProps } from './types';
import { useSetSmoothing } from './use-set-smoothing';

/**
 * Squircle component. Automatically detects border radiuses and element size to generate a clip path.
 * Provides a way to set smoothing value from global CSS variable --squircle-smoothing.
 * @example
 * ```tsx
 * <Squircle smoothing={0.6}>Hello</Squircle>
 * ```
 */
export const Squircle = (props: SquircleProps) => {
  const { smoothing, disableSmoothing, ...restProps } = props;

  const currentSmoothing = useSetSmoothing(smoothing);

  const isReadyToRenderSquircle = useMemo(
    () => currentSmoothing > 0 && !disableSmoothing,
    [currentSmoothing, disableSmoothing],
  );

  return isReadyToRenderSquircle ? (
    <SquircleSmoothed {...restProps} smoothing={currentSmoothing} disableSmoothing={false} />
  ) : (
    <SquircleUnsmoothed {...restProps} smoothing={currentSmoothing} disableSmoothing={true} />
  );
};

Squircle.displayName = 'Squircle';
