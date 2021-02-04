const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const sliderVariants = {
  enter: direction => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
    transition: {
      ...transition,
    },
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      ...transition,
    },
  },
  exit: direction => ({
    zIndex: 0,
    x: direction < 0 ? 30 : -30,
    opacity: 0,
    transition: {
      ...transition,
    },
  }),
};
