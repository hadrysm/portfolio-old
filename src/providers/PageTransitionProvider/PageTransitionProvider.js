import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { transitionReducer, transitionInitialState } from './reducer';
import { EXIT_ANIMATION, ENTER_ANIMATION } from './reducer/types';

const PageTransitionContextState = createContext();
const PageTransitionDispatchContext = createContext();

const PageTransitionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transitionReducer, transitionInitialState);

  useEffect(() => {
    if (state.canScroll) {
      document.body.classList.remove('no-scroll');
    } else {
      document.body.classList.add('no-scroll');
    }
  }, [state.canScroll]);

  return (
    <PageTransitionContextState.Provider value={state}>
      <PageTransitionDispatchContext.Provider value={dispatch}>
        {children}
      </PageTransitionDispatchContext.Provider>
    </PageTransitionContextState.Provider>
  );
};

const usePageTransitionState = () => {
  const state = useContext(PageTransitionContextState);
  if (state === undefined) {
    throw new Error('usePageTransitionState must be used within a PageTransitionProvider');
  }

  const { playTransition } = state;

  return { playTransition };
};

const usePageTransitionDispatch = () => {
  const dispatch = useContext(PageTransitionDispatchContext);
  if (dispatch === undefined) {
    throw new Error('usePageTransitionDispatch must be used within a PageTransitionProvider');
  }

  const exitAnimation = () =>
    dispatch({
      type: EXIT_ANIMATION,
    });

  const enterAnimation = () =>
    dispatch({
      type: ENTER_ANIMATION,
    });

  return { exitAnimation, enterAnimation };
};

PageTransitionProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { PageTransitionProvider, usePageTransitionState, usePageTransitionDispatch };
