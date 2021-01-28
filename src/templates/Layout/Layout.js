import React from 'react';
import PropTypes from 'prop-types';

import { Header } from 'components/organisms/Header/Header';
import { Menu } from 'components/organisms/Menu/Menu';
import { Footer } from 'components/organisms/Footer/Footer';
import { TransitionBox } from 'components/organisms/TransitionBox/TransitionBox';

import { Main, Wrapper } from './Layout.style';

const Layout = ({ children }) => (
  <>
    <Wrapper>
      <Header />
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
    <TransitionBox />
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { Layout };
