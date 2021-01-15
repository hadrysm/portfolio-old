import React from 'react';
import PropTypes from 'prop-types';

import { Item, Text } from './TechnologyItem.style';

const TechnologyItem = ({ text }) => (
  <Item>
    <Text>{text}</Text>
  </Item>
);

TechnologyItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export { TechnologyItem };
