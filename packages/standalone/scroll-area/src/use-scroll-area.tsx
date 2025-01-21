import { useMemo } from 'react';
import { useObjectRef } from '@blur-ui/react-utils';

import { ScrollAreaProps } from './types';
import { useDataScrollOverflow } from './use-data-scroll-overflow';

export const useScrollArea = (props: ScrollAreaProps) => {
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
    offset = 0,
    visibility = 'auto',
    disableShadow = false,
    onVisibilityChange,
    orientation = 'vertical',
    children,
    ref,
    ...rootProps
  } = props;

  const viewportRef = useObjectRef(ref);

  useDataScrollOverflow({
    domRef: viewportRef,
    offset,
    visibility,
    isEnabled: !disableShadow && orientation !== 'both',
    onVisibilityChange,
    updateDeps: [children],
    overflowCheck: orientation,
  });

  const scrollAreaClassnames = useMemo(() => {
    return {
      root: ['scroll-root', classNames?.root, rootProps.className].filter(Boolean).join(' '),
      viewport: ['scroll-viewport', classNames?.viewport, viewportProps?.className]
        .filter(Boolean)
        .join(' '),
      verticalScrollbar: [
        'scroll-scrollbar',
        'scroll-scrollbar-vertical',
        scrollbarProps?.className,
        verticalScrollbarProps?.className,
        classNames?.scrollbar,
        classNames?.verticalScrollbar,
      ]
        .filter(Boolean)
        .join(' '),
      horizontalScrollbar: [
        'scroll-scrollbar',
        'scroll-scrollbar-horizontal',
        scrollbarProps?.className,
        horizontalScrollbarProps?.className,
        classNames?.scrollbar,
        classNames?.horizontalScrollbar,
      ]
        .filter(Boolean)
        .join(' '),
      verticalThumb: [
        'scroll-thumb',
        'scroll-thumb-vertical',
        thumbProps?.className,
        verticalThumbProps?.className,
        classNames?.thumb,
        classNames?.verticalThumb,
      ]
        .filter(Boolean)
        .join(' '),
      horizontalThumb: [
        'scroll-thumb',
        'scroll-thumb-horizontal',
        thumbProps?.className,
        horizontalThumbProps?.className,
        classNames?.thumb,
        classNames?.horizontalThumb,
      ]
        .filter(Boolean)
        .join(' '),
      corner: ['scroll-corner', classNames?.corner, cornerProps?.className]
        .filter(Boolean)
        .join(' '),
    };
  }, [
    classNames,
    rootProps.className,
    viewportProps?.className,
    scrollbarProps?.className,
    verticalScrollbarProps?.className,
    horizontalScrollbarProps?.className,
    thumbProps?.className,
    verticalThumbProps?.className,
    horizontalThumbProps?.className,
    cornerProps?.className,
  ]);

  return {
    viewportRef,
    scrollAreaClassnames,
  };
};
