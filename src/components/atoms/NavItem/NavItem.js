import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Li, Mask, Text } from './NavItem.style';

const maskVariants = {
  hidden: {
    y: '-100%',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const NavItem = ({ label = 'link', path = '/', colorContext }) => (
  <Li>
    <Link to={path} activeClassName="active">
      <Text colorContext={colorContext}>{label}</Text>
      <Mask variants={maskVariants} initial="hidden" animate="visible" />
    </Link>
  </Li>
);

NavItem.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  colorContext: PropTypes.string.isRequired,
};

export default NavItem;
