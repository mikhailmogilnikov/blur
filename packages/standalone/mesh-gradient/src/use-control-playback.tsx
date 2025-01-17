import { CSSProperties, RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Gradient } from './utils/gradient';
import { MeshGradientProps } from './types';
import { GradientColors } from './utils/colors';

interface UseControlPlaybackProps {
  domRef: RefObject<HTMLCanvasElement>;
  canvasId: string;
  animationDuration: number;
  theme: MeshGradientProps['theme'];
  colors: MeshGradientProps['colors'];
  seed: MeshGradientProps['seed'];
  isPaused: MeshGradientProps['isPaused'];
  darken: MeshGradientProps['darken'];
}

export const useControlPlayback = ({
  domRef,
  canvasId,
  animationDuration,
  theme,
  colors,
  seed,
  isPaused,
  darken,
}: UseControlPlaybackProps) => {
  const gradient = useRef<Gradient | null>(null);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
  });

  const [isFading, setIsFading] = useState(false);

  const setRefs = useCallback(
    (node: HTMLCanvasElement | null) => {
      domRef.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  const fadeIn = useCallback(() => {
    setIsFading(false);
  }, []);

  const fadeOut = useCallback(
    (callback: () => void) => {
      setIsFading(true);
      setTimeout(() => {
        gradient.current?.initGradient(`#${canvasId}`);
        callback();
      }, animationDuration);
    },
    [animationDuration, gradient, canvasId],
  );

  const reloadGradient = useCallback(() => {
    fadeOut(() => {
      requestAnimationFrame(() => {
        fadeIn();
      });
    });
  }, [fadeOut, fadeIn]);

  useEffect(() => {
    if (!gradient.current) {
      const gradientObj = new Gradient({ seed });

      gradientObj.initGradient(`#${canvasId}`);
      gradient.current = gradientObj;
    }
  }, []);

  useEffect(() => {
    if (gradient.current) {
      if (isPaused || !inView) {
        gradient.current.pause();
      } else if (!isPaused && inView) {
        gradient.current.play();
      }
    }
  }, [gradient.current, isPaused, inView]);

  useEffect(() => {
    if (gradient.current && domRef.current) {
      const canvas = domRef.current;

      if (darken) {
        canvas?.setAttribute('data-js-darken-top', '');
        reloadGradient();
      } else {
        canvas?.removeAttribute('data-js-darken-top');
        reloadGradient();
      }
    }
  }, [darken, domRef?.current, gradient.current]);

  useEffect(() => {
    if (gradient?.current) {
      reloadGradient();
    }
  }, [theme, colors, gradient]);

  const colorVars = useMemo(
    () =>
      colors
        ? ({
            '--gradient-color-1': colors.color1,
            '--gradient-color-2': colors.color2,
            '--gradient-color-3': colors.color3,
            '--gradient-color-4': colors.color4,
          } as CSSProperties)
        : ({
            '--gradient-color-1': GradientColors[theme].color1,
            '--gradient-color-2': GradientColors[theme].color2,
            '--gradient-color-3': GradientColors[theme].color3,
            '--gradient-color-4': GradientColors[theme].color4,
          } as CSSProperties),
    [colors, theme],
  );

  return { setRefs, colorVars, isFading };
};
