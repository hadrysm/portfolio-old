import React from 'react';
import PropTypes from 'prop-types';

import { TechnologyItem } from 'components/atoms/TechnologyItem/TechnologyItem';

import { List } from './TechnologyList.style';

const TechnologyList = ({ technologies }) => (
  <List>
    {technologies.map(({ id, name }) => (
      <TechnologyItem key={id} text={name} />
    ))}
  </List>
);

TechnologyList.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { TechnologyList };
