import React from 'react';

import LangList from 'components/molecules/LangList/LangList';
import NavList from 'components/molecules/NavList/NavList';
import SocialList from 'components/molecules/SocialList/SocialList';

import { useNavigationState } from 'providers/NavigationStateProvider/NavigationStateProvider';
import { Wrapper, Nav } from './Menu.style';

const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      ...transition,
    },
  },
  closed: {
    x: '-100%',
    transition: {
      delay: 0.6,
      ...transition,
    },
  },
};

const parentVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.4, staggerDirection: -1 },
  },
  closed: {
    transition: { staggerChildren: 0.1 },
  },
};

const Menu = () => {
  const isMenuOpen = useNavigationState();
  return (
    <Wrapper
      variants={sidebarVariants}
      initial={false}
      animate={isMenuOpen ? 'open' : 'closed'}
      transition={transition}
    >
      <Nav variants={parentVariants}>
        <LangList />
        <NavList />
        <SocialList />
      </Nav>
    </Wrapper>
  );
};

export default Menu;
