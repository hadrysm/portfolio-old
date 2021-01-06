import React from 'react';
import PropTypes from 'prop-types';

import { Li, Mask, Text, CTALink } from './NavItem.style';

const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

const maskVariants = {
  open: {
    y: 0,
    transition: {
      ...transition,
    },
  },
  closed: {
    y: '-100%',
    transition: {
      ...transition,
    },
  },
};

const NavItem = ({ label = 'link', path = '/', colorContext }) => (
  <Li>
    <CTALink to={path} activeClassName="active">
      <Text colorContext={colorContext}>{label}</Text>
      <Mask variants={maskVariants} />
    </CTALink>
  </Li>
);

NavItem.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  colorContext: PropTypes.string.isRequired,
};

export default NavItem;
