import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const useObserverAnimation = ({ threshold = 0.2, control = 'visible', ...rest } = {}) => {
  const controls = useAnimation();
  const [refView, inView] = useInView({ threshold, triggerOnce: true, ...rest });

  useEffect(() => {
    if (inView) {
      controls.start(control);
    }
  }, [inView]);

  return [refView, controls];
};
