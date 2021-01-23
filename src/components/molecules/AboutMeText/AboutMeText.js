import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledText } from './AboutMe.style';

const AboutMeText = ({ content }) => (
  <Wrapper>
    {content.map(({ id, paragraphContent }) => (
      <StyledText key={id}>{paragraphContent}</StyledText>
    ))}
  </Wrapper>
);

AboutMeText.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { AboutMeText };
