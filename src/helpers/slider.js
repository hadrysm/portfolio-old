export const wrap = (min, max, page) => {
  const rangeSize = max - min;
  return ((((page - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const getSwipePower = (offsetX, velocityX) => Math.abs(offsetX) * velocityX;
