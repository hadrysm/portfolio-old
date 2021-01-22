import React from 'react';
import PropTypes from 'prop-types';

import { usePageTransitionDispatch } from 'providers/PageTransitionProvider/PageTransitionProvider';
import { usePageThemeDispatch } from 'providers/PageThemeProvider/PageThemeProvider';
import { useLocaleState } from 'providers/LocaleProvider/LocaleProvider';
import { pageTheme as pageThemes } from 'assets/styles/theme';
import locales from 'config/locales';
import { Link } from './CTA.style';

const { siteLanguage: defaultLang } = locales.find(({ default: isDefault }) => isDefault);

const CTA = ({
  children = 'click me',
  to = '/',
  href = '',
  type = 'button',
  isButton = false,
  isLocalizedLink = false,
  isHyperLink = false,
  pageTheme = pageThemes.home,
  ...props
}) => {
  const { exitAnimation, enterAnimation } = usePageTransitionDispatch();
  const changeTheme = usePageThemeDispatch();
  const { activeLocale } = useLocaleState();

  const isIndex = to === '/';
  const isDefaultLang = defaultLang === activeLocale;
  const path = isDefaultLang || isLocalizedLink ? to : `/${activeLocale}${isIndex ? '' : `${to}`}`;

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
      to={path}
      exit={{
        trigger: () => exitAnimation(),
        length: 1.3,
      }}
      entry={{
        delay: 1.15,
        trigger: () => {
          enterAnimation();
          changeTheme(pageTheme);
        },
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
  isLocalizedLink: PropTypes.bool,
  pageTheme: PropTypes.objectOf(PropTypes.string),
};

export { CTA };
