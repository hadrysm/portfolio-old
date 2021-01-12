import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { localeReducer } from './reducer';
import { UPDATE_LOCALE } from './reducer/types';

const LocaleContextState = createContext();
const LocaleDispatchContext = createContext();

const LocaleProvider = ({ children, locale = 'pl' }) => {
  const [state, dispatch] = useReducer(localeReducer, { activeLocale: locale });

  return (
    <LocaleContextState.Provider value={state}>
      <LocaleDispatchContext.Provider value={dispatch}>{children}</LocaleDispatchContext.Provider>
    </LocaleContextState.Provider>
  );
};

const useLocaleState = () => {
  const state = useContext(LocaleContextState);
  if (state === undefined) {
    throw new Error('useLocaleState must be used within a LocaleProvider');
  }

  const { activeLocale } = state;

  return {
    activeLocale,
  };
};

const useLocaleDispatch = () => {
  const dispatch = useContext(LocaleDispatchContext);
  if (dispatch === undefined) {
    throw new Error('useLocaleDispatch must be used within a LocaleProvider');
  }

  const updateLocale = localePath =>
    dispatch({
      type: UPDATE_LOCALE,
      payload: {
        locale: localePath,
      },
    });

  return { updateLocale };
};

LocaleProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  locale: PropTypes.string,
};

export { LocaleProvider, useLocaleState, useLocaleDispatch };
