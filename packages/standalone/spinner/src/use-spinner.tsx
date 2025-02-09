import { useCallback, useId, useMemo } from 'react';

import { SpinnerProps } from './types';

const SpinnerStyles = (id: string) => `@layer base { .${id} { width: var(--spinner-size); height: var(--spinner-size); } }`;
const SpinnerSegmentStyles = (id: string) =>
  `@layer base { .${id}-segment { width: 10%; height: 30%; position: absolute; top: 38%; left: 48%; border-radius: 9999px; animation: ${id} infinite linear; } @keyframes ${id} { 0% { opacity: 0; } 5% { opacity: 1; } 100% { opacity: 0; } } }`;

export const useSpinner = (props: SpinnerProps) => {
  const { size, segments = 10, animationDuration = 1.2, style, className, segmentClassName, ...restProps } = props;

  const uniqueId = useId().replace(/:/g, '');
  const spinnerId = `spinner-${uniqueId}`;

  const segmentsArray = useMemo(() => [...Array(segments).keys()], [segments]);
  const deg = useMemo(() => 360 / segmentsArray.length, [segmentsArray]);
  const animationTime = useMemo(() => animationDuration / segmentsArray.length, [animationDuration, segmentsArray]);

  const buildSpinnerSegments = useCallback(() => {
    return segmentsArray.map((segment) => (
      <div
        key={segment}
        className={[`${spinnerId}-segment`, `${spinnerId}-segment-${segment}`, segmentClassName].join(' ').trimEnd()}
        style={{
          animationDuration: `${animationDuration}s`,
          transform: `rotate(${deg * segment}deg) translateY(-120%)`,
          animationDelay: `-${animationDuration - segment * animationTime}s`,
        }}
      />
    ));
  }, [segmentsArray, deg, animationTime, segmentClassName, spinnerId]);

  const buildSpinnerProps = useCallback(() => {
    return {
      style: {
        ...style,
        position: 'relative' as const,
        '--spinner-size': size,
      },
      className: [spinnerId, className].join(' ').trimEnd(),
      'data-segments': segments,
      'data-size': size,
      'data-animation-duration': animationDuration,
      children: (
        <>
          <style
            dangerouslySetInnerHTML={{
              __html: [size ? SpinnerStyles(spinnerId) : '', SpinnerSegmentStyles(spinnerId)].join(' ').trimEnd(),
            }}
          />
          {buildSpinnerSegments()}
        </>
      ),
      ...restProps,
    };
  }, [size, segments, animationDuration, style, segmentClassName, className, restProps, spinnerId]);

  return {
    buildSpinnerProps,
    key: segments,
  };
};
