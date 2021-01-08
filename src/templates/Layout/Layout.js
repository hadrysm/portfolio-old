import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/organisms/Header/Header';
import Menu from 'components/organisms/Menu/Menu';
import TransitionBox from 'components/organisms/TransitionBox/TransitionBox';

import { Main } from './Layout.style';

const Layout = ({ children }) => (
  <>
    <Header />
    <Menu />
    <Main>{children}</Main>
    <TransitionBox />
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
