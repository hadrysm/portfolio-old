import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Animated } from 'animations';
import { useObserverAnimation } from 'hooks/useObserverAnimation';

import { Wrapper, StyledText } from './AboutMe.style';

const AboutMeText = ({ content }) => {
  const [ref, controls] = useObserverAnimation();

  return (
    <Wrapper ref={ref}>
      {content.map(({ id, paragraphContent }, index) => (
        <Fragment key={id}>
          <Animated.FromDirection
            from="bottom"
            duration={1.1}
            delay={0.3}
            custom={index}
            animate={controls}
          >
            <StyledText>{paragraphContent}</StyledText>
          </Animated.FromDirection>
        </Fragment>
      ))}
    </Wrapper>
  );
};

AboutMeText.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { AboutMeText };
