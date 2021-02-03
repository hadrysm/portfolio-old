const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

export const navigationVariants = {
  hidden: {
    x: '-100%',
  },
  visible: {
    x: 0,
    transition: {
      ...transition,
    },
  },
  exit: {
    x: '-100%',
    transition: {
      ...transition,
      delay: 0.3,
    },
  },
};
