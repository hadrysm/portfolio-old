import React from 'react';
import PropTypes from 'prop-types';

import { usePageTransitionDispatch } from 'providers/PageTransitionProvider/PageTransitionProvider';
import { usePageThemeDispatch } from 'providers/PageThemeProvider/PageThemeProvider';
import { Link } from './CTA.style';

const CTA = ({
  children = 'click me',
  to = '/',
  href = '',
  type = 'button',
  isButton = false,
  isHyperLink = false,
  pageTheme = {
    primary: '#FCBF49',
  },
  ...props
}) => {
  const { exitAnimation, enterAnimation } = usePageTransitionDispatch();
  const changeTheme = usePageThemeDispatch();

  const handleExit = () => exitAnimation();

  const handleEnter = () => {
    enterAnimation();
    changeTheme(pageTheme);
  };

  if (isButton) {
    return (
      <Link as="button" type={type} isButton {...props}>
        {children}
      </Link>
    );
  }

  if (isHyperLink) {
    return (
      <Link as="a" isHyperLink href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      exit={{
        trigger: () => handleExit(),
        length: 1.2,
      }}
      entry={{
        delay: 1.2,
        trigger: () => handleEnter(),
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

CTA.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  to: PropTypes.string,
  href: PropTypes.string,
  isButton: PropTypes.bool,
  type: PropTypes.string,
  isHyperLink: PropTypes.bool,
  pageTheme: PropTypes.objectOf(PropTypes.string),
};

export default CTA;
