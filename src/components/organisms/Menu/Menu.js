import React, { useState } from 'react';

import { PageOverlay } from 'components/atoms/PageOverlay/PageOverlay';
import { LangList } from 'components/molecules/LangList/LangList';
import { NavList } from 'components/molecules/NavList/NavList';
import { SocialList } from 'components/molecules/SocialList/SocialList';

import {
  useNavigationState,
  useNavigationDispatch,
} from 'providers/NavigationStateProvider/NavigationStateProvider';
import { useClickOutside } from 'hooks/useClickOutside';

import { Wrapper, Nav } from './Menu.style';

const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };

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
const pageOverlayVariants = {
  open: {
    opacity: 1,
    transition: {
      ...transition,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0.6,
      ...transition,
    },
  },
};

const parentVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3, staggerDirection: -1 },
  },
  closed: {
    transition: { staggerChildren: 0.1, delayChildren: -0.3 },
  },
};

const Menu = () => {
  const [visibilityCSS, setVisibilityCSS] = useState(false);

  const isMenuOpen = useNavigationState();
  const { closeMenu } = useNavigationDispatch();
  const ref = useClickOutside(closeMenu);

  return (
    <PageOverlay
      isActive={visibilityCSS}
      initial={false}
      animate={isMenuOpen ? 'open' : 'closed'}
      onAnimationStart={() => isMenuOpen && setVisibilityCSS(true)}
      onAnimationComplete={() => !isMenuOpen && setVisibilityCSS(false)}
      variants={pageOverlayVariants}
    >
      <Wrapper ref={ref} variants={sidebarVariants} isMenuOpen={visibilityCSS}>
        <Nav variants={parentVariants}>
          <LangList />
          <NavList />
          <SocialList />
        </Nav>
      </Wrapper>
    </PageOverlay>
  );
};

export { Menu };
