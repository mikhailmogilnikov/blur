/* eslint-disable @typescript-eslint/no-unused-vars */

import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { CSSProperties, forwardRef } from 'react';

import { ScrollAreaProps } from './types';
import { useScrollArea } from './use-scroll-area';
import { horizontalShadow, verticalShadow } from './utils/shadows';

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>((props, ref) => {
  const {
    viewportProps,
    scrollbarProps,
    verticalScrollbarProps,
    horizontalScrollbarProps,
    thumbProps,
    verticalThumbProps,
    horizontalThumbProps,
    cornerProps,
    classNames,
    disableShadow = false,
    shadowSize = 40,
    orientation = 'vertical',
    ...rootProps
  } = props;

  const { viewportRef, scrollAreaClassnames } = useScrollArea({ ...props, ref });

  return (
    <RadixScrollArea.Root
      {...rootProps}
      style={{ position: 'relative', overflow: 'hidden', ...rootProps.style }}
      className={scrollAreaClassnames.root}
    >
      {!disableShadow && orientation !== 'both' && (
        <style
          dangerouslySetInnerHTML={{
            __html: orientation === 'vertical' ? verticalShadow : horizontalShadow,
          }}
          nonce={rootProps.nonce}
        />
      )}
      <RadixScrollArea.Viewport
        {...viewportProps}
        ref={viewportRef}
        style={
          {
            height: '100%',
            width: '100%',
            borderRadius: 'inherit',
            ...viewportProps?.style,
            '--scroll-shadow-size': `${shadowSize}px`,
          } as CSSProperties
        }
        className={scrollAreaClassnames.viewport}
      >
        {props.children}
      </RadixScrollArea.Viewport>
      {orientation !== 'horizontal' && (
        <RadixScrollArea.Scrollbar
          orientation='vertical'
          {...scrollbarProps}
          {...verticalScrollbarProps}
          style={{
            display: 'flex',
            touchAction: 'none',
            userSelect: 'none',
            ...scrollbarProps?.style,
            ...verticalScrollbarProps?.style,
          }}
          className={scrollAreaClassnames.verticalScrollbar}
        >
          <RadixScrollArea.Thumb
            {...thumbProps}
            {...verticalThumbProps}
            style={{
              flex: 1,
              position: 'relative',
              ...thumbProps?.style,
              ...verticalThumbProps?.style,
            }}
            className={scrollAreaClassnames.verticalThumb}
          />
        </RadixScrollArea.Scrollbar>
      )}
      {orientation !== 'vertical' && (
        <RadixScrollArea.Scrollbar
          orientation='horizontal'
          {...scrollbarProps}
          {...horizontalScrollbarProps}
          style={{
            display: 'flex',
            touchAction: 'none',
            userSelect: 'none',
            ...scrollbarProps?.style,
            ...horizontalScrollbarProps?.style,
          }}
          className={scrollAreaClassnames.horizontalScrollbar}
        >
          <RadixScrollArea.Thumb
            {...thumbProps}
            {...horizontalThumbProps}
            style={{
              position: 'relative',
              ...thumbProps?.style,
              ...horizontalThumbProps?.style,
            }}
            className={scrollAreaClassnames.horizontalThumb}
          />
        </RadixScrollArea.Scrollbar>
      )}
      <RadixScrollArea.Corner {...cornerProps} className={scrollAreaClassnames.corner} />
    </RadixScrollArea.Root>
  );
});

ScrollArea.displayName = 'ScrollArea';
