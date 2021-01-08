import { ENTER_ANIMATION, EXIT_ANIMATION } from './types';

// setAnimatedFinish

const transitionInitialState = {
  // pageTransitionFinish: false,
  playTransition: true,
};

const transitionReducer = (state, { type }) => {
  switch (type) {
    case EXIT_ANIMATION:
      return {
        ...state,
        playTransition: false,
      };

    case ENTER_ANIMATION:
      return {
        ...state,
        playTransition: true,
      };

    default:
      throw new Error('Invalid action');
  }
};

export { transitionReducer, transitionInitialState };
