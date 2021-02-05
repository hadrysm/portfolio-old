import React from 'react';
import PropTypes from 'prop-types';

import { usePageTransitionDispatch } from 'providers/PageTransitionProvider/PageTransitionProvider';

import { useLocaleState } from 'providers/LocaleProvider/LocaleProvider';

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
  ...props
}) => {
  const { exitAnimation } = usePageTransitionDispatch();
  const { activeLocale } = useLocaleState();

  const isIndex = to === '/';
  const isDefaultLang = defaultLang === activeLocale;
  const path = isDefaultLang || isLocalizedLink ? to : `/${activeLocale}${isIndex ? '' : `${to}`}`;

  if (isButton) {
    return (
      <Link as="button" type={type} isButton role="button" {...props}>
        {children}
      </Link>
    );
  }

  if (isHyperLink) {
    return (
      <Link as="a" isHyperLink href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={path}
      exit={{
        trigger: () => exitAnimation(),
        length: 1.6,
      }}
      entry={{
        delay: 1.5,
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
};

export { CTA };
