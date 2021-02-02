import React from 'react';
import PropTypes from 'prop-types';

import { Animated } from 'animations';
import { useObserverAnimation } from 'hooks/useObserverAnimation';

import { Wrapper, StyledText } from './AboutMe.style';

const AboutMeText = ({ content }) => {
  const [ref, controls] = useObserverAnimation();

  return (
    <Wrapper ref={ref}>
      {content.map(({ id, paragraphContent }, index) => (
        <Animated.FromDirection
          key={id}
          from="bottom"
          duration={1.6}
          delay={0.3}
          custom={index}
          animate={controls}
        >
          <StyledText>{paragraphContent}</StyledText>
        </Animated.FromDirection>
      ))}
    </Wrapper>
  );
};

AboutMeText.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { AboutMeText };
