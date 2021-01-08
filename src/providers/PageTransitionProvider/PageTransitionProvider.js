import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { transitionReducer, transitionInitialState } from './reducer';
import { SET_TRANSITION } from './reducer/types';

const PageTransitionContextState = createContext();
const PageTransitionDispatchContext = createContext();

const PageTransitionProvider = ({ children, location: { pathName = '/' } }) => {
  const [{ canRedirect, playTransition, to }, dispatch] = useReducer(transitionReducer, {
    ...transitionInitialState,
    to: pathName,
  });

  useEffect(() => {
    if (canRedirect && !playTransition) {
      navigate(to);
    }
    if (canRedirect) {
      dispatch({ type: 'RESET' });
    }
  }, [canRedirect]);

  return (
    <PageTransitionContextState.Provider value={{ canRedirect, playTransition, to }}>
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

  const { playTransition, canRedirect } = state;

  return { playTransition, canRedirect };
};

const usePageTransitionDispatch = () => {
  const dispatch = useContext(PageTransitionDispatchContext);
  if (dispatch === undefined) {
    throw new Error('usePageTransitionDispatch must be used within a PageTransitionProvider');
  }

  const runPageTransition = (to, playTransition = false) =>
    dispatch({
      type: SET_TRANSITION,
      payload: {
        to,
        playTransition,
      },
    });

  const setRedirect = canRedirect =>
    dispatch({
      type: 'SET_REDIRECT',
      payload: {
        canRedirect,
      },
    });

  return { runPageTransition, setRedirect };
};

PageTransitionProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export { PageTransitionProvider, usePageTransitionState, usePageTransitionDispatch };
