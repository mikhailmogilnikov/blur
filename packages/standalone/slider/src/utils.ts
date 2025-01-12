const exponentialDecrease = (x: number, coef: number) => {
  return Math.exp(x / coef);
};

export const calculateStretchAnimation = (
  isBelowZero: boolean,
  isHorisontal: boolean,
  isRtl: boolean,
  width: number,
  newTrackWidth: number,
  stretchCoefficient: number,
) => {
  const boundOffset = isBelowZero
    ? width - (width - newTrackWidth)
    : -(newTrackWidth - width);

  const bias = exponentialDecrease(boundOffset, stretchCoefficient);
  const normalizedBias = bias / 5;
  const reversedBias = 0.2 - normalizedBias;

  const sideBias = 10 - bias * 10;

  let animation;

  if (isBelowZero) {
    animation = isHorisontal
      ? {
          scaleX: 1 + reversedBias,
          scaleY: 1 - reversedBias,
          x: isRtl ? `${sideBias}%` : `-${sideBias}%`,
        }
      : {
          scaleX: 1 - reversedBias,
          scaleY: 1 + reversedBias,
          y: `${sideBias}%`,
        };
  } else {
    animation = isHorisontal
      ? {
          scaleX: 1 + reversedBias,
          scaleY: 1 - reversedBias,
          x: isRtl ? `-${sideBias}%` : `${sideBias}%`,
        }
      : {
          scaleX: 1 - reversedBias,
          scaleY: 1 + reversedBias,
          y: `-${sideBias}%`,
        };
  }

  return animation;
};

export const getArrowAnimation = (
  isBelowZero: boolean,
  isHorisontal: boolean,
  isRtl: boolean,
) => {
  const reversedBias = 0.03;
  const sideBias = 3;

  let animation;

  if (isBelowZero) {
    animation = isHorisontal
      ? {
          scaleX: 1 + reversedBias,
          scaleY: 1 - reversedBias,
          x: isRtl ? `${sideBias}%` : `-${sideBias}%`,
        }
      : {
          scaleX: 1 - reversedBias,
          scaleY: 1 + reversedBias,
          y: `${sideBias}%`,
        };
  } else {
    animation = isHorisontal
      ? {
          scaleX: 1 + reversedBias,
          scaleY: 1 - reversedBias,
          x: isRtl ? `-${sideBias}%` : `${sideBias}%`,
        }
      : {
          scaleX: 1 - reversedBias,
          scaleY: 1 + reversedBias,
          y: `-${sideBias}%`,
        };
  }

  return animation;
};

export const normValue = (value: number) => parseFloat(value.toFixed(3));
