import React from 'react';

import LangList from 'components/molecules/LangList/LangList';
import NavList from 'components/molecules/NavList/NavList';

import { Wrapper, InnerWrapper } from './Menu.style';

const Menu = () => (
  <Wrapper>
    <InnerWrapper>
      <LangList />
      <NavList />
    </InnerWrapper>
  </Wrapper>
);

export default Menu;
