import React from 'react';
import PropTypes from 'prop-types';

import { Headline } from 'components/atoms/Headline/Headline';
import { ScrollDown } from 'components/atoms/ScrollDown/ScrollDown';
import { Text } from 'components/atoms/Text/Text';

import SvgProjects from 'components/SVG/SvgProjects';

import { Wrapper, InnerWrapper, StyledText, StyledContent } from './Hero.style';

const Hero = ({ heroTitle, heroSubtitle, secondary = false }) => {
  if (secondary) {
    return (
      <Wrapper>
        <StyledContent>
          <InnerWrapper>
            <Headline text={heroTitle} />
            <StyledText color="white">{heroSubtitle}</StyledText>
          </InnerWrapper>
          <InnerWrapper secondary>
            <SvgProjects role="img" />
          </InnerWrapper>
        </StyledContent>
        <ScrollDown top={85} left={10} />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <StyledContent>
        <InnerWrapper withLine>
          <Text isTitle color="white" isUpper>
            {heroTitle}
          </Text>
          <StyledText color="white">{heroSubtitle}</StyledText>
        </InnerWrapper>
      </StyledContent>
      <ScrollDown top={85} left={10} />
    </Wrapper>
  );
};

Hero.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  heroSubtitle: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};

export { Hero };
