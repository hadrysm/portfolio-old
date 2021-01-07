import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { usePageThemeColorsState } from 'providers/PageThemeColorsProvider/PageThemeColorsProvider';
import GlobalStyled from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';

const SCThemeProvider = ({ children }) => {
  const pageTheme = usePageThemeColorsState();

  return (
    <ThemeProvider theme={{ ...theme, ...pageTheme }}>
      <GlobalStyled />
      {children}
    </ThemeProvider>
  );
};

SCThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { SCThemeProvider };
