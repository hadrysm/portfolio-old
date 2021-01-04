import React from 'react';

import PropTypes from 'prop-types';
import Logo from 'components/atoms/Logo/Logo';
import Burger from 'components/atoms/Burger/Burger';

const Layout = ({ children }) => (
  <>
    <header>
      <Logo />
      <Burger />
    </header>
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
