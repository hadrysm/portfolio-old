const infinityTransition = {
  repeat: Infinity,
  repeatType: 'reverse',
  duration: 0.8,
  ease: 'easeInOut',
};

export const scrollDownArrowVariants = {
  animate: {
    x: [-5, -15],
    transition: {
      ...infinityTransition,
    },
  },
};

export const spinnerVariants = {
  container: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  },
  child: {
    animate: {
      y: [0, 20],
      transition: {
        ...infinityTransition,
      },
    },
  },
};
