import React from 'react';
import PropTypes from 'prop-types';

import { SvgHeadlineIcon } from 'components/SVG/SvgHeadlineIcon';

import { Wrapper, StyledText } from './Headline.style';

const Headline = ({ text = 'your text', primary = false, ...props }) => (
  <Wrapper primary={primary}>
    <SvgHeadlineIcon />
    <StyledText isTitle {...props}>
      {text}
    </StyledText>
  </Wrapper>
);

Headline.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  isBig: PropTypes.bool,
  inView: PropTypes.bool,
  as: PropTypes.string,
};

export { Headline };
