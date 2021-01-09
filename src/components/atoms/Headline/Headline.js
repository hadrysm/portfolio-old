import React from 'react';
import PropTypes from 'prop-types';

import SvgHeadlineIcon from 'components/SVG/SvgHeadlineIcon';

import { Wrapper, Text } from './Headline.style';

const Headline = ({ text = 'your text', primary = false }) => (
  <Wrapper primary={primary}>
    <SvgHeadlineIcon />
    <Text>{text}</Text>
  </Wrapper>
);

Headline.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
};

export default Headline;
