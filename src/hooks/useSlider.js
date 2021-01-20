import { useEffect, useState, useCallback } from 'react';
import { wrap, getSwipePower } from 'helpers/slider';

export const useSlider = ({ data, swipingThreshold = 10000, nextSlideTime = 5000 }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = wrap(0, data.length, page);

  const handleChangeSlide = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  const handleChangeSlideCallback = useCallback(handleChangeSlide, [page]);

  const handleDrag = (e, { offset, velocity }) => {
    const swipe = getSwipePower(offset.x, velocity.x);

    if (swipe < -swipingThreshold) {
      handleChangeSlideCallback(1);
    } else if (swipe > swipingThreshold) {
      handleChangeSlideCallback(-1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => handleChangeSlideCallback(1), nextSlideTime);

    return () => clearInterval(intervalId);
  }, [handleChangeSlide]);

  return {
    state: [page, direction],
    currentIndex,
    handleDrag,
  };
};
