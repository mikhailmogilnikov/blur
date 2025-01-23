import { useCallback, useMemo } from 'react';

import { SpinnerProps } from './types';

const SpinnerStyles = '.spinner { width: var(--spinner-size); height: var(--spinner-size); }';
const SpinnerSegmentStyles = `.spinner-segment { width: 10%; height: 30%; position: absolute; top: 38%; left: 48%; border-radius: 9999px; animation: spinner infinite linear; } @keyframes spinner { 0% { opacity: 0; } 5% { opacity: 1; } 100% { opacity: 0; } }`;

export const useSpinner = (props: SpinnerProps) => {
  const {
    size,
    segments = 10,
    animationDuration = 1.2,
    style,
    className,
    segmentClassName,
    ...restProps
  } = props;

  const segmentsArray = useMemo(() => [...Array(segments).keys()], [segments]);
  const deg = useMemo(() => 360 / segmentsArray.length, [segmentsArray]);
  const animationTime = useMemo(
    () => animationDuration / segmentsArray.length,
    [animationDuration, segmentsArray],
  );

  const buildSpinnerSegments = useCallback(() => {
    return segmentsArray.map((segment) => (
      <div
        key={segment}
        role='spinner-segment'
        className={['spinner-segment', `spinner-segment-${segment}`, segmentClassName].join(' ')}
        style={{
          animationDuration: `${animationDuration}s`,
          transform: `rotate(${deg * segment}deg) translateY(-120%)`,
          animationDelay: `-${animationDuration - segment * animationTime}s`,
        }}
      />
    ));
  }, [segmentsArray, deg, animationTime, segmentClassName]);

  const buildSpinnerProps = useCallback(() => {
    return {
      style: {
        ...style,
        position: 'relative' as const,
        '--spinner-size': size,
      },
      key: segments,
      className: ['spinner', className].join(' '),
      role: 'spinner',
      'data-segments': segments,
      'data-size': size,
      'data-animation-duration': animationDuration,
      children: (
        <>
          <style
            dangerouslySetInnerHTML={{
              __html: [size ? SpinnerStyles : '', SpinnerSegmentStyles].join(' '),
            }}
          />
          {buildSpinnerSegments()}
        </>
      ),
      ...restProps,
    };
  }, [size, segments, animationDuration, style, segmentClassName, className, restProps]);

  return {
    buildSpinnerProps,
  };
};
