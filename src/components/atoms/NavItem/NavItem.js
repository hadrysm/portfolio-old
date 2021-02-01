import React from 'react';
import PropTypes from 'prop-types';

import { Li, StyledText, CTALink } from './NavItem.style';

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

const textVariants = {
  open: {
    y: 0,
    transition: {
      ...transition,
    },
  },
  closed: {
    y: '100%',
    transition: {
      ...transition,
    },
  },
};

const NavItem = ({ label = 'link', path = '/', color }) => (
  <Li>
    <CTALink to={path} activeClassName="active">
      <StyledText isBig isBold colorContext={color} variants={textVariants}>
        {label}
      </StyledText>
    </CTALink>
  </Li>
);

NavItem.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  color: PropTypes.objectOf(PropTypes.string).isRequired,
};

export { NavItem };
