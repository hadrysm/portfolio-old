import React, { createContext, useContext, useEffect, useState } from 'react';
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
    throw new Error('usePageThemeState must be used within a PageThemeProvider');
  }

  return pageColorsTheme;
};

const usePageThemeDispatch = color => {
  const setPageTheme = useContext(PageThemeDispatchContext);
  if (setPageTheme === undefined) {
    throw new Error('usePageThemeDispatch must be used within a PageThemeProvider');
  }

  useEffect(() => {
    setPageTheme({ primary: color.primary || color });
  }, [setPageTheme, color]);
};

PageThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { PageThemeProvider, usePageThemeState, usePageThemeDispatch };
