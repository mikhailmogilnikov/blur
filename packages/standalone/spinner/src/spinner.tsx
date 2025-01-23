import { forwardRef } from 'react';

import { SpinnerProps } from './types';
import { useSpinner } from './use-spinner';

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const { buildSpinnerProps } = useSpinner(props);

  return <div ref={ref} {...buildSpinnerProps()} />;
});

Spinner.displayName = 'Spinner';
