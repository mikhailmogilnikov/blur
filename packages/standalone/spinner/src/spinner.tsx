import { forwardRef } from 'react';

import { SpinnerProps } from './types';
import { useSpinner } from './use-spinner';

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const { buildSpinnerProps, key } = useSpinner(props);

  return <div ref={ref} key={key} {...buildSpinnerProps()} />;
});

Spinner.displayName = 'Spinner';
