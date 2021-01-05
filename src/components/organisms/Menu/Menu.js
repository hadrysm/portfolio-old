import React from 'react';

import LangList from 'components/molecules/LangList/LangList';

import { Wrapper, InnerWrapper } from './Menu.style';

const Menu = () => (
  <Wrapper>
    <InnerWrapper>
      <LangList />
    </InnerWrapper>
  </Wrapper>
);

export default Menu;
