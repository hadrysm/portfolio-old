import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { Wrapper, Img } from './Slider.style';
import { useSlider } from '../../../hooks/useSlider';

const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };
const sliderVariants = {
  enter: direction => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
    transition: {
      ...transition,
    },
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      ...transition,
    },
  },
  exit: direction => ({
    zIndex: 0,
    x: direction < 0 ? 90 : -90,
    opacity: 0,
    transition: {
      ...transition,
    },
  }),
};

const swipingThreshold = 10000;
const nextSlideTime = 5000;

const Slider = ({ images }) => {
  const { state, currentIndex, handleDrag } = useSlider({
    data: images,
    nextSlideTime,
    swipingThreshold,
  });

  const [page, direction] = state;

  const { fluid, alt } = images[currentIndex];

  return (
    <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
      <Wrapper
        key={page}
        variants={sliderVariants}
        initial="enter"
        animate="center"
        exit="exit"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7}
        onDragEnd={(e, info) => handleDrag(e, info)}
      >
        <Img fluid={fluid} alt={alt} />
      </Wrapper>
    </AnimatePresence>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object, PropTypes.string),
};

export { Slider };
