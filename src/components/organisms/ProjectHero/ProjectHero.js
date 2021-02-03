import React from 'react';
import PropTypes from 'prop-types';

import { Headline } from 'components/atoms/Headline/Headline';
import { Text } from 'components/atoms/Text/Text';
import { ScrollDown } from 'components/atoms/ScrollDown/ScrollDown';
import { Animated } from 'animations';

import { Wrapper, InnerWrapper, StyledContent, Image, StyledText } from './ProjectHero.style';

const ProjectHero = ({ title, type, aboutContent, image: { url, alt } }) => (
  <Wrapper>
    <StyledContent>
      <InnerWrapper>
        <Animated.FromDirection from="bottom" delay={0.5} duration={1.1}>
          <Headline text={title} />
        </Animated.FromDirection>
        <Animated.FromDirection from="bottom" delay={0.7} duration={1.1}>
          <StyledText isItalic isSmall color="white">
            {type}
          </StyledText>
        </Animated.FromDirection>
        <Animated.FromDirection from="bottom" delay={0.7} duration={1.1}>
          <Text color="white">{aboutContent}</Text>
        </Animated.FromDirection>
      </InnerWrapper>
      <InnerWrapper>
        <Animated.FromDirection from="bottom" delay={0.5} duration={1.1}>
          <Image src={url} alt={alt} role="img" />
        </Animated.FromDirection>
      </InnerWrapper>
    </StyledContent>
    <ScrollDown top={85} left={10} />
  </Wrapper>
);

ProjectHero.propTypes = {
  title: PropTypes.string.isRequired,
  aboutContent: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.string).isRequired,
};

export { ProjectHero };
