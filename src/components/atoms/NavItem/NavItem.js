import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink, Li, Mask, Text } from './NavItem.style';

const maskVariants = {
  hidden: {
    scale: 0,
  },
  hover: {
    scale: 1,
  },
};

const NavItem = ({ label = 'link', path = '/', colorContext }) => (
  <Li whileHover="hover" initial="hidden">
    <StyledLink to={path} activeClassName="active">
      <Text>{label}</Text>
      <Mask className="mask" colorContext={colorContext} variants={maskVariants} />
    </StyledLink>
  </Li>
);

NavItem.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  colorContext: PropTypes.string.isRequired,
};

export default NavItem;
