import React from 'react';

import { Animated } from 'animations';

import { Logo } from 'components/atoms/Logo/Logo';
import { Burger } from 'components/atoms/Burger/Burger';

import { StyledHeader, InnerWrapper } from './Header.style';

const Header = () => (
  <StyledHeader>
    <Animated.FromDirection from="top" delay={0.3} duration={0.6}>
      <InnerWrapper>
        <Logo />
        <Burger />
      </InnerWrapper>
    </Animated.FromDirection>
  </StyledHeader>
);

export { Header };
