import { forwardRef, useId } from 'react';

import { SkeletonProps } from './types';

const parseClassName = (className: string[]) => {
  return className.filter(Boolean).join(' ').trimEnd();
};

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { className, shadowClassName, children, animationDuration = 1, ...rest } = props;

  const uniqueId = useId().replace(/:/g, '');
  const skeletonId = `skeleton-${uniqueId}`;

  return (
    <div ref={ref} {...rest} className={parseClassName([skeletonId, className])}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @layer base {
          .${skeletonId} {
            position: relative;
            overflow: hidden;
            pointer-events: none;
          }
          .${skeletonId}-shadow {
            position: absolute;
            inset: 0;
            transform: translateX(-100%);
            mask-image: linear-gradient(to right, transparent 0%, hsla(0, 0%, 100%, 0.5) 50%, transparent 100%);
            animation-name: ${skeletonId}-slide;
            animation-iteration-count: infinite;
            animation-duration: var(--skeleton-animation-duration);
            animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
          }
          @keyframes ${skeletonId}-slide {
            100% {
              transform: translateX(100%);
            }
          }
            }
        `,
        }}
      />
      <div
        className={parseClassName([`${skeletonId}-shadow`, shadowClassName])}
        style={{ '--skeleton-animation-duration': `${animationDuration}s` } as React.CSSProperties}
      />
      {children}
    </div>
  );
});
