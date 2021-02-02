import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Word } from './Words.style';

const Words = ({ children, separator = ' ', duration = 0.15, delay = 0, ...props }) => {
  const [isOverflow, setIsOverflow] = useState(true);

  const words = children.split(separator);

  const container = {
    visible: (i = 1) => ({
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
      },
    },
  };

  return (
    <Wrapper
      isOverflow={isOverflow}
      initial="hidden"
      animate="visible"
      variants={container}
      onAnimationComplete={() => setIsOverflow(false)}
      {...props}
    >
      {words.map((word, index) => (
        // eslint-disable-next-line
        <Word key={index} aria-hidden variants={child}>
          {word}
          &nbsp;
        </Word>
      ))}
    </Wrapper>
  );
};

Words.propTypes = {
  children: PropTypes.string.isRequired,
  separator: PropTypes.string,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

export { Words };
