import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { Wrapper, Circle } from './Spinner.style';

const transition = { duration: 0.6, ease: 'easeIn' };

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const circleVariants = {
  animate: {
    y: [0, 20],
    transition: {
      yoyo: Infinity,
      ...transition,
    },
  },
};

const Spinner = ({ isLoading, ...props }) => (
  <AnimatePresence>
    {isLoading && (
      <Wrapper
        initial="hidden"
        animate="animate"
        exit="exit"
        variants={containerVariants}
        {...props}
      >
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Wrapper>
    )}
  </AnimatePresence>
);

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export { Spinner };
