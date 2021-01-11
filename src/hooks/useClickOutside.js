import { useEffect, useCallback, useRef } from 'react';

export const useClickOutside = callback => {
  const ref = useRef(null);

  if (callback === undefined) {
    throw new Error('useClickOutside => callback is required');
  }

  const handleClick = e => {
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }
    callback();
  };

  const handleClickCallback = useCallback(handleClick, [callback, ref]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickCallback);

    return () => document.removeEventListener('mousedown', handleClickCallback);
  }, [handleClickCallback, ref]);

  return ref;
};
