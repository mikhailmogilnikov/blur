import { forwardRef } from 'react';

import { SquircleProps } from './types';
import { useSquircle } from './use-squrcle';

export const SquircleSmoothed = forwardRef<HTMLDivElement, SquircleProps>((props, ref) => {
  const { Component, buildRootProps, domRef, wrapperClassName } = useSquircle({ ...props, ref });

  if (wrapperClassName) {
    return (
      <div className={wrapperClassName}>
        <Component ref={domRef} {...buildRootProps()} />
      </div>
    );
  }

  return <Component ref={domRef} {...buildRootProps()} />;
});
