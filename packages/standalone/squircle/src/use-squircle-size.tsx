import { RefObject, useCallback, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@blur-ui/react-utils';
import { throttleFn } from '@blur-ui/js-utils';

import { SquircleProps, SquircleSize } from './types';
import { DEFAULT_SQUIRCLE_SIZE } from './config/constants';

type UseSquircleSizeProps = Pick<SquircleProps, 'disableResize' | 'resizeDelay'> & {
  domRef: RefObject<HTMLDivElement>;
};

type UseSquircleSizeReturn = [SquircleSize];

export const useSquircleSize = (props: UseSquircleSizeProps): UseSquircleSizeReturn => {
  const { disableResize, resizeDelay, domRef } = props;

  const [size, setSize] = useState<SquircleSize>(DEFAULT_SQUIRCLE_SIZE);

  const handleSetSize = useCallback(() => {
    if (!domRef.current) return;
    const { current } = domRef;

    const style = window.getComputedStyle(current);
    const borderRadius = parseFloat(style.borderRadius);

    const squircleSize: SquircleSize = {
      width: current.offsetWidth ?? 0,
      height: current.offsetHeight ?? 0,
      borderRadius: borderRadius ?? 0,
      borderRadiuses: {
        borderTopLeftRadius: parseFloat(style.borderTopLeftRadius) ?? undefined,
        borderTopRightRadius: parseFloat(style.borderTopRightRadius) ?? undefined,
        borderBottomLeftRadius: parseFloat(style.borderBottomLeftRadius) ?? undefined,
        borderBottomRightRadius: parseFloat(style.borderBottomRightRadius) ?? undefined,
      },
    };

    setSize(squircleSize);
  }, [domRef]);

  const throttledHandleSetSize = useCallback(
    resizeDelay > 0 ? throttleFn(handleSetSize, resizeDelay) : handleSetSize,
    [handleSetSize, resizeDelay],
  );

  useIsomorphicLayoutEffect(() => {
    if (!domRef.current) return;

    const resizeObserver = new ResizeObserver(throttledHandleSetSize);
    const mutationObserver = new MutationObserver(() => {
      const style = window.getComputedStyle(domRef.current);
      const currentBorderRadius = parseFloat(style.borderRadius);

      if (currentBorderRadius !== size.borderRadius) {
        throttledHandleSetSize();
      }
    });

    if (disableResize) {
      handleSetSize();

      resizeObserver.disconnect();
      mutationObserver.disconnect();

      return;
    }

    resizeObserver.observe(domRef.current);
    mutationObserver.observe(domRef.current, { attributes: true });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [domRef, disableResize, throttledHandleSetSize, handleSetSize]);

  return [size];
};
