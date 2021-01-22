import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { usePageThemeState } from 'providers/PageThemeProvider/PageThemeProvider';
import { GlobalStyled } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';

const SCThemeProvider = ({ children }) => {
  const pageTheme = usePageThemeState();

  const [isVisibility, setIsVisibility] = useState(false);

  useEffect(() => {
    setIsVisibility(true);
  }, [isVisibility]);

  return (
    <ThemeProvider theme={{ ...theme, ...pageTheme }}>
      <GlobalStyled isVisibility={isVisibility} />
      {children}
    </ThemeProvider>
  );
};

SCThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { SCThemeProvider };
