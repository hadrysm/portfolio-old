import React from 'react';
import PropTypes from 'prop-types';

import { usePageTransitionDispatch } from 'providers/PageTransitionProvider/PageTransitionProvider';
import { StyledLink } from './CTA.style';

const CTA = ({
  children = 'click me',
  to = '/',
  href = '',
  isButton = false,
  isHyperLink = false,
  ...props
}) => {
  const { runPageTransition } = usePageTransitionDispatch();

  if (isButton) {
    return (
      <StyledLink as="button" type="button" isButton {...props}>
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
    <StyledLink
      to={to}
      onClick={e => {
        e.preventDefault();
        runPageTransition(to);
      }}
      {...props}
    >
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
};

export default CTA;
