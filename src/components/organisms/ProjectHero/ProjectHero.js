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
        <Animated.FromDirection from="bottom" delay={0.5} duration={1.2}>
          <Headline text={title} />
        </Animated.FromDirection>
        <StyledText isItalic isSmall color="white">
          <Animated.Words delay={0.6}>{type}</Animated.Words>
        </StyledText>
        <Text color="white">
          <Animated.Words delay={0.7}>{aboutContent}</Animated.Words>
        </Text>
      </InnerWrapper>
      <InnerWrapper>
        <Animated.FromDirection from="bottom" delay={0.5} duration={1.2}>
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
