import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

// initial, animate => inherited from parent

const Custom = forwardRef(({ children, initial, animate, variants = {}, ...props }, ref) => (
  <Wrapper ref={ref} initial={initial} animate={animate} variants={variants} {...props}>
    {children}
  </Wrapper>
));
Custom.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  initial: PropTypes.string,
  animate: PropTypes.string,
  variants: PropTypes.objectOf(PropTypes.object),
};

export { Custom };
