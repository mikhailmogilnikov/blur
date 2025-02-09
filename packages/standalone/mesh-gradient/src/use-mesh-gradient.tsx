import { useObjectRef } from '@blur-ui/react-utils';
import { CanvasHTMLAttributes, CSSProperties, useCallback, useId, useMemo } from 'react';

import { MeshGradientProps } from './types';
import { useControlPlayback } from './use-control-playback';
import { DEFAULT_ANIMATION_DURATION, DEFAULT_OPACITY, DEFAULT_SEED, DEFAULT_THEME } from './utils/defaults';

export const useMeshGradient = (props: MeshGradientProps) => {
  const {
    ref,
    style,
    animationDuration = DEFAULT_ANIMATION_DURATION,
    theme = DEFAULT_THEME,
    opacity = DEFAULT_OPACITY,
    seed = DEFAULT_SEED,
    isPaused = false,
    darken = false,
    colors,
    width = 0,
    height = 600,
    ...canvasProps
  } = props;

  const domRef = useObjectRef(ref);

  const id = useId().replace(/[:]/g, '');
  const canvasId = useMemo(() => `gradient-canvas-${id}`, []);

  const { setRefs, colorVars, isFading } = useControlPlayback({
    domRef,
    canvasId,
    animationDuration,
    theme,
    colors,
    seed,
    isPaused,
    darken,
    width,
    height,
  });

  const canvasStyle: CSSProperties = useMemo(() => {
    return {
      ...style,
      ...colorVars,
      opacity: isFading ? 0 : opacity,
      transition: `opacity ${animationDuration}ms linear`,
    };
  }, [style, colorVars, opacity, isFading, animationDuration]);

  const buildCanvasProps: () => CanvasHTMLAttributes<HTMLCanvasElement> = useCallback(() => {
    return {
      ...canvasProps,
      id: canvasId,
      style: canvasStyle,
    };
  }, [canvasProps, canvasId, canvasStyle]);

  return { setRefs, buildCanvasProps };
};
