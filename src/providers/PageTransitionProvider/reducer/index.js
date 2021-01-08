import { SET_TRANSITION, RESET, SET_REDIRECT } from './types';

// setAnimatedFinish

const transitionInitialState = {
  // pageTransitionFinish: false,
  playTransition: true,
  to: null,
  canRedirect: false,
};

const transitionReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TRANSITION:
      return {
        ...state,
        playTransition: payload.playTransition,
        to: payload.to,
      };

    case SET_REDIRECT:
      return {
        ...state,
        canRedirect: payload.canRedirect,
      };

    case RESET:
      return {
        ...state,
        canRedirect: false,
        playTransition: true,
      };

    default:
      throw new Error('Invalid action');
  }
};

export { transitionReducer, transitionInitialState };
