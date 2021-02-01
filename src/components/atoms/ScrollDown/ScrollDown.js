import React from 'react';
import PropTypes from 'prop-types';
import { BiArrowBack as ArrowIcon } from 'react-icons/bi';
import { motion } from 'framer-motion';

import { scrollDownArrowVariants, Animated } from 'animations';

import { Wrapper, Text, Flex } from './ScrollDown.style';

const ScrollDown = ({ top = 85, left = 35 }) => (
  <Wrapper top={top} left={left}>
    <Animated.FromDirection from="left" delay={0.6} duration={0.8}>
      <Flex>
        <motion.span variants={scrollDownArrowVariants} animate="animate">
          <ArrowIcon />
        </motion.span>
        <Text>scroll</Text>
      </Flex>
    </Animated.FromDirection>
  </Wrapper>
);

ScrollDown.propTypes = {
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { ScrollDown };
