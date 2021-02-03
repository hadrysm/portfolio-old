const infinityTransition = {
  repeat: Infinity,
  repeatType: 'reverse',
  duration: 0.8,
  ease: 'easeInOut',
};

const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

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

export const projectCardVariants = {
  mask: {
    hidden: {
      y: '100%',
      skewY: 20,
      transition: {
        ...transition,
      },
    },

    hover: {
      y: 0,
      skewY: 0,
      transition: {
        ...transition,
        duration: 0.8,
      },
    },
  },

  text: {
    hover: {
      y: -20,
      transition: {
        ...transition,
        duration: 0.8,
      },
    },
  },

  image: {
    hover: {
      scale: 1.15,
      transition: {
        ...transition,
        duration: 1.2,
      },
    },
  },
};

export const pageTransitionVariants = {
  parent: {
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
  },

  child: {
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
  },
};
