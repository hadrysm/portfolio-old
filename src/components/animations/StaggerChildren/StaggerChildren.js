import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const StaggerChildren = ({ children, duration = 0.5, delay = 0, ...props }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: i * delay,
      },
    }),
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible" {...props}>
      {children}
    </motion.div>
  );
};

StaggerChildren.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

export { StaggerChildren };
