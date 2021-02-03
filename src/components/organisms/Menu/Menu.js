import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { PageOverlay } from 'components/atoms/PageOverlay/PageOverlay';
import { LangList } from 'components/molecules/LangList/LangList';
import { NavList } from 'components/molecules/NavList/NavList';
import { SocialList } from 'components/molecules/SocialList/SocialList';
import { pageOverlayVariants, navigationVariants, Animated } from 'animations';

import { useNavigation } from 'providers/NavigationStateProvider/NavigationStateProvider';
import { useClickOutside } from 'hooks/useClickOutside';

import { Wrapper, Nav } from './Menu.style';

const Menu = () => {
  const [isMenuOpen, { closeMenu }] = useNavigation();
  const ref = useClickOutside(closeMenu);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <PageOverlay variants={pageOverlayVariants} initial="hidden" animate="visible" exit="exit">
          <Animated.Custom variants={navigationVariants}>
            <Wrapper ref={ref}>
              <Nav>
                <LangList />
                <NavList />
                <SocialList />
              </Nav>
            </Wrapper>
          </Animated.Custom>
        </PageOverlay>
      )}
    </AnimatePresence>
  );
};

export { Menu };
