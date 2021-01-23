import React from 'react';
import PropTypes from 'prop-types';

import { Headline } from 'components/atoms/Headline/Headline';
import { Text } from 'components/atoms/Text/Text';
import { ScrollDown } from 'components/atoms/ScrollDown/ScrollDown';

import { Wrapper, InnerWrapper, StyledContent, Image, StyledText } from './ProjectHero.style';

const ProjectHero = ({ title, type, aboutContent, image: { url, alt } }) => (
  <Wrapper>
    <StyledContent>
      <InnerWrapper>
        <Headline text={title} />
        <StyledText isItalic isSmall color="white">
          {type}
        </StyledText>
        <Text color="white">{aboutContent}</Text>
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
