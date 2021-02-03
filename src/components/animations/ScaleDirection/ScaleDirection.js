import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, MotionWrapper } from './ScaleDirection.style';

const transition = { ease: [0.7, 0, 0.3, 1] };

const ScaleDirection = ({ children, duration = 0.8, delay = 0, from = 'top', ...props }) => {
  const [isOverflow, setIsOverflow] = useState(true);
  const ref = useRef(null);

  const variants = {
    hidden: {
      ...(typeof from === 'number' && { scale: from }),

      ...(typeof from === 'string' && from.includes('top') && { scaleY: 0 }),
      ...(typeof from === 'string' && from.includes('bottom') && { scaleY: 0 }),
      ...(typeof from === 'string' && from.includes('left') && { scaleX: 0 }),
      ...(typeof from === 'string' && from.includes('right') && { scaleX: 0 }),
    },
    visible: (i = 1) => ({
      scaleY: 1,
      scaleX: 1,
      scale: 1,
      transition: {
        ...transition,
        duration,
        delay: i * delay,
      },
    }),
  };

  return (
    <Wrapper isOverflow={isOverflow}>
      <MotionWrapper
        from={from}
        variants={variants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => {
          setIsOverflow(false);
          if (ref.current !== null) {
            ref.current.style.transform = '';
          }
        }}
        {...props}
      >
        {children}
      </MotionWrapper>
    </Wrapper>
  );
};

ScaleDirection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  isOverflow: PropTypes.bool,
  from: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { ScaleDirection };
