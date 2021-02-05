import { useEffect } from 'react';
import { animate, useCycle, useMotionValue } from 'framer-motion';
import { interpolate } from 'flubber';

const DEFAULT_NEXT_SHAPE_TIMEOUT = 2000;
const ONE_SECOND_IN_MILISECOND = 1000;

export const useSVGMorph = (d, config = {}) => {
  const [shape, cycleShape] = useCycle(...Object.keys(d));
  const value = useMotionValue(d[shape]);

  useEffect(() => {
    const interpolator = interpolate(value.get(), d[shape]);

    animate(0, 1, {
      ...config,
      duration: config.duration || DEFAULT_NEXT_SHAPE_TIMEOUT / ONE_SECOND_IN_MILISECOND,

      onUpdate: progress => value.set(interpolator(progress)),
    });

    const id = setInterval(
      cycleShape,
      config.duration * ONE_SECOND_IN_MILISECOND || DEFAULT_NEXT_SHAPE_TIMEOUT,
    );

    return () => clearInterval(id);
  }, [config, d, value, cycleShape]);

  return value;
};
