import { forwardRef, useMemo } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { getSvgPath } from 'figma-squircle';

import { StaticSquircleProps } from './types';
import { useSetSmoothing } from './use-set-smoothing';

/**
 * Static squircle component. Uses width, height and radius witch provided by props to generate a squircle clip path. Light-weight version of Squircle component. Can gets smoothing value from global CSS variable --squircle-smoothing.
 * @example
 * ```tsx
 * <SquircleStatic width={100} height={100} radius={10} smoothing={1}>Hello</SquircleStatic>
 * ```
 */
export const SquircleStatic = forwardRef<HTMLDivElement, StaticSquircleProps>((props, ref) => {
  const {
    radius,
    width,
    height,
    asChild,
    smoothing,
    style,
    borderRadiuses,
    wrapperClassName,
    ...restProps
  } = props;

  const Component = asChild ? Slot : 'div';

  const currentSmoothing = useSetSmoothing(smoothing);

  const path = useMemo(() => {
    return getSvgPath({
      width,
      height,
      cornerRadius: radius,
      cornerSmoothing: currentSmoothing,
      topLeftCornerRadius: borderRadiuses?.borderTopLeftRadius,
      topRightCornerRadius: borderRadiuses?.borderTopRightRadius,
      bottomLeftCornerRadius: borderRadiuses?.borderBottomLeftRadius,
      bottomRightCornerRadius: borderRadiuses?.borderBottomRightRadius,
    });
  }, [width, height, radius, currentSmoothing, borderRadiuses]);

  const squircleStyle = useMemo(() => {
    return {
      ...style,
      clipPath: `path('${path}')`,
    };
  }, [style, path]);

  if (wrapperClassName) {
    return (
      <div className={wrapperClassName}>
        <Component ref={ref} {...restProps} style={squircleStyle} />
      </div>
    );
  }

  return <Component ref={ref} {...restProps} style={squircleStyle} />;
});

SquircleStatic.displayName = 'SquircleStatic';
