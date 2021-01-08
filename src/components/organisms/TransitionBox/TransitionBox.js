import React from 'react';
import { AnimatePresence } from 'framer-motion';

import Logo from 'components/atoms/Logo/Logo';

import { usePageTransitionState } from 'providers/PageTransitionProvider/PageTransitionProvider';
import { Wrapper, Box, LogoWrapper } from './TransitionBox.style';
import { usePageTransitionDispatch } from '../../../providers/PageTransitionProvider/PageTransitionProvider';

const transition = { ease: [0.6, 0.01, -0.05, 0.9] };
// const transition = { ease: [1, 0, 0, 1] };

const parentVariants = {
  visible: {
    transition: {
      ...transition,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  hidden: {
    transition: {
      ...transition,
      staggerChildren: 0.2,
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

const childVariantLogo = {
  visible: {
    scale: 2,
    rotate: 0,
    transition: {
      ...transition,
      duration: 0.5,
      delay: 0.8,
    },
  },
  hidden: {
    scale: 0,
    rotate: -20,
    transition: {
      ...transition,
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const TransitionBox = () => {
  const { playTransition, canRedirect } = usePageTransitionState();
  const { setRedirect } = usePageTransitionDispatch();

  const onAnimationComplete = () => setRedirect(!canRedirect);

  return (
    <AnimatePresence>
      {playTransition && (
        <Wrapper
          variants={parentVariants}
          initial="visible"
          animate="hidden"
          exit="visible"
          onAnimationComplete={onAnimationComplete}
          aria-hidden
        >
          <Box variants={childVariants} />
          <LogoWrapper variants={childVariantLogo}>
            <Logo />
          </LogoWrapper>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

export default TransitionBox;