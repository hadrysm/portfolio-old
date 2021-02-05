const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

export const chartVariants = {
  hiddenY: {
    opacity: 0,
    y: '100%',
  },

  hiddenX: {
    opacity: 0,
    x: '100%',
  },

  visible: {
    opacity: 1,
    y: 0,
    x: 0,

    transition: {
      ...transition,
      duration: 1.2,
    },
  },

  stagger: {
    visible: {
      transition: {
        ...transition,
        staggerChildren: 0.2,
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

  line: {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        ...transition,
        duration: 1.6,
        opacity: {
          duration: 0.2,
        },
      },
    },
  },
};
