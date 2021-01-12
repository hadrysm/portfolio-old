import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/atoms/Paragraph/Paragraph';

import { Wrapper } from './AboutMe.style';

const AboutMeText = ({ content }) => (
  <Wrapper>
    {content.map(({ id, paragraphContent }) => (
      <Paragraph key={id}>{paragraphContent}</Paragraph>
    ))}
  </Wrapper>
);

AboutMeText.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AboutMeText;
