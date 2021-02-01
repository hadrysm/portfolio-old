import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Header } from 'components/organisms/Header/Header';
import { Menu } from 'components/organisms/Menu/Menu';
import { Footer } from 'components/organisms/Footer/Footer';
import { TransitionBox } from 'components/organisms/TransitionBox/TransitionBox';

import { Main, Wrapper } from './Layout.style';

const Layout = ({ children }) => {
  useEffect(() => {
    console.log(
      "%c['🥚', '🐤'].sort(); 😵",
      'display: inline-block ; font-size: 20px ; border: 3px solid #e7900e ; border-radius: 10px ; ' +
        'padding: 15px ; margin: 20px ;',
    );
  }, []);

  return (
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
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { Layout };
