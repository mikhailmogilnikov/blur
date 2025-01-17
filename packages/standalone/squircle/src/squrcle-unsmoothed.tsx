/* eslint-disable @typescript-eslint/no-unused-vars */

import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { SquircleProps } from './types';

export const SquircleUnsmoothed = forwardRef<HTMLDivElement, SquircleProps>((props, ref) => {
  const {
    asChild,
    wrapperClassName,

    smoothing,
    resizeDelay,
    disableResize,
    disableSmoothing,

    ...restProps
  } = props;

  const Component = asChild ? Slot : 'div';

  if (wrapperClassName) {
    return (
      <div className={wrapperClassName}>
        <Component ref={ref} {...restProps} />
      </div>
    );
  }

  return <Component ref={ref} {...restProps} />;
});
