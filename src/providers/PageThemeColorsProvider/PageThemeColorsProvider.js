import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { pageTheme } from 'assets/styles/theme';

const PageThemeColorsContext = createContext();
const PageThemeColorsDispatchContext = createContext();

const PageThemeColorsProvider = ({ children }) => {
  const [pageColorsTheme, setPageColorsTheme] = useState(pageTheme.home);

  return (
    <PageThemeColorsContext.Provider value={pageColorsTheme}>
      <PageThemeColorsDispatchContext.Provider value={setPageColorsTheme}>
        {children}
      </PageThemeColorsDispatchContext.Provider>
    </PageThemeColorsContext.Provider>
  );
};

const usePageThemeColorsState = () => {
  const pageColorsTheme = useContext(PageThemeColorsContext);
  if (pageColorsTheme === undefined) {
    throw new Error('usePageColorsState must be used within a NavigationStateProvider');
  }

  return pageColorsTheme;
};

const usePageThemeColorsDispatch = () => {
  const setPageTheme = useContext(PageThemeColorsDispatchContext);
  if (setPageTheme === undefined) {
    throw new Error('useNavigationDispatch must be used within a NavigationStateProvider');
  }

  return setPageTheme;
};

PageThemeColorsProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { PageThemeColorsProvider, usePageThemeColorsState, usePageThemeColorsDispatch };
