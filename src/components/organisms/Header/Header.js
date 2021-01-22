import React from 'react';

import { Logo } from 'components/atoms/Logo/Logo';
import { Burger } from 'components/atoms/Burger/Burger';

import { StyledHeader } from './Header.style';

const Header = () => (
  <StyledHeader>
    <Logo />
    <Burger />
  </StyledHeader>
);

export { Header };
