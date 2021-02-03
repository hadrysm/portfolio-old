import { ENTER_ANIMATION, EXIT_ANIMATION } from './types';

const transitionInitialState = {
  playTransition: true,
  canScroll: true,
};

const transitionReducer = (state, { type }) => {
  switch (type) {
    case EXIT_ANIMATION:
      return {
        ...state,
        playTransition: false,
        canScroll: false,
      };

    case ENTER_ANIMATION:
      return {
        ...state,
        playTransition: true,
        canScroll: true,
      };

    default:
      throw new Error('Invalid action');
  }
};

export { transitionReducer, transitionInitialState };
