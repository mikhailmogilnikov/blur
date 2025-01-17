import { SquircleSize } from 'src/types';

export const getMinBorderRadius = (squircleSize: SquircleSize) => {
  const { borderRadius, borderRadiuses } = squircleSize;

  if (borderRadius) return borderRadius;

  const corners = Object.values(borderRadiuses);
  const filteredCorners = corners.filter((corner) => corner > 0);

  if (filteredCorners.length === 0) return 0;

  return Math.min(...filteredCorners);
};
