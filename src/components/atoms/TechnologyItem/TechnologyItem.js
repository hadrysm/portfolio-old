import React from 'react';
import PropTypes from 'prop-types';

import { Item, StyledText } from './TechnologyItem.style';

const TechnologyItem = ({ text }) => (
  <Item>
    <StyledText color="white" isMedium>
      {text}
    </StyledText>
  </Item>
);

TechnologyItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export { TechnologyItem };
