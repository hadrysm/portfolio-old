import React from 'react';

import {
  useNavigationState,
  useNavigationDispatch,
} from 'providers/NavigationStateProvider/NavigationStateProvider';

import { BurgerButton, Wrapper, Line } from './Burger.styles';

const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };

// const transition = { duration: 0.4, ease: [0.7, 0, 0.3, 1] }

const firstLine = {
  open: {
    y: 4,
  },
  closed: {
    scaleX: 0.8,
  },
  hover: {
    scaleX: 1,
  },
};

const secondLine = {
  hover: {
    x: 0,
  },
};

const thirdLine = {
  open: {
    y: -4,
  },
  closed: {
    scaleX: 0.6,
  },
  hover: {
    scaleX: 1,
  },
};

const Burger = () => {
  const isMenuOpen = useNavigationState();
  const { toggleMenu } = useNavigationDispatch();

  return (
    <BurgerButton
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
