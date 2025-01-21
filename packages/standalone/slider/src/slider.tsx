import {
  PanInfo,
  useMotionValue,
  m,
  LazyMotion,
  domMax,
  useSpring,
  SpringOptions,
  DOMKeyframesDefinition,
  AnimationOptions,
  animate,
} from 'motion/react';
import { forwardRef, KeyboardEventHandler, useEffect, useMemo, useRef } from 'react';
import { useObjectRef } from '@blur-ui/react-utils';

import { calculateStretchAnimation, getArrowAnimation, normValue } from './utils';
import { SliderClassnames, SliderProps, SliderStyles } from './types';

const DEFAULT_STRETCH_COEFFICIENT: number = 300;
const DEFAULT_ARROW_STEP: number = 0.1;

const DEFAULT_COEF_TRANSITION: SpringOptions = { bounce: 0, duration: 200 };
const DEFAULT_STRETCH_TRANSITION: AnimationOptions = { duration: 0.1 };
const DEFAULT_RESET_STRETCH_TRANSITION: AnimationOptions = { duration: 0.2 };
const RESET_STRETCH_ANIMATION: DOMKeyframesDefinition = { scaleX: 1, scaleY: 1, y: 0, x: 0 };

/**
 * The Slider component is a customizable slider UI element that allows users to select a value between 0 and 1.
 * The slider can be either horizontal or vertical, and supports interaction through dragging, keyboard input,
 * or both. The component also features smooth animations for track movement and stretch effects when the slider is adjusted.
 *
 * It also provides callback functions for tracking value changes (`onValueChange`) and detecting when the user stops
 * interacting with the slider (`onValueChangeStop`).
 *
 * Props:
 * - `value` (number, optional)
 * - `onValueChange` (function, optional)
 * - `onValueChangeStop` (function, optional)
 * - `orientation` ('horizontal' | 'vertical', optional)
 * - `dir` ('ltr' | 'rtl', optional)
 * - `arrowStep` (number, optional)
 * - `trackTransition` (SpringOptions, optional)
 * - `resetStretchTransition` (DynamicAnimationOptions, optional)
 * - `classNames` (SliderClassnames, optional)
 * - `children` (ReactNode, optional)
 * - `disableStretch` (boolean, optional)
 * - `stretchCoefficient` (number, optional)
 * - `isDisabled` (boolean, optional)
 *
 * @example
 * <Slider
 *   value={0.5}
 *   onValueChange={(value) => console.log('Slider value:', value)}
 *   onValueChangeStop={(value) => console.log('Slider value changed to:', value)}
 *   orientation="vertical"
 *   classNames={{ base: 'w-16 h-48 bg-neutral-800 rounded-2xl', track: 'bg-neutral-100' }}
 * />
 */
export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    value = 0,
    onValueChange,
    onValueChangeStop,
    orientation = 'horizontal',
    dir = 'ltr',
    className,
    classNames,
    style,
    styles,
    arrowStep = DEFAULT_ARROW_STEP,
    trackTransition = DEFAULT_COEF_TRANSITION,
    stretchCoefficient = DEFAULT_STRETCH_COEFFICIENT,
    resetStretchTransition = DEFAULT_RESET_STRETCH_TRANSITION,
    disableStretch = false,
    children,
    isDisabled = false,
    fromStart = false,
    onKeyDown,
    onKeyUp,
    onPan,
    onPanEnd,
    ...restProps
  } = props;

  const sliderCoef = useMotionValue(fromStart ? 0 : value);
  const transitionCoef = useSpring(sliderCoef, trackTransition);

  const memoValue = useRef(sliderCoef.get());
  const sliderRef = useObjectRef<HTMLDivElement>(ref);

  const isHorizontal = useMemo(() => orientation === 'horizontal', [orientation]);
  const isRtl = useMemo(() => dir === 'rtl', [dir]);

  const startButtonPress = () => {
    const mouseDownEvent = new MouseEvent('pointerdown', { bubbles: true, cancelable: true });

    sliderRef.current.dispatchEvent(mouseDownEvent);
  };

  const endButtonPress = () => {
    const mouseUpEvent = new MouseEvent('pointerup', { bubbles: true, cancelable: true });

    sliderRef.current.dispatchEvent(mouseUpEvent);
  };

  useEffect(() => {
    sliderCoef.set(value);
    memoValue.current = value;
  }, [value]);

  const handlePan = (event: PointerEvent, info: PanInfo) => {
    const currentValue = memoValue.current;
    const dimension = isHorizontal ? sliderRef.current.clientWidth : sliderRef.current.clientHeight;
    let offset = isHorizontal ? info.offset.x : -info.offset.y;

    if (isHorizontal && isRtl) {
      offset = -offset;
    }

    const sizeStep = dimension / 100;
    const trackWidth = sizeStep * currentValue * 100;
    const newTrackWidth = trackWidth + offset;
    const newValue = newTrackWidth / 100 / sizeStep;

    if (newValue <= 0 || newValue >= 1) {
      const clampedValue = Math.max(0, Math.min(1, newValue));

      if (sliderCoef.get() !== clampedValue) {
        sliderCoef.set(clampedValue);
        onValueChange?.(clampedValue);
      }

      if (!disableStretch) {
        const stretchAnimation = calculateStretchAnimation(
          newValue <= 0,
          isHorizontal,
          isRtl,
          dimension,
          newTrackWidth,
          stretchCoefficient,
        );

        animate(sliderRef.current, stretchAnimation, DEFAULT_STRETCH_TRANSITION);
      }

      return;
    }

    if (!disableStretch) {
      animate(sliderRef.current, RESET_STRETCH_ANIMATION, resetStretchTransition);
    }

    if (newValue !== sliderCoef.get()) {
      sliderCoef.set(newValue);
      onValueChange?.(normValue(newValue));
    }

    onPan?.(event, info);
  };

  const handlePanEnd = (event: PointerEvent, info: PanInfo) => {
    const coef = sliderCoef.get();

    if (!disableStretch) {
      animate(sliderRef.current, RESET_STRETCH_ANIMATION, resetStretchTransition);
    }

    memoValue.current = coef;
    onValueChangeStop?.(normValue(coef));

    onPanEnd?.(event, info);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    const adjustValue = (increment: boolean) => {
      startButtonPress();

      let step = increment ? arrowStep : -arrowStep;

      if (isHorizontal && isRtl) {
        step = -step;
      }

      const currCoef = sliderCoef.get();
      const newCoef = currCoef + step;

      if (newCoef < 0 || newCoef > 1) {
        const clampedValue = Math.max(0, Math.min(1, newCoef));

        sliderCoef.set(clampedValue);
        memoValue.current = clampedValue;

        if (!disableStretch) {
          const animation = getArrowAnimation(newCoef < 0, isHorizontal, isRtl);

          animate(sliderRef.current, animation, DEFAULT_STRETCH_TRANSITION);
        }

        onValueChange?.(clampedValue);
        onValueChangeStop?.(clampedValue);

        return;
      }

      sliderCoef.set(newCoef);
      memoValue.current = newCoef;
      onValueChange?.(normValue(newCoef));
      onValueChangeStop?.(normValue(newCoef));
    };

    if ((isHorizontal && e.key === 'ArrowLeft') || (!isHorizontal && e.key === 'ArrowDown')) {
      e.preventDefault();
      adjustValue(false);
    }
    if ((isHorizontal && e.key === 'ArrowRight') || (!isHorizontal && e.key === 'ArrowUp')) {
      e.preventDefault();
      adjustValue(true);
    }

    onKeyDown?.(e);
  };

  const handleKeyUp: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowDown' ||
      e.key === 'ArrowRight' ||
      e.key === 'ArrowUp' ||
      e.code === 'Space'
    ) {
      e.preventDefault();
      endButtonPress();

      if (!disableStretch) {
        animate(sliderRef.current, RESET_STRETCH_ANIMATION, resetStretchTransition);
      }
    }

    onKeyUp?.(e);
  };

  const sliderClassNames: SliderClassnames = useMemo(
    () => ({
      base: ['sliderBase', className, classNames?.base].filter(Boolean).join(' '),
      track: ['sliderTrack', classNames?.track].filter(Boolean).join(' '),
    }),
    [className, classNames],
  );

  const sliderStyles: SliderStyles = useMemo(() => {
    return {
      base: {
        pointerEvents: 'auto',
        position: 'relative',
        cursor: isDisabled ? 'default' : 'pointer',
        touchAction: 'none',
        overflow: 'hidden',
        userSelect: 'none',
        ...style,
        ...styles?.base,
      },
      track: {
        position: 'absolute',
        inset: 0,
        ...styles?.track,
      },
    };
  }, [style, styles, isDisabled]);

  return (
    <LazyMotion features={domMax}>
      <m.div
        id='slider-base'
        role='slider'
        title='Slider'
        tabIndex={isDisabled ? -1 : 0}
        {...restProps}
        aria-valuemin={0}
        aria-valuemax={1}
        data-disabled={isDisabled}
        data-orientation={orientation}
        data-dir={dir}
        ref={sliderRef}
        className={sliderClassNames.base}
        style={sliderStyles.base}
        onKeyDown={!isDisabled ? handleKeyDown : onKeyDown}
        onKeyUp={!isDisabled ? handleKeyUp : onKeyUp}
        onPan={!isDisabled ? handlePan : onPan}
        onPanEnd={!isDisabled ? handlePanEnd : onPanEnd}
      >
        {children}
        <m.div
          className={sliderClassNames.track}
          id='slider-track'
          style={{
            ...sliderStyles.track,
            ...(isHorizontal
              ? { scaleX: transitionCoef, originX: isRtl ? 'right' : 'left' }
              : { scaleY: transitionCoef, originY: 'bottom' }),
          }}
        />
      </m.div>
    </LazyMotion>
  );
});

Slider.displayName = 'Slider';
