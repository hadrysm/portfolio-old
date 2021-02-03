import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { spinnerVariants } from 'animations';

import { Wrapper, Circle } from './Spinner.style';

const { container, child } = spinnerVariants;

const Spinner = ({ isLoading, ...props }) => (
  <AnimatePresence>
    {isLoading && (
      <Wrapper initial="hidden" animate="animate" exit="exit" variants={container} {...props}>
        <Circle variants={child} />
        <Circle variants={child} />
        <Circle variants={child} />
      </Wrapper>
    )}
  </AnimatePresence>
);

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export { Spinner };
