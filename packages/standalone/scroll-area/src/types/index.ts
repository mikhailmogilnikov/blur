import {
  ScrollAreaProps as RadixScrollAreaProps,
  ScrollAreaViewportProps as RadixScrollAreaViewportProps,
  ScrollAreaScrollbarProps as RadixScrollAreaScrollbarProps,
  ScrollAreaThumbProps as RadixScrollAreaThumbProps,
  ScrollAreaCornerProps as RadixScrollAreaCornerProps,
} from '@radix-ui/react-scroll-area';

import { ScrollOverflowCheck, UseDataScrollOverflowProps } from '../use-data-scroll-overflow';

/**
 * Props for the root ScrollArea component.
 */
export interface ScrollAreaRootProps extends RadixScrollAreaProps {}

/**
 * Props for the viewport of the ScrollArea component.
 */
export interface ScrollAreaViewportProps extends RadixScrollAreaViewportProps {
  /**
   * The reference to the DOM element.
   */
  ref?: React.Ref<HTMLDivElement>;
}

/**
 * Props for the scrollbar of the ScrollArea component.
 */
export interface ScrollAreaScrollbarProps extends RadixScrollAreaScrollbarProps {}

/**
 * Props for the thumb of the ScrollArea component.
 */
export interface ScrollAreaThumbProps extends RadixScrollAreaThumbProps {}

/**
 * Props for the corner of the ScrollArea component.
 */
export interface ScrollAreaCornerProps extends RadixScrollAreaCornerProps {}

/**
 * Class names for the ScrollArea component.
 */
export interface ScrollAreaClassNames {
  root?: string;
  viewport?: string;
  scrollbar?: string;
  verticalScrollbar?: string;
  horizontalScrollbar?: string;
  thumb?: string;
  verticalThumb?: string;
  horizontalThumb?: string;
  corner?: string;
}

/**
 * Props for the ScrollArea component.
 */
export interface ScrollAreaProps
  extends ScrollAreaRootProps,
    Omit<UseDataScrollOverflowProps, 'domRef'> {
  viewportProps?: ScrollAreaViewportProps;
  scrollbarProps?: ScrollAreaScrollbarProps;
  verticalScrollbarProps?: ScrollAreaScrollbarProps;
  horizontalScrollbarProps?: ScrollAreaScrollbarProps;
  thumbProps?: ScrollAreaThumbProps;
  verticalThumbProps?: ScrollAreaThumbProps;
  horizontalThumbProps?: ScrollAreaThumbProps;
  cornerProps?: ScrollAreaCornerProps;
  classNames?: ScrollAreaClassNames;

  /**
   * The reference to the DOM element.
   */
  ref?: React.Ref<HTMLDivElement>;
  /**
   * The shadow size in pixels.
   * @default 40
   */
  shadowSize?: number;
  /**
   * The orientation of the scroll area.
   * @default 'vertical'
   */
  orientation?: ScrollOverflowCheck;
  /**
   * Whether to disable the scroll shadow.
   * @default false
   */
  disableShadow?: boolean;
}
