const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

export const chartVariants = {
  tree: {
    hidden: {
      opacity: 0,
      y: '100%',
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        ...transition,
        duration: 1.2,
        delay: 0.5,
      },
    },
  },

  character: {
    hidden: {
      opacity: 0,
      x: '100%',
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        ...transition,
        duration: 1.2,
        delay: 1.5,
      },
    },
  },

  parentStagger: {
    visible: {
      transition: {
        ...transition,
        staggerChildren: 0.5,
        delayChildren: 0.4,
      },
    },
  },

  buble: {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        ...transition,
        duration: 1,
      },
    },
  },

  rectangle: {
    hidden: {
      originY: '100%',
      scaleY: 0,
    },
    visible: {
      scaleY: 1,

      transition: {
        ...transition,
        duration: 1,
      },
    },
  },

  line: {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        ...transition,
        duration: 1.6,
      },
    },
  },
};
