import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyled from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';

const TProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyled />
    {children}
  </ThemeProvider>
);

TProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default TProvider;
