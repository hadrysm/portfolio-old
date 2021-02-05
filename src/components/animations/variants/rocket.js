const transition = { ease: [0.6, 0.01, -0.05, 0.9] };

export const rocketVariants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ...transition,
      duration: 1.2,
      delay: 0.7,
    },
  },
  fly: {
    x: [0, 5, -10, 0, 15],
    rotate: [0, 5, -5],
    y: -10,
    scale: 0.9,
    transition: {
      x: {
        ...transition,
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 3,
        ease: 'easeInOut',
      },
      y: {
        ...transition,
        duration: 2,
      },
      scale: {
        ...transition,
        duration: 2,
      },
      rotate: {
        ...transition,
        delay: 1,
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 3,
        ease: 'easeInOut',
      },
    },
  },
  buttonOn: {
    fill: '#0cce6b',
    opacity: 1,
  },

  buttonOff: {
    fill: '#f5423c',
    opacity: 1,
  },
};
