import React from 'react';
import PropTypes from 'prop-types';

import SvgHeadlineIcon from 'components/SVG/SvgHeadlineIcon';

import { Wrapper, Text } from './Headline.style';

const Headline = ({ text = 'your text', primary = false, isBig = false, as = 'h3' }) => (
  <Wrapper primary={primary}>
    <SvgHeadlineIcon />
    <Text isBig={isBig} as={as}>
      {text}
    </Text>
  </Wrapper>
);

Headline.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  isBig: PropTypes.bool,
  as: PropTypes.string,
};

export { Headline };
