import React from 'react';
import PropTypes from 'prop-types';
import { BiArrowBack as ArrowIcon } from 'react-icons/bi';
import { motion } from 'framer-motion';

import { Wrapper, Text } from './ScrollDown.style';

const scrollVariants = {
  hidden: {
    y: 200,
    rotate: -90,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const arrowVariants = {
  animate: {
    x: [-5, -15],
    transition: {
      yoyo: Infinity,
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const ScrollDown = ({ top = 85, left = 35 }) => (
  <Wrapper top={top} left={left} variants={scrollVariants} initial="hidden" animate="visible">
    <motion.span variants={arrowVariants} animate="animate">
      <ArrowIcon />
    </motion.span>
    <Text>scroll</Text>
  </Wrapper>
);

ScrollDown.propTypes = {
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { ScrollDown };
