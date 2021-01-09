import React from 'react';
import PropTypes from 'prop-types';

import SvgHeadlineIcon from 'components/SVG/SvgHeadlineIcon';

import { Wrapper, Text } from './Headline.style';

const Headline = ({ text = 'your text' }) => (
  <Wrapper>
    <SvgHeadlineIcon />
    <Text>{text}</Text>
  </Wrapper>
);

Headline.propTypes = {
  text: PropTypes.string,
};

export default Headline;
