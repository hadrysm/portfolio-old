import React from 'react';
import PropTypes from 'prop-types';

import { Animated } from 'animations';

import { useObserverAnimation } from 'hooks/useObserverAnimation';

import { Wrapper, StyledText, CTALink } from './NavItem.style';

const NavItem = ({ label = 'link', path = '/', color, index }) => {
  const [containerRef, controls] = useObserverAnimation();

  return (
    <Wrapper ref={containerRef}>
      <CTALink to={path} activeClassName="active">
        <Animated.FromDirection
          from="bottom"
          animate={controls}
          delay={0.2}
          exit={{ opacity: 0, y: '100%' }}
          custom={index}
        >
          <StyledText isBig isBold colorContext={color}>
            {label}
          </StyledText>
        </Animated.FromDirection>
      </CTALink>
    </Wrapper>
  );
};

NavItem.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  index: PropTypes.number.isRequired,
  color: PropTypes.objectOf(PropTypes.string).isRequired,
};

export { NavItem };
