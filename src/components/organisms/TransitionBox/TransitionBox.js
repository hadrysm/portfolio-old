import React from 'react';
import { AnimatePresence } from 'framer-motion';

import {
  usePageTransitionState,
  usePageTransitionDispatch,
} from 'providers/PageTransitionProvider/PageTransitionProvider';
import { Wrapper, Box } from './TransitionBox.style';

const transition = { ease: [0.6, 0.01, 0.05, 0.9] };
// const transition = { ease: [1, 0, 0, 1] };

const parentVariants = {
  visible: {
    transition: {
      ...transition,
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
  hidden: {
    transition: {
      ...transition,
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  visible: {
    scaleY: 1,
    transition: {
      ...transition,
      duration: 1.1,
    },
  },
  hidden: {
    scaleY: 0,
    transition: {
      ...transition,
      duration: 1.1,
    },
  },
};

const TransitionBox = () => {
  const { playTransition } = usePageTransitionState();
  const { enterAnimation } = usePageTransitionDispatch();

  return (
    <AnimatePresence>
      {playTransition && (
        <Wrapper
          variants={parentVariants}
          initial="visible"
          animate="hidden"
          exit="visible"
          onAnimationComplete={enterAnimation}
          aria-hidden
        >
          <Box variants={childVariants} />
          <Box variants={childVariants} />
          <Box variants={childVariants} />
          <Box variants={childVariants} />
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export { TransitionBox };
