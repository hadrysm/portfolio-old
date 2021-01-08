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
    throw new Error('usePageThemeState must be used within a PageThemeProvider');
  }

  return pageColorsTheme;
};

const usePageThemeDispatch = () => {
  const setPageTheme = useContext(PageThemeDispatchContext);
  if (setPageTheme === undefined) {
    throw new Error('usePageThemeDispatch must be used within a PageThemeProvider');
  }

  const handleChangeTheme = ({ primary }) => setPageTheme({ primary });

  return handleChangeTheme;
};

PageThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { PageThemeProvider, usePageThemeState, usePageThemeDispatch };
