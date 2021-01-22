import React from 'react';
import PropTypes from 'prop-types';

import { Headline } from 'components/atoms/Headline/Headline';
import { ScrollDown } from 'components/atoms/ScrollDown/ScrollDown';

import { Wrapper, InnerWrapper, StyledContent, Text, Image } from './ProjectHero.style';

const ProjectHero = ({ title, type, aboutContent, image: { url, alt } }) => (
  <Wrapper>
    <StyledContent>
      <InnerWrapper>
        <Headline text={title} isBig as="h2" />
        <Text isItalic>{type}</Text>
        <Text>{aboutContent}</Text>
      </InnerWrapper>
      <InnerWrapper>
        <Image src={url} alt={alt} />
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
