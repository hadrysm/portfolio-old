import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/organisms/Header/Header';

import { Main } from './Layout.style';

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
