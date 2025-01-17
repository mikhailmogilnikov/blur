import { forwardRef } from 'react';

import { MeshGradientProps } from './types';
import { useMeshGradient } from './use-mesh-gradient';

export const MeshGradient = forwardRef<HTMLCanvasElement, MeshGradientProps>((props, ref) => {
  const { setRefs, buildCanvasProps } = useMeshGradient({ ...props, ref });

  return <canvas ref={setRefs} {...buildCanvasProps()} />;
});

MeshGradient.displayName = 'MeshGradient';
