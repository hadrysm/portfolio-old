import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const useObserverAnimation = (
  { threshold = 0.2, control = 'visible', ...rest } = {},
  selfControl = false,
) => {
  const controls = useAnimation();
  const [refView, inView] = useInView({ threshold, triggerOnce: true, ...rest });

  useEffect(() => {
    if (!selfControl && inView) {
      controls.start(control);
    }
  }, [inView, selfControl]);

  return [refView, controls, inView];
};
