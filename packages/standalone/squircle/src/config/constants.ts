import { SquircleSize } from 'src/types';

export const DEFAULT_SQUIRCLE_SMOOTHING = 0.6;
export const DEFAULT_SQUIRCLE_RESIZE_DELAY = 100;

export const MIN_SQUIRCLE_SMOOTHING = 0;
export const MAX_SQUIRCLE_SMOOTHING = 1;

export const SQUIRCLE_SMOOTHING_CSS_VARIABLE = '--squircle-smoothing';

export const DEFAULT_SQUIRCLE_SIZE: SquircleSize = {
  width: 0,
  height: 0,
  borderRadius: 0,
  borderRadiuses: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
};
