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
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  },
};
