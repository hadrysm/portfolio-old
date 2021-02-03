import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, duration = 0.5, ...props }) => {
  const variants = {
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        delay: i * delay,
        duration,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div {...props} variants={variants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

FadeIn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  from: PropTypes.string,
};

export { FadeIn };
