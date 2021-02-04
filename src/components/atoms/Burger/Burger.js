import React from 'react';

import {
  useNavigationState,
  useNavigationDispatch,
} from 'providers/NavigationStateProvider/NavigationStateProvider';

import { burgerVariants } from 'animations';
import { BurgerButton, Wrapper, Line } from './Burger.styles';

const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };

const { firstLine, secondLine, thirdLine } = burgerVariants;

const Burger = () => {
  const isMenuOpen = useNavigationState();
  const { toggleMenu } = useNavigationDispatch();

  return (
    <BurgerButton
      aria-label="menu burger"
      type="button"
      onClick={toggleMenu}
      animate={isMenuOpen ? 'open' : 'closed'}
      whileHover="hover"
    >
      <Wrapper>
        <Line variants={firstLine} transition={transition} />
        <Line variants={secondLine} transition={transition} />
        <Line variants={thirdLine} transition={transition} />
      </Wrapper>
    </BurgerButton>
  );
};

export { Burger };
