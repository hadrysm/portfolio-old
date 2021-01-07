import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './CTA.style';

const CTA = ({
  children = 'click me',
  to = '/',
  href = '',
  isButton = false,
  isHyperLink = false,
  color = '#434149',
  ...props
}) => {
  if (isButton) {
    return (
      <StyledLink as="button" type="button" isButton color={color} {...props}>
        {children}
      </StyledLink>
    );
  }

  if (isHyperLink) {
    return (
      <StyledLink
        as="a"
        isHyperLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledLink to={to} color={color} {...props}>
      {children}
    </StyledLink>
  );
};

CTA.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  to: PropTypes.string,
  href: PropTypes.string,
  isButton: PropTypes.bool,
  isHyperLink: PropTypes.bool,
  color: PropTypes.string,
};

export default CTA;
