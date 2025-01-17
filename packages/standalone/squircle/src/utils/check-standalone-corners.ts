import { SquircleSize } from 'src/types';

export const checkIsHaveCustomStandaloneCorners = (squircleSize: SquircleSize) => {
  const { borderRadius, borderRadiuses } = squircleSize;

  const standaloneCorners = Object.values(borderRadiuses).every(
    (corner) => corner === borderRadius,
  );

  return !standaloneCorners;
};
