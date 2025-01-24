import { useMemo } from 'react';
import { getCssValue } from '@blur-ui/js-utils';

import {
  DEFAULT_SQUIRCLE_SMOOTHING,
  MAX_SQUIRCLE_SMOOTHING,
  MIN_SQUIRCLE_SMOOTHING,
  SQUIRCLE_SMOOTHING_CSS_VARIABLE,
} from './config/constants';

export const useSetSmoothing = (smoothing: number | undefined) => {
  const componentSmoothing = useMemo(() => {
    if (typeof document === 'undefined') return 0;

    // If the smoothing is passed as a prop, use it
    if (
      typeof smoothing !== 'undefined' &&
      smoothing >= MIN_SQUIRCLE_SMOOTHING &&
      smoothing <= MAX_SQUIRCLE_SMOOTHING
    )
      return smoothing;

    // If the smoothing is passed as a global CSS variable, use it
    const globalSmoothing = getCssValue(SQUIRCLE_SMOOTHING_CSS_VARIABLE);

    if (typeof globalSmoothing === 'string') {
      const normalizedGlobalSmoothing = Number(globalSmoothing);

      if (
        normalizedGlobalSmoothing > MIN_SQUIRCLE_SMOOTHING &&
        normalizedGlobalSmoothing <= MAX_SQUIRCLE_SMOOTHING
      ) {
        return normalizedGlobalSmoothing;
      }
    }

    // If the smoothing is not passed as a prop or global CSS variable, use the default smoothing
    return DEFAULT_SQUIRCLE_SMOOTHING;
  }, [smoothing]);

  return componentSmoothing;
};
