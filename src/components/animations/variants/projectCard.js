const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

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
      },
    },
  },

  text: {
    hover: {
      y: -20,
      transition: {
        ...transition,
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
