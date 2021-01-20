import React from 'react';
import PropTypes from 'prop-types';

import { Headline } from 'components/atoms/Headline/Headline';
import { ScrollDown } from 'components/atoms/ScrollDown/ScrollDown';

import SvgProjects from 'components/SVG/SvgProjects';

import { Wrapper, InnerWrapper, Title, StyledParagraph, StyledContent } from './Hero.style';

const Hero = ({ heroTitle, heroSubtitle, secondary = false }) => {
  if (secondary) {
    return (
      <Wrapper secondary>
        <StyledContent>
          <InnerWrapper>
            <Headline text={heroTitle} isBig as="h2" />
            <StyledParagraph>{heroSubtitle}</StyledParagraph>
          </InnerWrapper>
          <InnerWrapper secondary>
            <SvgProjects />
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
          <Title>{heroTitle}</Title>
          <StyledParagraph>{heroSubtitle}</StyledParagraph>
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
