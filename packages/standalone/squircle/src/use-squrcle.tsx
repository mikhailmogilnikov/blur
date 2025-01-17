import { Slot } from '@radix-ui/react-slot';
import { CSSProperties, HTMLAttributes, Ref, useCallback, useMemo } from 'react';
import { getSvgPath as getSquirclePath } from 'figma-squircle';
import { useObjectRef } from '@blur-ui/react-utils';

import { SquircleProps } from './types';
import { useSquircleSize } from './use-squircle-size';
import { DEFAULT_SQUIRCLE_RESIZE_DELAY } from './config/constants';
import { checkIsHaveCustomStandaloneCorners } from './utils/check-standalone-corners';
import { getMinBorderRadius } from './utils/get-min-border-radius';

type UseSquircleProps = SquircleProps & { ref?: Ref<HTMLDivElement> };

export const useSquircle = (props: UseSquircleProps) => {
  const {
    resizeDelay = DEFAULT_SQUIRCLE_RESIZE_DELAY,
    asChild,
    ref,
    smoothing,
    disableResize,
    disableSmoothing,
    style,
    radius,
    wrapperClassName,
    ...domProps
  } = props;

  const Component = asChild ? Slot : 'div';
  const domRef = useObjectRef(ref);

  const [squircleSize] = useSquircleSize({ disableResize, resizeDelay, domRef });

  const squrcleClipPath = useMemo(() => {
    const { borderRadius, width, height, borderRadiuses } = squircleSize;

    const minBorderRadius = getMinBorderRadius(squircleSize);

    if (!minBorderRadius || !width || !height || disableSmoothing) return undefined;

    const isHaveCustomStandaloneCorners = checkIsHaveCustomStandaloneCorners(squircleSize);

    if (radius) {
      return getSquirclePath({
        cornerRadius: radius,
        cornerSmoothing: smoothing,
        width,
        height,
      });
    }

    if (isHaveCustomStandaloneCorners) {
      return getSquirclePath({
        cornerRadius: borderRadius,
        cornerSmoothing: smoothing,
        width,
        height,
        topLeftCornerRadius: borderRadiuses.borderTopLeftRadius,
        topRightCornerRadius: borderRadiuses.borderTopRightRadius,
        bottomLeftCornerRadius: borderRadiuses.borderBottomLeftRadius,
        bottomRightCornerRadius: borderRadiuses.borderBottomRightRadius,
      });
    }

    return getSquirclePath({
      cornerRadius: borderRadius,
      cornerSmoothing: smoothing,
      width,
      height,
    });
  }, [squircleSize, smoothing, disableSmoothing, radius]);

  const squircleStyle: CSSProperties = useMemo(() => {
    return {
      ...style,
      borderRadius: radius,
      clipPath: squrcleClipPath ? `path('${squrcleClipPath}')` : undefined,
    };
  }, [squrcleClipPath, style]);

  const buildRootProps: () => HTMLAttributes<HTMLDivElement> = useCallback(() => {
    return {
      ...domProps,
      style: squircleStyle,
    };
  }, [domProps, squircleStyle]);

  return {
    Component,
    domRef,
    buildRootProps,
    wrapperClassName,
  };
};
