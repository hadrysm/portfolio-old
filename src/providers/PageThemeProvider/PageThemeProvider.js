import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { pageTheme } from 'assets/styles/theme';

const PageThemeContextState = createContext();
const PageThemeDispatchContext = createContext();

const PageThemeProvider = ({ children }) => {
  const [pageColorsTheme, setPageColorsTheme] = useState(pageTheme.home);

  return (
    <PageThemeContextState.Provider value={pageColorsTheme}>
      <PageThemeDispatchContext.Provider value={setPageColorsTheme}>
        {children}
      </PageThemeDispatchContext.Provider>
    </PageThemeContextState.Provider>
  );
};

const usePageThemeState = () => {
  const pageColorsTheme = useContext(PageThemeContextState);
  if (pageColorsTheme === undefined) {
    throw new Error('usePageColorsState must be used within a NavigationStateProvider');
  }

  return pageColorsTheme;
};

const usePageThemeDispatch = () => {
  const setPageTheme = useContext(PageThemeDispatchContext);
  if (setPageTheme === undefined) {
    throw new Error('useNavigationDispatch must be used within a NavigationStateProvider');
  }

  return setPageTheme;
};

PageThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { PageThemeProvider, usePageThemeState, usePageThemeDispatch };
