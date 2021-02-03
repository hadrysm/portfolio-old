import React from 'react';
import PropTypes from 'prop-types';

import { CTA } from 'components/atoms/CTA/CTA';
import { Animated } from 'animations';

import { useObserverAnimation } from 'hooks/useObserverAnimation';

import { Wrapper } from './SocialIcon.style';

const SocialIcon = ({ icon: Icon, href, name, index }) => {
  const [containerRef, controls] = useObserverAnimation();

  return (
    <Wrapper ref={containerRef}>
      <CTA isHyperLink href={href} aria-label={name}>
        <Animated.FromDirection
          from="bottom"
          animate={controls}
          delay={0.2}
          exit={{ opacity: 0, y: '100%' }}
          custom={index}
        >
          <Icon />
        </Animated.FromDirection>
      </CTA>
    </Wrapper>
  );
};

SocialIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export { SocialIcon };
