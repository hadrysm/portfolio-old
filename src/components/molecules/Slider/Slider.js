import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { sliderVariants } from 'animations';

import { useSlider } from 'hooks/useSlider';

import { Wrapper, Img } from './Slider.style';

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
