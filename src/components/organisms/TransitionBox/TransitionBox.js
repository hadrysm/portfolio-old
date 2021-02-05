import React from 'react';
import { AnimatePresence } from 'framer-motion';

import {
  usePageTransitionState,
  usePageTransitionDispatch,
} from 'providers/PageTransitionProvider/PageTransitionProvider';

import { pageTransitionVariants } from 'animations';

import { Wrapper, Box } from './TransitionBox.style';

const { parent, child } = pageTransitionVariants;

const TransitionBox = () => {
  const { playTransition } = usePageTransitionState();
  const { enterAnimation } = usePageTransitionDispatch();

  return (
    <AnimatePresence>
      {playTransition && (
        <Wrapper
          key="TransitionBox"
          variants={parent}
          initial="visible"
          animate="hidden"
          exit="visible"
          onAnimationComplete={enterAnimation}
          aria-hidden
        >
          <Box variants={child} />
          <Box variants={child} />
          <Box variants={child} />
          <Box variants={child} />
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export { TransitionBox };
